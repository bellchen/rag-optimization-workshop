// RAG优化策略工坊 - Service Worker
// 提供离线访问和缓存功能

const CACHE_NAME = 'rag-workshop-v1';
const STATIC_CACHE = 'rag-workshop-static-v1';
const DYNAMIC_CACHE = 'rag-workshop-dynamic-v1';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/learn.html',
  '/flashcard.html',
  '/roots.html',
  '/root-detail.html',
  '/progress.html',
  '/css/minimal.css',
  '/js/wordData.js',
  '/js/siteConfig.js',
  '/js/storage.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 安装事件 - 缓存静态资源
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // 删除旧版本的缓存
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 只处理同源请求
  if (url.origin !== location.origin) {
    return;
  }
  
  // 对于导航请求，使用网络优先策略
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // 缓存成功的响应
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // 网络失败时从缓存返回
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // 如果没有缓存，返回离线页面
              return caches.match('/index.html');
            });
        })
    );
    return;
  }
  
  // 对于其他请求，使用缓存优先策略
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // 从缓存返回，同时在后台更新
          fetch(request)
            .then(response => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE)
                  .then(cache => cache.put(request, responseClone));
              }
            })
            .catch(() => {
              // 网络请求失败，忽略
            });
          
          return cachedResponse;
        }
        
        // 缓存中没有，从网络获取
        return fetch(request)
          .then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => cache.put(request, responseClone));
            }
            return response;
          });
      })
  );
});

// 处理消息事件
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 后台同步（如果支持）
if ('sync' in self.registration) {
  self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
      event.waitUntil(
        // 执行后台同步任务
        console.log('Service Worker: Background sync triggered')
      );
    }
  });
}

// 推送通知（如果需要）
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: '查看详情',
          icon: '/icon-192.png'
        },
        {
          action: 'close',
          title: '关闭',
          icon: '/icon-192.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// 通知点击事件
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 错误处理
self.addEventListener('error', event => {
  console.error('Service Worker: Error occurred', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('Service Worker: Unhandled promise rejection', event.reason);
});

console.log('Service Worker: Script loaded');