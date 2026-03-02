const WordRoots = [
  {
    id: 1,
    root: "多查询重写 (Multi-Query)",
    origin: "查询优化",
    meaning: "将单个查询改写为多个不同表达的查询以提高召回率",
    description: "多查询重写是一种查询扩展技术，通过将用户的原始查询转换为多个语义相似但表达不同的查询变体，从而增加检索到相关文档的概率。这种方法特别适用于处理用户查询表达不够准确或存在歧义的情况。系统会生成3-5个查询变体，每个变体从不同角度描述用户意图，然后对所有变体的检索结果进行合并和去重，最终返回更全面的结果集。",
    examples: [
      {
        word: "用户查询：'如何提高模型性能'",
        meaning: "原始查询表达",
        breakdown: { root: "多查询重写" },
        explanation: "系统将其重写为：'模型性能优化方法'、'提升AI模型效果的技巧'、'机器学习模型调优策略'等多个变体"
      },
      {
        word: "电商搜索场景",
        meaning: "商品检索优化",
        breakdown: { root: "多查询重写" },
        explanation: "用户搜索'便宜的手机'可重写为'性价比高的手机'、'低价智能手机'、'经济实惠的移动设备'等"
      },
      {
        word: "医疗知识问答",
        meaning: "专业术语转换",
        breakdown: { root: "多查询重写" },
        explanation: "将'头疼'重写为'头痛'、'脑部疼痛'、'颅内疼痛症状'等医学相关表达"
      }
    ],
    quiz: {
      question: "多查询重写的主要目的是什么？",
      options: [
        "减少查询处理时间",
        "提高检索召回率和覆盖面",
        "降低系统计算成本",
        "简化用户查询表达"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "HyDE (Hypothetical Document Embeddings)",
    origin: "查询优化",
    meaning: "先生成假设性答案文档，再用其嵌入向量进行检索",
    description: "HyDE是一种创新的检索策略，其核心思想是让大语言模型根据用户查询先生成一个假设性的答案文档，然后使用这个生成文档的嵌入向量去检索真实的相关文档。这种方法基于一个重要假设：生成的假设答案在语义空间中更接近真实的相关文档，比原始查询更适合作为检索的种子。HyDE特别适用于复杂的知识问答场景，能够有效缓解查询-文档语义鸿沟问题。",
    examples: [
      {
        word: "科学问答场景",
        meaning: "复杂概念检索",
        breakdown: { root: "HyDE" },
        explanation: "用户问'什么是量子纠缠'，系统先生成假设答案'量子纠缠是两个粒子之间的神秘关联...'，再用此答案检索相关文档"
      },
      {
        word: "技术文档检索",
        meaning: "API使用指南",
        breakdown: { root: "HyDE" },
        explanation: "查询'如何使用OpenAI API'时，先生成假设的使用示例代码，再检索真实的技术文档"
      },
      {
        word: "法律条文查询",
        meaning: "法规解释检索",
        breakdown: { root: "HyDE" },
        explanation: "询问某个法律概念时，先生成假设的法条解释，再匹配真实的法律条文"
      }
    ],
    quiz: {
      question: "HyDE方法的核心创新点是什么？",
      options: [
        "直接使用原始查询进行检索",
        "先生成假设答案再用其检索",
        "对查询进行关键词提取",
        "使用多个检索模型并行处理"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "查询扩展 (Query Expansion)",
    origin: "查询优化",
    meaning: "通过添加同义词、上下位词等相关词汇来丰富原始查询",
    description: "查询扩展是信息检索中的经典技术，通过在原始查询中添加语义相关的词汇来提高检索效果。扩展词汇通常包括同义词、近义词、上位词、下位词、相关术语等。现代查询扩展方法结合了词典、知识图谱、词嵌入模型等多种资源。这种技术特别适用于处理词汇稀疏性问题，能够有效提高检索的召回率，同时保持较好的精确率。",
    examples: [
      {
        word: "医疗查询扩展",
        meaning: "疾病症状检索",
        breakdown: { root: "查询扩展" },
        explanation: "查询'发烧'扩展为'发热、体温升高、高热、低热、发烧症状'等相关医学术语"
      },
      {
        word: "电商商品搜索",
        meaning: "产品类别扩展",
        breakdown: { root: "查询扩展" },
        explanation: "搜索'笔记本'扩展为'笔记本电脑、laptop、便携电脑、移动工作站'等"
      },
      {
        word: "学术文献检索",
        meaning: "专业术语扩展",
        breakdown: { root: "查询扩展" },
        explanation: "查询'机器学习'扩展为'ML、人工智能、深度学习、神经网络、算法'等相关概念"
      }
    ],
    quiz: {
      question: "查询扩展主要解决什么问题？",
      options: [
        "查询处理速度慢",
        "词汇稀疏性和召回率低",
        "检索结果排序不准确",
        "系统内存占用过高"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "Step-Back Prompting",
    origin: "查询优化",
    meaning: "先问更抽象、更高层次的问题，再回答具体问题",
    description: "Step-Back Prompting是一种查询重构策略，其核心思想是在回答具体问题之前，先退一步思考更抽象、更基础的相关问题。这种方法能够帮助系统建立更好的上下文理解，从更广阔的知识背景出发来解决具体问题。通过先检索和理解高层次的概念和原理，系统能够更准确地定位和回答细节性的问题，特别适用于需要深度推理的复杂问答场景。",
    examples: [
      {
        word: "物理问题求解",
        meaning: "复杂计算问题",
        breakdown: { root: "Step-Back Prompting" },
        explanation: "回答'这个电路的电流是多少'前，先问'什么是欧姆定律'、'电路分析的基本原理是什么'"
      },
      {
        word: "历史事件分析",
        meaning: "具体事件理解",
        breakdown: { root: "Step-Back Prompting" },
        explanation: "分析某个具体历史事件前，先了解'这个时代的背景是什么'、'相关的历史趋势有哪些'"
      },
      {
        word: "编程问题解决",
        meaning: "代码实现指导",
        breakdown: { root: "Step-Back Prompting" },
        explanation: "解决具体编程问题前，先理解'这种算法的基本思想'、'相关的数据结构特点'"
      }
    ],
    quiz: {
      question: "Step-Back Prompting的关键策略是什么？",
      options: [
        "直接回答用户的具体问题",
        "先理解抽象概念再解决具体问题",
        "将复杂问题分解为简单问题",
        "使用多个模型并行处理"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "查询分解 (Query Decomposition)",
    origin: "查询优化",
    meaning: "将复杂查询拆分为多个简单的子查询",
    description: "查询分解是处理复杂查询的有效策略，通过将一个包含多个信息需求的复杂查询拆分为多个相对简单的子查询，然后分别处理每个子查询并合并结果。这种方法能够提高检索的精确性和可控性，特别适用于多步推理、多条件筛选、复合问题等场景。每个子查询都可以独立优化，最终通过适当的逻辑组合得到完整答案。",
    examples: [
      {
        word: "复合条件搜索",
        meaning: "多维度筛选",
        breakdown: { root: "查询分解" },
        explanation: "'找一个价格低于1000元、评分高于4.5、支持快充的手机'分解为价格、评分、功能三个子查询"
      },
      {
        word: "多步推理问题",
        meaning: "逻辑链条分析",
        breakdown: { root: "查询分解" },
        explanation: "'如果明天下雨，我应该带什么去公园'分解为'明天天气预报'和'雨天公园活动建议'两个子问题"
      },
      {
        word: "对比分析查询",
        meaning: "多对象比较",
        breakdown: { root: "查询分解" },
        explanation: "'比较iPhone和Android手机的优缺点'分解为'iPhone特点'和'Android特点'两个独立查询"
      }
    ],
    quiz: {
      question: "查询分解最适用于哪种场景？",
      options: [
        "简单的关键词搜索",
        "复杂的多条件或多步骤查询",
        "单一概念的定义查询",
        "实时数据的快速检索"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "RAG-Fusion",
    origin: "查询优化",
    meaning: "结合多查询重写和RRF融合的综合检索策略",
    description: "RAG-Fusion是一种综合性的检索优化方法，它将多查询重写技术与倒数排名融合(RRF)算法相结合。首先生成多个查询变体，然后对每个变体分别进行检索，最后使用RRF算法对所有检索结果进行智能融合和重排序。这种方法能够充分利用不同查询表达的优势，通过多样化的检索路径获得更全面、更准确的结果集，是目前较为先进的RAG优化策略之一。",
    examples: [
      {
        word: "学术论文检索",
        meaning: "多角度文献搜索",
        breakdown: { root: "RAG-Fusion" },
        explanation: "搜索'深度学习在医疗中的应用'生成多个变体，分别检索后用RRF融合排序"
      },
      {
        word: "企业知识库查询",
        meaning: "内部文档检索",
        breakdown: { root: "RAG-Fusion" },
        explanation: "查询公司政策时，生成不同表达方式，检索后融合结果以获得最相关的政策文档"
      },
      {
        word: "法律案例研究",
        meaning: "判例检索分析",
        breakdown: { root: "RAG-Fusion" },
        explanation: "研究某类法律问题时，用多种法律术语表达，检索相关判例后融合排序"
      }
    ],
    quiz: {
      question: "RAG-Fusion的核心组成部分是什么？",
      options: [
        "单一查询和简单排序",
        "多查询重写和RRF融合",
        "关键词提取和TF-IDF",
        "语义分析和聚类算法"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "FLARE (Forward-Looking Active REtrieval)",
    origin: "查询优化",
    meaning: "基于已生成内容动态决定何时进行额外检索",
    description: "FLARE是一种自适应的检索策略，它能够在生成过程中动态判断是否需要进行额外的信息检索。系统会监控生成内容的置信度和完整性，当检测到信息不足或不确定性较高时，会主动触发新的检索操作。这种方法实现了检索和生成的深度融合，能够根据实际需要灵活调整检索频率和时机，特别适用于需要多轮信息补充的复杂问答场景。",
    examples: [
      {
        word: "长文档写作",
        meaning: "动态信息补充",
        breakdown: { root: "FLARE" },
        explanation: "写作过程中发现某个概念需要更多细节时，自动检索相关资料并继续写作"
      },
      {
        word: "技术问题解答",
        meaning: "渐进式信息获取",
        breakdown: { root: "FLARE" },
        explanation: "回答编程问题时，根据代码复杂度动态检索API文档、最佳实践等补充信息"
      },
      {
        word: "医疗诊断辅助",
        meaning: "症状关联分析",
        breakdown: { root: "FLARE" },
        explanation: "分析病症时，根据已有信息的完整性决定是否需要检索更多相关疾病资料"
      }
    ],
    quiz: {
      question: "FLARE的主要特点是什么？",
      options: [
        "一次性检索所有相关信息",
        "根据生成过程动态决定检索时机",
        "只在用户明确要求时检索",
        "按固定时间间隔进行检索"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "查询规范化 (Query Normalization)",
    origin: "查询优化",
    meaning: "对查询进行纠错、拼写修复、去除冗余等预处理",
    description: "查询规范化是检索系统的重要预处理步骤，旨在将用户输入的原始查询转换为标准化、清洁的形式。主要包括拼写纠错、语法修复、标点符号规范化、大小写统一、停用词处理、重复词去除等操作。这种预处理能够显著提高检索的准确性和稳定性，减少因用户输入错误或不规范导致的检索失败，是构建健壮RAG系统的基础环节。",
    examples: [
      {
        word: "拼写错误修复",
        meaning: "输入纠错处理",
        breakdown: { root: "查询规范化" },
        explanation: "将'machien learning'自动纠正为'machine learning'"
      },
      {
        word: "标点符号清理",
        meaning: "格式标准化",
        breakdown: { root: "查询规范化" },
        explanation: "将'什么是AI???'规范化为'什么是AI'"
      },
      {
        word: "重复词去除",
        meaning: "冗余信息清理",
        breakdown: { root: "查询规范化" },
        explanation: "将'如何如何学习Python编程'简化为'如何学习Python编程'"
      }
    ],
    quiz: {
      question: "查询规范化的主要目的是什么？",
      options: [
        "增加查询的复杂度",
        "提高检索的准确性和稳定性",
        "扩展查询的语义范围",
        "加快查询处理速度"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "多语言查询改写",
    origin: "查询优化",
    meaning: "处理中英混合或多语言查询的标准化改写",
    description: "多语言查询改写专门处理跨语言检索场景，特别是中英混合查询的规范化。在实际应用中，用户经常使用中英混合的表达方式，如'用Python做machine learning'。系统需要识别不同语言成分，进行适当的翻译、转换或保留，生成最适合检索的查询形式。这种技术对于国际化应用和技术文档检索特别重要，能够显著提升多语言环境下的检索效果。",
    examples: [
      {
        word: "技术术语处理",
        meaning: "中英混合查询",
        breakdown: { root: "多语言查询改写" },
        explanation: "将'如何用Python实现API接口'改写为标准的中文或英文表达"
      },
      {
        word: "品牌名称标准化",
        meaning: "商业术语统一",
        breakdown: { root: "多语言查询改写" },
        explanation: "将'iPhone手机怎么样'统一为'苹果手机怎么样'或保持英文品牌名"
      },
      {
        word: "学术概念翻译",
        meaning: "专业术语对应",
        breakdown: { root: "多语言查询改写" },
        explanation: "将'deep learning深度学习'统一为单一语言表达"
      }
    ],
    quiz: {
      question: "多语言查询改写主要解决什么问题？",
      options: [
        "提高查询处理速度",
        "处理中英混合等跨语言检索",
        "增加查询结果数量",
        "简化用户输入过程"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "意图分类与路由",
    origin: "查询优化",
    meaning: "先判断查询类型再决定使用哪种检索策略",
    description: "意图分类与路由是智能检索系统的重要组件，通过分析用户查询的语义特征和意图类型，自动选择最适合的检索策略和处理流程。不同类型的查询（如事实性问答、操作指导、对比分析、创意生成等）需要不同的处理方式。系统首先使用分类模型识别查询意图，然后路由到相应的专门化检索管道，这种方法能够显著提升检索的针对性和效果。",
    examples: [
      {
        word: "事实性查询",
        meaning: "知识问答类型",
        breakdown: { root: "意图分类与路由" },
        explanation: "'北京的人口是多少'被识别为事实查询，路由到结构化数据检索管道"
      },
      {
        word: "操作指导查询",
        meaning: "步骤说明类型",
        breakdown: { root: "意图分类与路由" },
        explanation: "'如何安装Python'被识别为教程查询，路由到操作文档检索管道"
      },
      {
        word: "对比分析查询",
        meaning: "比较评估类型",
        breakdown: { root: "意图分类与路由" },
        explanation: "'iPhone vs Android'被识别为对比查询，路由到多对象分析管道"
      }
    ],
    quiz: {
      question: "意图分类与路由的核心价值是什么？",
      options: [
        "减少系统计算负担",
        "根据查询类型选择最适合的处理策略",
        "统一所有查询的处理方式",
        "加快用户输入速度"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "语义分块 (Semantic Chunking)",
    origin: "分块策略",
    meaning: "基于句子嵌入相似度进行智能文档分割",
    description: "语义分块是一种智能的文档分割方法，它不是简单地按照字符数或句子数进行机械分割，而是基于文本的语义相似度来确定分块边界。系统会计算相邻句子或段落的嵌入向量相似度，当相似度显著下降时，就在该位置进行分块。这种方法能够保持语义的完整性，确保每个分块内容主题统一，避免将相关信息分散到不同块中，从而提高检索的准确性。",
    examples: [
      {
        word: "技术文档分块",
        meaning: "API文档处理",
        breakdown: { root: "语义分块" },
        explanation: "将API文档按功能模块语义分块，而不是按页面或字数机械分割"
      },
      {
        word: "学术论文分块",
        meaning: "研究内容组织",
        breakdown: { root: "语义分块" },
        explanation: "根据论文的逻辑结构和主题转换点进行语义分块，保持每块内容的完整性"
      },
      {
        word: "新闻文章分块",
        meaning: "信息主题分组",
        breakdown: { root: "语义分块" },
        explanation: "按照新闻的不同主题和事件发展阶段进行语义分块"
      }
    ],
    quiz: {
      question: "语义分块相比固定长度分块的主要优势是什么？",
      options: [
        "处理速度更快",
        "保持语义完整性和主题统一",
        "占用存储空间更小",
        "实现更简单"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "递归字符分块",
    origin: "分块策略",
    meaning: "使用RecursiveCharacterTextSplitter进行重叠分块",
    description: "递归字符分块是一种经典的文档分割方法，通过RecursiveCharacterTextSplitter实现。它采用递归的方式，首先尝试按段落分割，如果段落过长则按句子分割，如果句子仍然过长则按词语分割，最后才按字符分割。同时引入重叠机制，让相邻分块之间有一定的内容重叠，这样可以避免重要信息被分割边界截断。这种方法在保持文本自然结构的同时，确保了分块大小的可控性。",
    examples: [
      {
        word: "长篇小说处理",
        meaning: "文学作品分块",
        breakdown: { root: "递归字符分块" },
        explanation: "按章节、段落层次递归分割，保持故事情节的连贯性"
      },
      {
        word: "法律条文分块",
        meaning: "法规文档处理",
        breakdown: { root: "递归字符分块" },
        explanation: "按条款、项目递归分割，确保法律条文的完整性"
      },
      {
        word: "技术手册分块",
        meaning: "操作指南处理",
        breakdown: { root: "递归字符分块" },
        explanation: "按步骤、子步骤递归分割，保持操作流程的逻辑性"
      }
    ],
    quiz: {
      question: "递归字符分块的分割优先级顺序是什么？",
      options: [
        "字符→词语→句子→段落",
        "段落→句子→词语→字符",
        "句子→段落→词语→字符",
        "词语→句子→段落→字符"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "提案式分块 (Proposition-based Chunking)",
    origin: "分块策略",
    meaning: "基于逻辑命题和论述单元进行文档分割",
    description: "提案式分块是一种基于逻辑结构的高级分块方法，它将文档按照逻辑命题、论证单元或观点陈述进行分割。每个分块包含一个完整的逻辑命题或论述，确保信息的逻辑完整性。这种方法特别适用于学术论文、法律文档、政策文件等具有严密逻辑结构的文本。通过保持逻辑单元的完整性，能够提高检索结果的准确性和可理解性。",
    examples: [
      {
        word: "学术论文分析",
        meaning: "研究观点提取",
        breakdown: { root: "提案式分块" },
        explanation: "将论文按研究假设、实验方法、结论等逻辑单元分块"
      },
      {
        word: "政策文件处理",
        meaning: "政策条款组织",
        breakdown: { root: "提案式分块" },
        explanation: "按政策目标、实施措施、预期效果等逻辑命题分块"
      },
      {
        word: "辩论文本分析",
        meaning: "论证结构识别",
        breakdown: { root: "提案式分块" },
        explanation: "按论点、论据、反驳等逻辑单元进行分块"
      }
    ],
    quiz: {
      question: "提案式分块最适合处理哪类文档？",
      options: [
        "随意的聊天记录",
        "具有严密逻辑结构的正式文档",
        "简单的产品描述",
        "社交媒体短文"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "结构化感知分块",
    origin: "分块策略",
    meaning: "识别小标题、章节、表格等结构进行智能分块",
    description: "结构化感知分块是一种能够理解文档内在结构的智能分块方法。它能够识别文档中的标题层级、章节划分、表格边界、列表结构等格式信息，并据此进行合理的分块。这种方法特别适用于结构化程度较高的文档，如技术手册、教科书、报告等。通过保持文档结构的完整性，能够提供更好的上下文信息和更准确的检索结果。",
    examples: [
      {
        word: "技术手册处理",
        meaning: "操作指南分块",
        breakdown: { root: "结构化感知分块" },
        explanation: "按章节、小节、步骤等层级结构进行分块，保持操作流程完整"
      },
      {
        word: "财务报告分析",
        meaning: "表格数据处理",
        breakdown: { root: "结构化感知分块" },
        explanation: "识别表格边界，将相关的表格和说明文字作为一个分块"
      },
      {
        word: "教材内容组织",
        meaning: "知识点分块",
        breakdown: { root: "结构化感知分块" },
        explanation: "按章节、知识点、例题等教学结构进行分块"
      }
    ],
    quiz: {
      question: "结构化感知分块主要依据什么进行分割？",
      options: [
        "文本的字符数量",
        "文档的格式结构信息",
        "词汇的语义相似度",
        "用户的个人偏好"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "固定大小智能重叠",
    origin: "分块策略",
    meaning: "在固定分块大小基础上增加智能重叠机制",
    description: "固定大小智能重叠是对传统固定长度分块的改进方法。它在保持分块大小相对固定的同时，引入智能重叠机制。重叠部分不是简单的字符重复，而是基于语义重要性和上下文连贯性来确定。系统会识别关键信息、过渡句、重要概念等，确保这些内容在相邻分块中都有体现，从而避免信息断裂，提高检索的连续性和完整性。",
    examples: [
      {
        word: "连续对话记录",
        meaning: "对话上下文保持",
        breakdown: { root: "固定大小智能重叠" },
        explanation: "确保对话的关键转折点在相邻分块中都有体现"
      },
      {
        word: "技术教程分块",
        meaning: "步骤连贯性保持",
        breakdown: { root: "固定大小智能重叠" },
        explanation: "让重要的操作步骤和注意事项在相邻分块中重叠出现"
      },
      {
        word: "新闻事件报道",
        meaning: "事件发展脉络",
        breakdown: { root: "固定大小智能重叠" },
        explanation: "确保事件的关键时间点和因果关系在分块间保持连贯"
      }
    ],
    quiz: {
      question: "智能重叠机制的主要目的是什么？",
      options: [
        "增加存储空间使用",
        "避免重要信息在分块边界断裂",
        "提高分块处理速度",
        "减少分块数量"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "多粒度分层索引",
    origin: "索引技术",
    meaning: "构建段落-章节-文档等多层级的索引结构",
    description: "多粒度分层索引是一种层次化的索引构建方法，它为同一份文档创建多个不同粒度的索引层级。通常包括细粒度的段落级索引、中等粒度的章节级索引和粗粒度的文档级索引。检索时可以根据查询的复杂度和范围需求选择合适的粒度层级，或者结合多个层级的结果。这种方法能够在检索精度和覆盖范围之间取得更好的平衡，适应不同类型的查询需求。",
    examples: [
      {
        word: "学术数据库",
        meaning: "论文多层检索",
        breakdown: { root: "多粒度分层索引" },
        explanation: "建立摘要级、章节级、段落级索引，支持不同深度的学术检索"
      },
      {
        word: "企业知识库",
        meaning: "文档层级管理",
        breakdown: { root: "多粒度分层索引" },
        explanation: "构建部门-项目-文档-段落的多层索引结构"
      },
      {
        word: "法律条文库",
        meaning: "法规层级索引",
        breakdown: { root: "多粒度分层索引" },
        explanation: "建立法律-章-节-条-款的多层级索引体系"
      }
    ],
    quiz: {
      question: "多粒度分层索引的主要优势是什么？",
      options: [
        "减少索引存储空间",
        "适应不同查询需求的粒度要求",
        "简化索引构建过程",
        "提高单一层级检索速度"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "RAPTOR (Recursive Abstractive Processing)",
    origin: "索引技术",
    meaning: "递归摘要生成与树形索引构建",
    description: "RAPTOR是一种创新的索引构建方法，它通过递归的方式对文档进行抽象摘要，并构建树形索引结构。系统首先对原始文档进行分块，然后为每个分块生成摘要，接着对这些摘要再次进行聚类和摘要，形成更高层次的抽象。这个过程递归进行，最终形成一个从具体到抽象的树形索引结构。这种方法能够支持多层次的语义检索，既能找到具体细节，也能把握整体概念。",
    examples: [
      {
        word: "大型技术文档",
        meaning: "多层次技术索引",
        breakdown: { root: "RAPTOR" },
        explanation: "从具体API调用到架构概念，构建多层次的技术文档索引"
      },
      {
        word: "历史文献集",
        meaning: "历史事件抽象",
        breakdown: { root: "RAPTOR" },
        explanation: "从具体事件到历史趋势，建立递归的历史知识索引"
      },
      {
        word: "医学文献库",
        meaning: "医学知识层次",
        breakdown: { root: "RAPTOR" },
        explanation: "从症状细节到疾病分类，构建多层次医学知识索引"
      }
    ],
    quiz: {
      question: "RAPTOR方法的核心特点是什么？",
      options: [
        "单层平面索引结构",
        "递归摘要和树形索引",
        "关键词提取和匹配",
        "简单的文档分类"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "GraphRAG / 知识图谱增强",
    origin: "索引技术",
    meaning: "结合知识图谱和向量检索的混合索引方法",
    description: "GraphRAG是将知识图谱与传统向量检索相结合的高级索引技术。它不仅建立文档的向量索引，还构建实体、关系、概念之间的图谱结构。检索时可以利用图谱的结构信息进行推理和路径查找，同时结合向量相似度进行语义匹配。这种方法特别适用于需要复杂推理、关系查询、多跳问答的场景，能够提供更丰富的上下文信息和更准确的答案。",
    examples: [
      {
        word: "医疗诊断系统",
        meaning: "疾病关系推理",
        breakdown: { root: "GraphRAG" },
        explanation: "结合症状-疾病-治疗的知识图谱进行诊断推理"
      },
      {
        word: "金融风控系统",
        meaning: "关联关系分析",
        breakdown: { root: "GraphRAG" },
        explanation: "利用企业-人员-交易的关系图谱进行风险评估"
      },
      {
        word: "学术研究助手",
        meaning: "研究关联发现",
        breakdown: { root: "GraphRAG" },
        explanation: "通过作者-论文-概念的知识图谱发现研究关联"
      }
    ],
    quiz: {
      question: "GraphRAG相比传统向量检索的主要优势是什么？",
      options: [
        "检索速度更快",
        "能够进行关系推理和多跳查询",
        "占用存储空间更小",
        "实现难度更低"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "多向量表示 (Multi-Vector Retriever)",
    origin: "索引技术",
    meaning: "为同一文档创建摘要向量和细节向量等多种表示",
    description: "多向量表示是一种为同一文档创建多种向量表示的索引方法。通常包括摘要向量（捕捉文档的整体主题和要点）和细节向量（保留具体信息和技术细节）。检索时可以根据查询的性质选择合适的向量类型，或者结合多种向量的检索结果。这种方法能够更好地平衡检索的广度和深度，既能找到主题相关的文档，也能定位到具体的技术细节。",
    examples: [
      {
        word: "技术API文档",
        meaning: "概念与实现分离",
        breakdown: { root: "多向量表示" },
        explanation: "创建概念摘要向量和具体代码示例向量，支持不同层次的技术查询"
      },
      {
        word: "产品说明书",
        meaning: "功能与细节并重",
        breakdown: { root: "多向量表示" },
        explanation: "生成产品功能摘要向量和技术参数细节向量"
      },
      {
        word: "学术论文",
        meaning: "理论与实验分层",
        breakdown: { root: "多向量表示" },
        explanation: "构建理论概念向量和实验数据向量，满足不同研究需求"
      }
    ],
    quiz: {
      question: "多向量表示的主要目的是什么？",
      options: [
        "减少向量存储需求",
        "平衡检索的广度和深度",
        "简化检索算法",
        "提高向量计算速度"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "元数据过滤与分面检索",
    origin: "索引技术",
    meaning: "基于文档属性进行筛选和多维度检索",
    description: "元数据过滤与分面检索是一种结构化的检索增强方法，它利用文档的元数据信息（如作者、时间、类别、标签等）进行预筛选和多维度检索。用户可以通过多个维度的组合条件来缩小检索范围，然后在筛选后的结果集中进行语义检索。这种方法特别适用于大型文档库，能够显著提高检索的精确度和用户体验。",
    examples: [
      {
        word: "学术论文库",
        meaning: "多维度学术检索",
        breakdown: { root: "元数据过滤与分面检索" },
        explanation: "按作者、期刊、年份、学科等维度筛选后进行内容检索"
      },
      {
        word: "企业文档系统",
        meaning: "部门权限检索",
        breakdown: { root: "元数据过滤与分面检索" },
        explanation: "按部门、项目、文档类型、保密级别等维度进行权限控制和检索"
      },
      {
        word: "电商商品搜索",
        meaning: "商品属性筛选",
        breakdown: { root: "元数据过滤与分面检索" },
        explanation: "按品牌、价格、评分、类别等属性筛选后进行商品描述检索"
      }
    ],
    quiz: {
      question: "分面检索的核心优势是什么？",
      options: [
        "提高检索算法复杂度",
        "通过多维度筛选提高检索精确度",
        "减少文档存储需求",
        "简化用户查询输入"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "混合检索 (Hybrid Search)",
    origin: "检索方法",
    meaning: "结合密集检索(向量)和稀疏检索(BM25)的优势",
    description: "混合检索是现代RAG系统的核心技术，它将基于向量的密集检索和基于关键词的稀疏检索(如BM25)相结合。密集检索擅长捕捉语义相似性，而稀疏检索在精确匹配和罕见词汇检索方面表现更好。通过合理的权重分配和结果融合策略，混合检索能够充分发挥两种方法的优势，在语义理解和精确匹配之间取得最佳平衡，显著提升检索效果。",
    examples: [
      {
        word: "法律条文检索",
        meaning: "精确条款与语义理解",
        breakdown: { root: "混合检索" },
        explanation: "BM25精确匹配法条编号，向量检索理解法律概念语义"
      },
      {
        word: "技术文档搜索",
        meaning: "API名称与功能描述",
        breakdown: { root: "混合检索" },
        explanation: "稀疏检索匹配具体API名称，密集检索理解功能需求"
      },
      {
        word: "医疗知识问答",
        meaning: "症状名称与病理描述",
        breakdown: { root: "混合检索" },
        explanation: "关键词匹配具体症状名，语义检索理解病理机制"
      }
    ],
    quiz: {
      question: "混合检索结合了哪两种检索方法？",
      options: [
        "关键词检索和全文检索",
        "密集检索(向量)和稀疏检索(BM25)",
        "布尔检索和模糊检索",
        "同义词检索和反义词检索"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "倒数排名融合 (RRF)",
    origin: "检索方法",
    meaning: "通过倒数排名加权融合多个检索结果列表",
    description: "倒数排名融合(Reciprocal Rank Fusion)是一种优雅的结果合并算法，用于融合来自不同检索系统的排序结果。其核心思想是对每个文档在不同排序列表中的排名取倒数，然后加权求和得到最终分数。这种方法不依赖于原始检索分数的分布，具有很好的鲁棒性。RRF特别适用于融合性质不同的检索结果，如向量检索和关键词检索的结果，是混合检索系统的重要组件。",
    examples: [
      {
        word: "多引擎搜索融合",
        meaning: "搜索结果整合",
        breakdown: { root: "倒数排名融合" },
        explanation: "将Google、Bing等多个搜索引擎的结果按RRF算法融合排序"
      },
      {
        word: "推荐系统集成",
        meaning: "多算法推荐融合",
        breakdown: { root: "倒数排名融合" },
        explanation: "融合协同过滤、内容推荐、热度推荐等多种算法的结果"
      },
      {
        word: "学术文献检索",
        meaning: "多数据库结果合并",
        breakdown: { root: "倒数排名融合" },
        explanation: "合并来自不同学术数据库的检索结果，提供统一排序"
      }
    ],
    quiz: {
      question: "RRF算法的核心计算方式是什么？",
      options: [
        "直接平均各系统的原始分数",
        "对排名取倒数后加权求和",
        "选择最高分数作为最终分数",
        "按时间顺序排列结果"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "ColBERT / Late Interaction",
    origin: "检索方法",
    meaning: "在token级别进行细粒度的语义匹配",
    description: "ColBERT(Contextualized Late Interaction over BERT)是一种创新的检索方法，它在token级别进行细粒度的语义交互。与传统方法将整个文档编码为单一向量不同，ColBERT为查询和文档的每个token都生成上下文化的向量表示，然后通过Late Interaction机制计算细粒度的相似度。这种方法能够捕捉更精确的语义匹配信号，特别适用于需要精确理解词汇级别语义关系的检索任务。",
    examples: [
      {
        word: "精确问答检索",
        meaning: "关键词精准匹配",
        breakdown: { root: "ColBERT" },
        explanation: "在问答系统中精确匹配问题中的关键概念和答案中的对应表述"
      },
      {
        word: "代码搜索引擎",
        meaning: "代码语义理解",
        breakdown: { root: "ColBERT" },
        explanation: "理解代码中每个函数名、变量名的语义，进行精确的代码检索"
      },
      {
        word: "专业术语检索",
        meaning: "术语精确匹配",
        breakdown: { root: "ColBERT" },
        explanation: "在医学、法律等专业领域精确匹配专业术语的不同表达"
      }
    ],
    quiz: {
      question: "ColBERT的'Late Interaction'指的是什么？",
      options: [
        "在检索后期才进行交互",
        "在token级别进行细粒度交互",
        "延迟处理用户查询",
        "最后才返回检索结果"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "重排序 (Re-ranking)",
    origin: "检索方法",
    meaning: "使用Cross-Encoder等模型对初步检索结果进行精细排序",
    description: "重排序是检索系统的重要后处理步骤，通过更精细的模型对初步检索结果进行重新排序。常用的重排序模型包括Cross-Encoder、Cohere Rerank、bge-reranker等。这些模型能够同时考虑查询和候选文档的完整信息，进行更准确的相关性判断。重排序通常作为检索管道的最后一步，在相对较小的候选集上运行，以平衡效果和效率。",
    examples: [
      {
        word: "搜索引擎优化",
        meaning: "搜索结果精排",
        breakdown: { root: "重排序" },
        explanation: "对初步检索的Top100结果用Cross-Encoder重新排序，提升Top10的质量"
      },
      {
        word: "推荐系统精化",
        meaning: "推荐结果优化",
        breakdown: { root: "重排序" },
        explanation: "对召回的候选商品用深度模型重排，提高推荐准确性"
      },
      {
        word: "问答系统改进",
        meaning: "答案候选排序",
        breakdown: { root: "重排序" },
        explanation: "对检索到的答案候选用专门的QA重排模型进行精确排序"
      }
    ],
    quiz: {
      question: "重排序在检索管道中的作用是什么？",
      options: [
        "替代初步检索过程",
        "对初步检索结果进行精细排序",
        "扩大检索结果数量",
        "加快检索处理速度"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "上下文压缩 (Contextual Compression)",
    origin: "检索方法",
    meaning: "从检索结果中提取最相关的片段，减少噪音",
    description: "上下文压缩是一种智能的信息提取技术，旨在从检索到的长文档中提取与查询最相关的关键片段。通过使用专门的压缩模型或抽取算法，系统能够识别并保留最重要的信息，同时过滤掉无关的内容。这种方法不仅能够减少后续处理的计算负担，还能提高生成答案的质量和相关性，特别适用于处理长文档和复杂查询的场景。",
    examples: [
      {
        word: "长篇报告摘要",
        meaning: "关键信息提取",
        breakdown: { root: "上下文压缩" },
        explanation: "从100页的年度报告中提取与查询相关的3-5个关键段落"
      },
      {
        word: "法律条文精选",
        meaning: "相关条款筛选",
        breakdown: { root: "上下文压缩" },
        explanation: "从复杂的法律文件中提取与具体案例相关的条款和解释"
      },
      {
        word: "技术文档压缩",
        meaning: "核心内容提取",
        breakdown: { root: "上下文压缩" },
        explanation: "从详细的API文档中提取与当前开发任务相关的核心信息"
      }
    ],
    quiz: {
      question: "上下文压缩的主要目标是什么？",
      options: [
        "增加检索结果的数量",
        "提取最相关片段，减少信息噪音",
        "加快文档处理速度",
        "扩展查询的语义范围"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "最大边际相关性 (MMR)",
    origin: "检索方法",
    meaning: "在相关性和多样性之间平衡的重排序算法",
    description: "最大边际相关性(Maximal Marginal Relevance)是一种平衡检索结果相关性和多样性的重排序算法。MMR在选择检索结果时不仅考虑每个文档与查询的相关性，还考虑已选择文档之间的相似性，优先选择既相关又能提供新信息的文档。这种方法能够避免检索结果过于同质化，确保用户获得更全面、更多样化的信息，特别适用于探索性搜索和需要多角度信息的场景。",
    examples: [
      {
        word: "新闻聚合系统",
        meaning: "多角度新闻选择",
        breakdown: { root: "最大边际相关性" },
        explanation: "选择既相关又来自不同观点的新闻报道，避免信息茧房"
      },
      {
        word: "学术文献推荐",
        meaning: "多样化研究视角",
        breakdown: { root: "最大边际相关性" },
        explanation: "推荐相关但采用不同方法或观点的研究论文"
      },
      {
        word: "产品推荐系统",
        meaning: "多样化商品选择",
        breakdown: { root: "最大边际相关性" },
        explanation: "在满足用户需求的同时，推荐不同类型和特点的商品"
      }
    ],
    quiz: {
      question: "MMR算法主要平衡哪两个因素？",
      options: [
        "速度和准确性",
        "相关性和多样性",
        "成本和效益",
        "简单性和复杂性"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    root: "Self-RAG",
    origin: "生成优化",
    meaning: "具备自我反思、检索决策和纠错能力的RAG系统",
    description: "Self-RAG是一种具备自我监控和调节能力的高级RAG系统。它能够在生成过程中自我评估答案质量，判断是否需要进行额外检索，并对生成的内容进行自我纠错。系统包含多个内置的评判机制，如相关性评估、事实性检查、完整性判断等。当检测到问题时，系统会自动触发重新检索或修正生成，确保最终输出的高质量和可靠性。",
    examples: [
      {
        word: "智能问答助手",
        meaning: "答案质量自检",
        breakdown: { root: "Self-RAG" },
        explanation: "生成答案后自动检查事实准确性，发现错误时重新检索和修正"
      },
      {
        word: "医疗咨询系统",
        meaning: "医学建议验证",
        breakdown: { root: "Self-RAG" },
        explanation: "提供医疗建议时自我验证信息准确性和完整性"
      },
      {
        word: "法律咨询助手",
        meaning: "法律意见审核",
        breakdown: { root: "Self-RAG" },
        explanation: "生成法律意见后自动检查条文引用和逻辑推理的正确性"
      }
    ],
    quiz: {
      question: "Self-RAG的核心能力是什么？",
      options: [
        "提高检索速度",
        "自我反思和纠错",
        "扩大知识库范围",
        "简化用户交互"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    root: "Corrective RAG (CRAG)",
    origin: "生成优化",
    meaning: "对检索结果进行可信度分类并采用不同处理路径",
    description: "Corrective RAG (CRAG)是一种智能的检索结果处理框架，它能够自动评估检索结果的可信度和相关性，并根据评估结果采用不同的处理策略。系统将检索结果分为高可信、中等可信、低可信等级别，对于高可信结果直接使用，对于中等可信结果进行进一步验证或补充检索，对于低可信结果则触发替代检索策略或外部知识源查询。这种方法能够显著提高RAG系统的鲁棒性和准确性。",
    examples: [
      {
        word: "事实核查系统",
        meaning: "信息可信度评估",
        breakdown: { root: "Corrective RAG" },
        explanation: "对新闻信息进行可信度分类，低可信度信息触发多源验证"
      },
      {
        word: "学术研究助手",
        meaning: "文献质量评估",
        breakdown: { root: "Corrective RAG" },
        explanation: "评估检索文献的权威性，低质量文献触发权威数据库检索"
      },
      {
        word: "金融分析系统",
        meaning: "数据源可靠性",
        breakdown: { root: "Corrective RAG" },
        explanation: "评估财务数据的可靠性，不可靠数据触发官方源验证"
      }
    ],
    quiz: {
      question: "CRAG系统的核心功能是什么？",
      options: [
        "加快检索处理速度",
        "评估检索结果可信度并分类处理",
        "扩大检索结果数量",
        "简化检索算法复杂度"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    root: "知识重组 (Knowledge Refinement)",
    origin: "生成优化",
    meaning: "对召回内容进行二次总结、去重和重组",
    description: "知识重组是RAG系统中的重要后处理步骤，旨在对检索到的多个文档片段进行智能整合和优化。主要包括内容去重、信息合并、逻辑重组、矛盾消解等操作。系统会识别不同来源中的重复信息，合并互补信息，解决信息冲突，并按照逻辑顺序重新组织内容。这种处理能够为后续的答案生成提供更清晰、更连贯、更准确的知识基础。",
    examples: [
      {
        word: "多源新闻整合",
        meaning: "新闻信息融合",
        breakdown: { root: "知识重组" },
        explanation: "将来自不同媒体的相同事件报道去重整合，形成完整时间线"
      },
      {
        word: "技术文档合并",
        meaning: "API文档整理",
        breakdown: { root: "知识重组" },
        explanation: "整合不同版本的API文档，去除过时信息，合并最新功能说明"
      },
      {
        word: "学术观点综合",
        meaning: "研究观点整理",
        breakdown: { root: "知识重组" },
        explanation: "整合不同学者的研究观点，识别共识和分歧，形成综合性分析"
      }
    ],
    quiz: {
      question: "知识重组主要解决什么问题？",
      options: [
        "检索速度慢的问题",
        "检索内容重复、冲突和无序的问题",
        "检索结果数量不足的问题",
        "用户查询表达不清的问题"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 30,
    root: "长上下文优化",
    origin: "生成优化",
    meaning: "通过RoPE scaling、上下文缓存等技术处理长文档",
    description: "长上下文优化是针对大语言模型处理长文档能力的技术改进集合。主要包括RoPE scaling（旋转位置编码扩展）、上下文缓存、滑动窗口注意力等技术。这些方法能够让模型有效处理超出原始训练长度的文档，同时保持计算效率和生成质量。长上下文优化对于处理长篇报告、技术手册、法律文件等场景特别重要，能够显著提升RAG系统对长文档的理解和处理能力。",
    examples: [
      {
        word: "长篇报告分析",
        meaning: "年度报告处理",
        breakdown: { root: "长上下文优化" },
        explanation: "处理数百页的企业年报，保持全文语义理解和信息提取能力"
      },
      {
        word: "法律合同审查",
        meaning: "复杂合同分析",
        breakdown: { root: "长上下文优化" },
        explanation: "分析长篇法律合同，理解条款间的复杂关联和潜在风险"
      },
      {
        word: "学术论文综述",
        meaning: "多论文整合",
        breakdown: { root: "长上下文优化" },
        explanation: "同时处理多篇相关论文，进行跨文档的观点比较和综合分析"
      }
    ],
    quiz: {
      question: "长上下文优化主要解决什么限制？",
      options: [
        "模型计算速度限制",
        "模型处理文档长度限制",
        "模型存储空间限制",
        "模型训练数据限制"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 31,
    root: "迭代式RAG",
    origin: "生成优化",
    meaning: "通过多轮检索和生成的迭代过程逐步完善答案",
    description: "迭代式RAG是一种多轮优化的检索生成方法，通过反复的检索-生成-评估-再检索循环来逐步完善答案质量。每一轮迭代都会基于前一轮的生成结果和反馈信息进行更精确的检索，并生成更完善的答案。这种方法特别适用于复杂问题的求解，能够通过多次迭代逐步深入问题本质，补充遗漏信息，修正错误判断，最终得到高质量的综合性答案。",
    examples: [
      {
        word: "复杂问题求解",
        meaning: "多步推理问题",
        breakdown: { root: "迭代式RAG" },
        explanation: "解决'如何设计一个可扩展的微服务架构'这类复杂问题，通过多轮迭代逐步完善方案"
      },
      {
        word: "研究报告撰写",
        meaning: "深度调研分析",
        breakdown: { root: "迭代式RAG" },
        explanation: "撰写市场分析报告时，通过多轮检索补充数据、验证观点、完善结论"
      },
      {
        word: "诊断辅助系统",
        meaning: "医疗诊断推理",
        breakdown: { root: "迭代式RAG" },
        explanation: "根据初步症状进行诊断，然后迭代检索相关疾病信息，逐步缩小诊断范围"
      }
    ],
    quiz: {
      question: "迭代式RAG的核心机制是什么？",
      options: [
        "一次性检索所有信息",
        "多轮检索-生成-评估循环",
        "并行处理多个查询",
        "随机选择检索策略"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 32,
    root: "路由与Agentic RAG",
    origin: "生成优化",
    meaning: "动态决定使用哪个知识源或工具的智能路由系统",
    description: "路由与Agentic RAG是一种智能的多源检索管理系统，它能够根据查询的特点和需求动态选择最合适的知识源、检索方法或处理工具。系统包含多个专门化的检索代理，每个代理负责特定类型的知识或任务。路由器会分析用户查询，判断问题类型和复杂度，然后将任务分配给最合适的代理或代理组合。这种方法能够充分利用不同知识源的优势，提供更精准和全面的服务。",
    examples: [
      {
        word: "智能客服系统",
        meaning: "多领域问题路由",
        breakdown: { root: "路由与Agentic RAG" },
        explanation: "根据用户问题自动路由到技术支持、账务查询、产品咨询等专门代理"
      },
      {
        word: "企业知识助手",
        meaning: "部门知识分发",
        breakdown: { root: "路由与Agentic RAG" },
        explanation: "将员工查询路由到HR政策、技术文档、财务制度等不同知识库"
      },
      {
        word: "学术研究助手",
        meaning: "学科专业分工",
        breakdown: { root: "路由与Agentic RAG" },
        explanation: "根据研究问题路由到计算机科学、生物学、物理学等专业知识代理"
      }
    ],
    quiz: {
      question: "Agentic RAG的主要特点是什么？",
      options: [
        "使用单一检索策略",
        "动态选择最合适的知识源和工具",
        "只处理简单查询",
        "固定的处理流程"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 33,
    root: "自校正循环",
    origin: "生成优化",
    meaning: "通过生成→检查→检索→再生成的循环提升答案质量",
    description: "自校正循环是一种质量保证机制，通过多阶段的生成-验证-修正循环来不断提升答案质量。系统首先基于初始检索结果生成答案，然后对答案进行多维度检查（事实性、完整性、逻辑性等），发现问题时会触发针对性的补充检索，并基于新信息重新生成或修正答案。这个过程可以重复多次，直到答案质量达到预设标准。这种方法特别适用于对准确性要求极高的应用场景。",
    examples: [
      {
        word: "医疗诊断助手",
        meaning: "诊断结果验证",
        breakdown: { root: "自校正循环" },
        explanation: "生成初步诊断后检查症状匹配度，不匹配时补充检索相关疾病信息重新诊断"
      },
      {
        word: "法律意见生成",
        meaning: "法律建议校验",
        breakdown: { root: "自校正循环" },
        explanation: "生成法律意见后检查条文引用准确性，发现错误时重新检索相关法条"
      },
      {
        word: "技术方案设计",
        meaning: "方案可行性验证",
        breakdown: { root: "自校正循环" },
        explanation: "提出技术方案后检查可行性和完整性，不足时补充技术细节和最佳实践"
      }
    ],
    quiz: {
      question: "自校正循环的核心流程是什么？",
      options: [
        "检索→生成→输出",
        "生成→检查→检索→再生成",
        "分析→规划→执行",
        "输入→处理→输出"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 34,
    root: "高质量数据清洗",
    origin: "数据优化",
    meaning: "对训练和检索数据进行去重、去噪、质量提升",
    description: "高质量数据清洗是RAG系统性能优化的基础工作，涉及对原始数据的全面清理和质量提升。主要包括重复内容去除、噪音数据过滤、格式标准化、内容质量评估、错误信息修正等步骤。清洗过程需要结合自动化工具和人工审核，确保数据的准确性、一致性和完整性。高质量的数据是构建可靠RAG系统的前提，直接影响检索准确性和生成质量。",
    examples: [
      {
        word: "网页数据清洗",
        meaning: "网络内容处理",
        breakdown: { root: "高质量数据清洗" },
        explanation: "去除网页中的广告、导航、版权信息等噪音，保留核心内容"
      },
      {
        word: "学术文献整理",
        meaning: "论文数据标准化",
        breakdown: { root: "高质量数据清洗" },
        explanation: "统一引用格式、去除重复发表、修正OCR错误、标准化术语表达"
      },
      {
        word: "企业文档规范",
        meaning: "内部资料整理",
        breakdown: { root: "高质量数据清洗" },
        explanation: "去除过时信息、统一格式标准、修正错误数据、补充缺失信息"
      }
    ],
    quiz: {
      question: "数据清洗的主要目的是什么？",
      options: [
        "减少数据存储成本",
        "提升数据质量和一致性",
        "加快数据处理速度",
        "简化数据结构"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 35,
    root: "嵌入模型微调",
    origin: "数据优化",
    meaning: "针对特定领域对嵌入模型进行专门化训练",
    description: "嵌入模型微调是针对特定领域或任务对通用嵌入模型进行专门化改进的技术。通过使用领域相关的数据对预训练模型进行进一步训练，使其更好地理解特定领域的语义关系和专业术语。微调过程包括数据准备、训练策略设计、超参数优化、效果评估等步骤。领域微调后的模型在相关任务上通常能够显著提升检索准确性和语义理解能力。",
    examples: [
      {
        word: "医疗领域微调",
        meaning: "医学术语理解",
        breakdown: { root: "嵌入模型微调" },
        explanation: "使用医学文献和临床数据微调模型，提升对疾病、症状、治疗方法的语义理解"
      },
      {
        word: "法律领域微调",
        meaning: "法律概念理解",
        breakdown: { root: "嵌入模型微调" },
        explanation: "用法律条文和判例微调模型，增强对法律术语和概念关系的理解"
      },
      {
        word: "金融领域微调",
        meaning: "金融概念理解",
        breakdown: { root: "嵌入模型微调" },
        explanation: "使用金融报告和市场数据微调，提升对金融产品和风险概念的理解"
      }
    ],
    quiz: {
      question: "嵌入模型微调的主要目标是什么？",
      options: [
        "减少模型参数数量",
        "提升特定领域的语义理解能力",
        "加快模型推理速度",
        "降低模型训练成本"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 36,
    root: "双塔模型与对比训练",
    origin: "数据优化",
    meaning: "使用Hard Negative Mining和对比学习优化检索模型",
    description: "双塔模型与对比训练是现代检索系统的核心技术，通过构建查询塔和文档塔的双编码器架构，并使用对比学习方法进行训练。Hard Negative Mining技术用于挖掘难以区分的负样本，提升模型的判别能力。对比训练通过拉近相关样本、推远不相关样本来学习更好的表示空间。这种方法能够显著提升检索模型的精度和泛化能力，是构建高性能检索系统的关键技术。",
    examples: [
      {
        word: "搜索引擎优化",
        meaning: "查询文档匹配",
        breakdown: { root: "双塔模型与对比训练" },
        explanation: "训练查询理解和文档理解的双塔模型，提升搜索相关性"
      },
      {
        word: "推荐系统改进",
        meaning: "用户物品匹配",
        breakdown: { root: "双塔模型与对比训练" },
        explanation: "构建用户塔和物品塔，通过对比学习提升推荐准确性"
      },
      {
        word: "问答系统优化",
        meaning: "问题答案匹配",
        breakdown: { root: "双塔模型与对比训练" },
        explanation: "训练问题编码器和答案编码器，提升问答匹配精度"
      }
    ],
    quiz: {
      question: "Hard Negative Mining的作用是什么？",
      options: [
        "增加训练数据数量",
        "挖掘难以区分的负样本提升判别能力",
        "减少模型训练时间",
        "简化模型结构"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 37,
    root: "时间衰减与新鲜度偏置",
    origin: "数据优化",
    meaning: "对新鲜文档给予更高权重的时间感知检索",
    description: "时间衰减与新鲜度偏置是考虑信息时效性的检索优化策略。系统会根据文档的发布时间、更新时间等时间信息，对检索结果进行时间加权。新发布或最近更新的文档会获得更高的权重，而过时的信息会被降权。这种方法特别适用于新闻、技术文档、政策法规等时效性强的信息检索，能够确保用户获得最新、最相关的信息。",
    examples: [
      {
        word: "新闻检索系统",
        meaning: "最新新闻优先",
        breakdown: { root: "时间衰减与新鲜度偏置" },
        explanation: "搜索某个事件时，优先返回最新的报道和进展"
      },
      {
        word: "技术文档搜索",
        meaning: "最新版本优先",
        breakdown: { root: "时间衰减与新鲜度偏置" },
        explanation: "查找API文档时，优先显示最新版本的说明，降低过时版本的权重"
      },
      {
        word: "政策法规查询",
        meaning: "现行法规优先",
        breakdown: { root: "时间衰减与新鲜度偏置" },
        explanation: "检索法律条文时，优先返回现行有效的法规，标注已废止的条文"
      }
    ],
    quiz: {
      question: "时间衰减机制主要解决什么问题？",
      options: [
        "检索速度慢的问题",
        "信息时效性和新鲜度的问题",
        "存储空间不足的问题",
        "用户界面复杂的问题"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 38,
    root: "多模态RAG",
    origin: "数据优化",
    meaning: "支持图文、表格、OCR等多种数据类型的检索增强",
    description: "多模态RAG是扩展传统文本检索到多种数据类型的综合技术。它能够处理和检索图像、表格、图表、音频、视频等多种模态的信息，并将它们与文本信息进行统一的语义理解和检索。系统通常包含多种专门的编码器，如图像编码器、表格编码器、OCR文本提取器等，能够将不同模态的信息映射到统一的语义空间中进行检索和生成。",
    examples: [
      {
        word: "科研论文分析",
        meaning: "图表数据理解",
        breakdown: { root: "多模态RAG" },
        explanation: "同时理解论文中的文字描述、实验图表、数据表格，提供综合性分析"
      },
      {
        word: "产品手册检索",
        meaning: "图文并茂说明",
        breakdown: { root: "多模态RAG" },
        explanation: "检索产品说明时同时返回文字说明和相关的示意图、操作截图"
      },
      {
        word: "医疗影像诊断",
        meaning: "影像文本结合",
        breakdown: { root: "多模态RAG" },
        explanation: "结合医学影像和病历文本进行综合诊断分析"
      }
    ],
    quiz: {
      question: "多模态RAG的核心能力是什么？",
      options: [
        "只处理文本信息",
        "统一处理图文、表格等多种数据类型",
        "专门处理图像数据",
        "仅支持音频处理"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 39,
    root: "主动检索 (Active Retrieval)",
    origin: "数据优化",
    meaning: "模型自主判断何时需要进行额外信息检索",
    description: "主动检索是一种智能的检索触发机制，让模型能够自主判断在生成过程中何时需要获取额外信息。系统会监控生成过程中的不确定性、知识缺口、事实验证需求等信号，当检测到需要更多信息时自动触发检索操作。这种方法避免了过度检索或检索不足的问题，能够在保证答案质量的同时优化系统效率，实现更智能的信息获取策略。",
    examples: [
      {
        word: "智能写作助手",
        meaning: "写作过程信息补充",
        breakdown: { root: "主动检索" },
        explanation: "写作过程中遇到需要数据支撑的观点时，自动检索相关统计数据"
      },
      {
        word: "技术问答系统",
        meaning: "技术细节补充",
        breakdown: { root: "主动检索" },
        explanation: "回答编程问题时，检测到需要具体API信息时自动查找最新文档"
      },
      {
        word: "新闻分析助手",
        meaning: "背景信息补充",
        breakdown: { root: "主动检索" },
        explanation: "分析新闻事件时，自动检索相关的历史背景和上下文信息"
      }
    ],
    quiz: {
      question: "主动检索的触发机制是什么？",
      options: [
        "定时自动检索",
        "模型自主判断信息需求",
        "用户手动触发",
        "随机检索策略"
      ],
      correctAnswer: 1
    }
  },
  {
    id: 40,
    root: "语义缓存 (Semantic Cache)",
    origin: "数据优化",
    meaning: "基于语义相似度的智能查询缓存系统",
    description: "语义缓存是一种智能的缓存机制，它不是简单地基于查询字符串的精确匹配，而是基于查询的语义相似度来判断是否可以复用之前的检索结果。系统会为每个查询计算语义向量，当新查询与缓存中的历史查询在语义空间中足够相似时，就可以直接返回缓存的结果或进行适当的调整。这种方法能够显著提高系统响应速度，减少重复计算，同时保持较好的准确性。",
    examples: [
      {
        word: "客服问答系统",
        meaning: "相似问题复用",
        breakdown: { root: "语义缓存" },
        explanation: "'如何退货'和'怎样申请退款'语义相似，可以复用缓存的答案"
      },
      {
        word: "学术检索系统",
        meaning: "相关查询缓存",
        breakdown: { root: "语义缓存" },
        explanation: "'机器学习算法'和'ML算法'语义相近，可以共享检索结果"
      },
      {
        word: "企业知识库",
        meaning: "政策查询优化",
        breakdown: { root: "语义缓存" },
        explanation: "不同表达的相同政策查询可以复用之前的检索和分析结果"
      }
    ],
    quiz: {
      question: "语义缓存相比传统缓存的优势是什么？",
      options: [
        "占用更少存储空间",
        "基于语义相似度而非精确匹配",
        "处理速度更快",
        "实现更简单"
      ],
      correctAnswer: 1
    }
  }
];

export { WordRoots };