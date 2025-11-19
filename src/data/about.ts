export const aboutIntro = {
  title: '关于元像AI Lab',
  subtitle: '探索智能边界，构建未来可能',
  description:
    '元像AI Lab 是七宿咨询旗下的专业 AI 研究与实践工作室，致力于将前沿 AI 技术转化为切实可行的商业解决方案。',
  philosophy:
    '在人工智能快速发展的时代，专注于深度技术研究与实践验证，通过持续的技术创新和严谨的项目实践，助力企业在智能化转型中保持竞争优势。',
  mission:
    '通过专业的技术研究和解决方案设计，降低 AI 技术应用门槛，让更多企业受益于人工智能带来的效率提升和业务创新。',
  vision:
    '成为最受信赖的 AI 技术研究与实践工作室，在人工智能技术商业化应用领域树立专业标杆。',
} as const

export const expertiseAreas = [
  {
    id: 'nlp',
    title: '自然语言处理',
    description:
      '专注于大语言模型的应用研究与优化，包括文本生成、对话系统、情感分析、知识图谱构建等方向。',
    strengths: [
      '大语言模型微调与优化',
      '多轮对话系统设计',
      '文本分类与情感分析',
      '知识抽取与推理',
    ],
    icon: 'message-circle',
  },
  {
    id: 'architecture',
    title: '智能系统架构',
    description:
      '设计可扩展、高可用的 AI 系统架构，确保系统稳定性、性能与成本的最佳平衡。',
    strengths: [
      '微服务架构设计',
      '高并发系统优化',
      '数据流水线设计',
      '系统监控与运维',
    ],
    icon: 'boxes',
  },
  {
    id: 'multimodal',
    title: '多模态AI',
    description:
      '探索文本、图像、语音等多模态数据的融合应用，开发创新的跨模态 AI 解决方案。',
    strengths: [
      '视觉语言模型应用',
      '跨模态检索系统',
      '多模态内容生成',
      '智能语音交互',
    ],
    icon: 'sparkle',
  },
  {
    id: 'business-intelligence',
    title: '业务智能化',
    description:
      '将 AI 技术深度融入业务流程，实现传统业务的智能化升级和效率提升。',
    strengths: [
      '智能客服系统',
      '业务流程自动化',
      '数据智能分析',
      '决策支持系统',
    ],
    icon: 'briefcase',
  },
] as const

export const methodology = [
  {
    id: 'feasibility',
    title: '阶段一: 技术可行性分析',
    goal: '全面评估技术方案的可行性与风险',
    tracks: [
      {
        name: '需求技术匹配度分析',
        points: ['业务需求技术化转换', '技术边界识别', '可行性初步判断'],
      },
      {
        name: '技术路线对比评估',
        points: ['多技术方案对比', '优缺点综合分析', '实施难度评估'],
      },
      {
        name: '资源与成本估算',
        points: ['技术资源需求', '时间成本预估', '风险成本分析'],
      },
    ],
  },
  {
    id: 'architecture',
    title: '阶段二: 架构设计优化',
    goal: '设计稳定高效的系统架构',
    tracks: [
      {
        name: '系统架构蓝图设计',
        points: ['组件关系定义', '数据流程设计', '接口规范制定'],
      },
      {
        name: '性能与扩展性设计',
        points: ['性能指标设定', '扩展方案设计', '容灾方案规划'],
      },
      {
        name: '安全与合规考量',
        points: ['数据安全设计', '隐私保护机制', '合规要求满足'],
      },
    ],
  },
  {
    id: 'execution',
    title: '阶段三: 实施方案制定',
    goal: '制定详细可行的实施路径',
    tracks: [
      {
        name: '开发路线图制定',
        points: ['阶段划分明确', '里程碑设定', '交付物定义'],
      },
      {
        name: '资源实施计划',
        points: ['技术资源调配', '时间进度安排', '质量保证措施'],
      },
      {
        name: '风险控制策略',
        points: ['风险识别分类', '应对方案准备', '监控指标设定'],
      },
    ],
  },
  {
    id: 'evaluation',
    title: '阶段四: 效果评估优化',
    goal: '确保方案效果并持续优化',
    tracks: [
      {
        name: '关键指标跟踪',
        points: ['业务指标监控', '技术性能指标', '用户体验指标'],
      },
      {
        name: '效果评估分析',
        points: ['目标达成度评估', '投入产出分析', '用户反馈收集'],
      },
      {
        name: '持续优化建议',
        points: ['性能优化建议', '功能扩展规划', '技术升级路径'],
      },
    ],
  },
] as const

export const qualityCommitments = [
  {
    id: 'innovation',
    title: '技术先进性保证',
    points: [
      '基于最新技术研究成果和实践经验',
      '持续跟踪 AI 技术发展趋势',
      '定期更新技术方案和工具链',
    ],
    icon: 'beaker',
  },
  {
    id: 'validation',
    title: '方案可行性验证',
    points: [
      '所有方案经过实际项目验证',
      '严格的技术可行性评估',
      '完整的实施路径规划',
    ],
    icon: 'shield-check',
  },
  {
    id: 'support',
    title: '持续支持服务',
    points: [
      '项目期间全程技术支持',
      '交付后的技术咨询服务',
      '定期的技术更新通知',
    ],
    icon: 'life-buoy',
  },
  {
    id: 'standards',
    title: '严格标准遵循',
    points: [
      '代码质量和安全标准',
      '数据隐私保护要求',
      '行业合规性标准',
    ],
    icon: 'scale',
  },
] as const

