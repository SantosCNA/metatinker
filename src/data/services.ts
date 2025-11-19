export const servicesOverview = {
  title: '专业AI服务',
  description:
    '元像AI Lab 专注于将复杂的前沿 AI 技术转化为切实可行的商业解决方案，通过深度技术研究与实践验证，确保每个方案的技术先进性。',
} as const

export const services = [
  {
    id: 'architecture-consulting',
    name: 'AI系统架构咨询',
    summary:
      '为企业提供专业的 AI 系统架构设计与优化服务，确保系统的稳定性、可扩展性与成本效益。',
    contents: [
      {
        title: '核心服务',
        items: [
          '系统架构评估与优化',
          '性能调优与扩展性设计',
          '技术风险识别与应对',
        ],
      },
    ],
    deliverables: [
      '系统架构设计文档',
      '技术实施方案',
      '性能优化建议',
    ],
    duration: '典型项目周期: 2-4周',
    icon: 'cube',
  },
  {
    id: 'solution-design',
    name: 'AI解决方案设计',
    summary:
      '基于实际业务需求，设计完整的 AI 解决方案，涵盖从需求分析到技术实施的全流程。',
    process: [
      {
        title: '服务流程',
        steps: [
          '需求分析与技术评估',
          '解决方案架构设计',
          '技术实施方案制定',
          '效果评估与优化',
        ],
      },
    ],
    expertise: [
      {
        title: '技术领域',
        points: ['大语言模型应用', '智能内容生成', '数据分析与洞察', '业务流程自动化'],
      },
    ],
    duration: '典型项目周期: 4-8周',
    icon: 'workflow',
  },
  {
    id: 'research-validation',
    name: '技术研究与验证',
    summary:
      '针对特定技术难题进行深度研究，提供技术可行性验证和原型开发指导。',
    contents: [
      {
        title: '核心服务',
        items: [
          '技术可行性分析',
          '原型设计与开发',
          '技术选型建议',
        ],
      },
    ],
    scenarios: [
      '新技术可行性验证',
      '技术路线决策支持',
      '创新产品概念验证',
    ],
    duration: '典型项目周期: 2-6周',
    icon: 'test-tube',
  },
] as const

