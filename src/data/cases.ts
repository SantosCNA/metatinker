export const caseFilters = {
  industry: ['全部', '企业服务', '消费互联网', '医疗健康', '工业制造'],
  technology: ['全部', '大语言模型', '智能系统', '数据分析', '自动化'],
} as const

export const caseStudies = [
  {
    id: 'ai-insight-assistant',
    name: 'AI Insight Assistant 人工智能洞察助手',
    headline: '企业级智能分析平台解决方案',
    industry: '企业服务',
    categories: ['大语言模型', '数据分析'],
    duration: '项目周期：3个月',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    background:
      '企业在数据分析和决策支持方面面临挑战，需要统一的智能分析平台来整合多源数据，提供实时业务洞察。',
    highlights: [
      {
        title: '统一数据接收架构',
        points: [
          '设计可扩展的数据接入管道',
          '支持结构化与非结构化数据',
          '实时数据流处理能力',
          '数据质量监控机制',
        ],
      },
      {
        title: '多源数据智能分析',
        points: [
          '集成多种AI分析算法',
          '自动特征工程与选择',
          '跨数据源关联分析',
          '异常检测与预警',
        ],
      },
      {
        title: '实时洞察报告生成',
        points: [
          '自动化报告生成系统',
          '多维度数据可视化',
          '智能摘要与关键发现',
          '个性化推送机制',
        ],
      },
    ],
    contributions: [
      '设计微服务架构，支持高并发访问',
      '实现智能缓存策略，提升系统性能',
      '建立数据安全与隐私保护机制',
      '开发可配置的分析模板系统',
    ],
    outcomes: [
      '数据分析效率提升 300%',
      '支持 50+ 企业客户同时使用',
      '平均响应时间 < 500ms',
      '系统可用性 99.9%',
    ],
    ctaLabel: '查看技术细节 →',
    ctaHref: '#contact',
  },
  {
    id: 'eva-digital-companion',
    name: 'Eva 情感陪伴数字人解决方案',
    headline: '基于AI的情感交互系统设计',
    industry: '消费互联网',
    categories: ['大语言模型', '智能系统'],
    duration: '项目周期：4个月',
    stack: ['React Native', 'Python', 'PostgreSQL', 'Redis'],
    background:
      '随着社会对心理健康关注度的提升，需要安全、可靠的情感陪伴解决方案，为用户提供温暖的情感支持体验。',
    highlights: [
      {
        title: '自然语言情感交互',
        points: [
          '情感状态识别算法',
          '上下文感知对话',
          '个性化回应生成',
          '多轮对话管理',
        ],
      },
      {
        title: '2D Live2D Avatar展示',
        points: [
          '实时表情同步',
          '自然动作过渡',
          '低资源消耗优化',
          '跨平台兼容性',
        ],
      },
      {
        title: '安全与伦理边界设计',
        points: [
          '内容安全过滤系统',
          '危机干预机制',
          '用户隐私保护',
          '伦理红线设定',
        ],
      },
      {
        title: '系统稳定性保障',
        points: [
          '容错与降级方案',
          '性能监控告警',
          '自动扩缩容机制',
          '数据备份策略',
        ],
      },
    ],
    contributions: [
      '开发情感状态多维度评估模型',
      '设计轻量级记忆管理系统',
      '实现实时内容安全检测',
      '建立用户反馈学习机制',
    ],
    outcomes: [
      '用户满意度评分 4.8/5.0',
      '平均会话时长 15+ 分钟',
      '次日留存率 65%',
      '危机干预成功率 100%',
    ],
    ctaLabel: '查看技术细节 →',
    ctaHref: '#contact',
  },
  {
    id: 'metatinker-content-platform',
    name: 'MetaTinker 元像内容创作平台',
    headline: '智能内容生成与管理系统',
    industry: '企业服务',
    categories: ['大语言模型', '自动化'],
    duration: '项目周期：2个月',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Redis'],
    background:
      '内容创作者面临创作效率低、质量不稳定等挑战，需要智能化的内容创作工具来提升工作效率和内容质量。',
    highlights: [
      {
        title: '多AI服务智能路由',
        points: [
          '动态提供商选择算法',
          '服务质量实时监控',
          '自动故障转移机制',
          '成本最优策略',
        ],
      },
      {
        title: '内容质量评估体系',
        points: [
          '多维度质量评分',
          '风格一致性检测',
          '语法错误识别',
          '内容原创性验证',
        ],
      },
      {
        title: '成本优化监控方案',
        points: [
          'Token使用优化',
          '缓存策略设计',
          '批量处理优化',
          '用量预测预警',
        ],
      },
      {
        title: '用户体验优化设计',
        points: [
          '直观的操作界面',
          '实时预览功能',
          '模板库管理系统',
          '协作编辑支持',
        ],
      },
    ],
    contributions: [
      '实现AI服务的统一接入网关',
      '开发智能内容质量评估算法',
      '建立成本监控与优化体系',
      '设计多租户数据隔离方案',
    ],
    outcomes: [
      '内容创作效率提升 400%',
      '平均内容质量评分 提升2.3倍',
      'AI服务成本降低 35%',
      '用户创作满意度 92%',
    ],
    ctaLabel: '查看技术细节 →',
    ctaHref: '#contact',
  },
  {
    id: 'eeysai',
    name: 'EeysAI 眼科医生专业助手',
    headline: '集成知识图谱与AI诊断建议的医疗辅助系统',
    industry: '医疗健康',
    categories: ['大语言模型', '智能系统', '数据分析'],
    duration: '项目周期：6个月',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Neo4j'],
    background:
      '眼科医生在临床诊断中需要快速获取专业知识、参考相似病例，并得到AI辅助诊断建议，以提高诊断效率和准确性。',
    highlights: [
      {
        title: '知识图谱构建',
        points: [
          '眼科疾病知识图谱设计',
          '症状-疾病关联关系建模',
          '药物-适应症知识库',
          '多源医学数据整合',
        ],
      },
      {
        title: '案例管理系统',
        points: [
          '结构化病例数据存储',
          '相似病例智能检索',
          '病例分类与标签体系',
          '隐私保护机制',
        ],
      },
      {
        title: 'AI诊断建议',
        points: [
          '基于症状的初步诊断',
          '诊断置信度评估',
          '检查建议推荐',
          '治疗方案参考',
        ],
      },
    ],
    contributions: [
      '设计医疗知识图谱架构，支持复杂查询',
      '开发病例相似度匹配算法',
      '实现AI诊断模型与知识图谱融合',
      '建立医疗数据安全与合规体系',
    ],
    outcomes: [
      '诊断效率提升 40%',
      '知识检索准确率 92%',
      '支持 100+ 眼科医生使用',
      '病例库积累 5000+ 真实案例',
    ],
    ctaLabel: '查看技术细节 →',
    ctaHref: '#contact',
  },
  {
    id: 'erpnext',
    name: 'ERPnext 企业级ERP系统',
    headline: '面向中小企业的可本地部署ERP解决方案',
    industry: '工业制造',
    categories: ['智能系统', '自动化', '数据分析'],
    duration: '项目周期：4个月',
    stack: ['Python', 'Frappe Framework', 'MariaDB', 'Redis'],
    background:
      '中小企业需要一套功能完整、可本地部署的ERP系统，涵盖财务、库存、生产、销售等核心业务流程，支持企业数字化转型。',
    highlights: [
      {
        title: '核心业务模块',
        points: [
          '财务管理与会计核算',
          '库存管理与采购',
          '生产计划与执行',
          '销售与客户管理',
        ],
      },
      {
        title: '本地化部署',
        points: [
          '私有化部署方案',
          '数据安全与隐私保护',
          '定制化配置能力',
          '离线运行支持',
        ],
      },
      {
        title: '智能化功能',
        points: [
          '智能库存预警',
          '自动化财务对账',
          '生产计划优化',
          '数据分析与报表',
        ],
      },
    ],
    contributions: [
      '设计可扩展的ERP系统架构',
      '实现多租户数据隔离方案',
      '开发自动化业务流程引擎',
      '建立数据迁移与集成方案',
    ],
    outcomes: [
      '业务流程效率提升 50%',
      '数据准确性提升至 98%',
      '支持 200+ 中小企业部署',
      '系统可用性 99.5%',
    ],
    ctaLabel: '查看技术细节 →',
    ctaHref: '#contact',
  },
] as const

