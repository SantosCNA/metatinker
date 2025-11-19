import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { caseFilters, caseStudies } from '@/data/cases'
import { Tag } from '@/components/common/Tag'
import { GradientCard } from '@/components/common/GradientCard'
import { baseTransition, fadeInVariants } from '@/components/sections/animations'

export function CasesSection() {
  const [industryFilter, setIndustryFilter] = useState<(typeof caseFilters.industry)[number]>('全部')
  const [technologyFilter, setTechnologyFilter] = useState<(typeof caseFilters.technology)[number]>('全部')

  const filteredCases = useMemo(() => {
    return caseStudies.filter((item) => {
      if (industryFilter !== '全部' && item.industry !== industryFilter) return false
      if (
        technologyFilter !== '全部' &&
        !item.categories.some((category) => category === technologyFilter)
      )
        return false
      return true
    })
  }, [industryFilter, technologyFilter])

  return (
    <section id="cases" className="relative bg-background-card/50 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background-card/70 to-transparent" />

      <div className="design-container relative z-10 space-y-14">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={baseTransition}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-heading-1 text-text-primary">项目实践案例</h2>
          <p className="mt-4 text-lg text-text-secondary">
            通过真实项目验证技术方案的可行性与商业价值，涵盖企业服务、消费互联网与智能内容等领域。
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {caseFilters.industry.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setIndustryFilter(category)}
                className={
                  industryFilter === category
                    ? 'rounded-full border border-brand-primary bg-brand-primary/20 px-4 py-2 text-sm text-text-primary transition'
                    : 'rounded-full border border-white/10 px-4 py-2 text-sm text-text-secondary transition hover:border-brand-primary/40 hover:text-text-primary'
                }
              >
                行业·{category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {caseFilters.technology.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setTechnologyFilter(category)}
                className={
                  technologyFilter === category
                    ? 'rounded-full border border-accent-teal bg-accent-teal/20 px-4 py-2 text-sm text-accent-teal transition'
                    : 'rounded-full border border-white/10 px-4 py-2 text-sm text-text-secondary transition hover:border-accent-teal/40 hover:text-text-primary'
                }
              >
                技术·{category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCases.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...baseTransition, delay: index * 0.1 }}
            >
              <GradientCard className="group h-full overflow-hidden border border-white/10 p-0">
                <div className="space-y-6 p-6">
                  <div className="flex flex-col gap-3">
                    <Tag>{item.industry}</Tag>
                    <h3 className="font-heading text-heading-3 text-text-primary">{item.name}</h3>
                    <p className="text-sm text-brand-primary/80">{item.headline}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-text-secondary">{item.background}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-text-secondary/80">
                      {item.categories.map((category) => (
                        <span
                          key={`${item.id}-${category}`}
                          className="rounded-full border border-text-secondary/30 px-3 py-1"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {item.highlights.map((highlight) => (
                      <div key={highlight.title} className="rounded-xl border border-white/8 bg-background-card/60 p-4">
                        <p className="text-sm font-semibold text-text-primary">{highlight.title}</p>
                        <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                          {highlight.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="text-brand-primary">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-text-primary">技术贡献</p>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {item.contributions.map((contribution) => (
                        <li key={contribution} className="flex gap-2">
                          <span className="text-accent-teal">✓</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-text-primary">成果指标</p>
                    <div className="grid grid-cols-1 gap-2 text-sm text-text-secondary sm:grid-cols-2">
                      {item.outcomes.map((outcome) => (
                        <span
                          key={outcome}
                          className="rounded-lg border border-brand-primary/25 bg-brand-primary/10 px-3 py-2 text-center"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={item.ctaHref}
                  className="group flex items-center justify-between border-t border-white/10 px-6 py-4 text-sm text-brand-primary transition hover:text-brand-light"
                >
                  {item.ctaLabel}
                  <ExternalLink size={16} className="transition group-hover:translate-x-1" />
                </a>
              </GradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

