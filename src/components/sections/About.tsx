import { motion } from 'framer-motion'
import { Beaker, Boxes, Briefcase, LifeBuoy, MessageCircle, Scale, Sparkle, ShieldCheck } from 'lucide-react'
import { aboutIntro, expertiseAreas, methodology, qualityCommitments } from '@/data/about'
import { ElevatedCard, GradientCard } from '@/components/common/GradientCard'
import { Tag } from '@/components/common/Tag'
import { baseTransition, fadeInVariants } from '@/components/sections/animations'

const expertiseIconMap = {
  'message-circle': MessageCircle,
  boxes: Boxes,
  sparkle: Sparkle,
  briefcase: Briefcase,
} as const

const qualityIconMap = {
  beaker: Beaker,
  'shield-check': ShieldCheck,
  'life-buoy': LifeBuoy,
  scale: Scale,
} as const

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background/70 py-24 sm:py-32">
      <div className="design-container space-y-16">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={baseTransition}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          <Tag>关于元像AI Lab</Tag>
          <h2 className="font-heading text-heading-1 text-text-primary">{aboutIntro.subtitle}</h2>
          <p className="text-lg text-text-secondary">{aboutIntro.description}</p>
          <p className="text-text-secondary">{aboutIntro.philosophy}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <GradientCard className="space-y-4">
            <h3 className="font-heading text-heading-3 text-text-primary">使命 Mission</h3>
            <p className="text-text-secondary">{aboutIntro.mission}</p>
          </GradientCard>
          <GradientCard className="space-y-4">
            <h3 className="font-heading text-heading-3 text-text-primary">愿景 Vision</h3>
            <p className="text-text-secondary">{aboutIntro.vision}</p>
          </GradientCard>
        </div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={baseTransition}
          className="space-y-6"
        >
          <h3 className="font-heading text-heading-2 text-text-primary">专业领域</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {expertiseAreas.map((area, index) => {
              const Icon = expertiseIconMap[area.icon as keyof typeof expertiseIconMap] ?? Sparkle
              return (
                <ElevatedCard key={area.id} className="space-y-3">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...baseTransition, delay: index * 0.05 }}
                    className="inline-flex items-center gap-3 rounded-full bg-brand-primary/10 px-4 py-2 text-sm text-brand-primary"
                  >
                    <Icon size={18} />
                    {area.title}
                  </motion.div>
                  <p className="text-sm text-text-secondary">{area.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-text-secondary/80">
                    {area.strengths.map((strength) => (
                      <span
                        key={strength}
                        className="rounded-full border border-white/10 bg-background-card/60 px-3 py-1"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </ElevatedCard>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={baseTransition}
          className="space-y-8"
        >
          <div className="space-y-3">
            <h3 className="font-heading text-heading-2 text-text-primary">方法论体系</h3>
            <p className="max-w-3xl text-sm text-text-secondary">
              基于深度研究与实践验证的方法论，确保技术方案的先进性与可落地性。
            </p>
          </div>

          <div className="space-y-6">
            {methodology.map((phase, index) => (
              <GradientCard key={phase.id} className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="inline-flex items-center gap-3 text-brand-primary">
                    <span className="text-xs uppercase tracking-[0.28em] text-text-secondary/70">
                      Phase {index + 1}
                    </span>
                    <h4 className="font-heading text-heading-3 text-text-primary">{phase.title}</h4>
                  </div>
                  <p className="text-sm text-text-secondary">{phase.goal}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {phase.tracks.map((track) => (
                    <div key={track.name} className="rounded-xl border border-white/8 bg-background-card/60 p-4">
                      <p className="text-sm font-semibold text-text-primary">{track.name}</p>
                      <ul className="mt-2 space-y-2 text-xs text-text-secondary">
                        {track.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-brand-primary">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </GradientCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={baseTransition}
          className="space-y-6"
        >
          <h3 className="font-heading text-heading-2 text-text-primary">质量承诺</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {qualityCommitments.map((item) => {
              const Icon = qualityIconMap[item.icon as keyof typeof qualityIconMap] ?? ShieldCheck
              return (
                <GradientCard key={item.id} className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full bg-brand-primary/10 px-4 py-2 text-sm text-brand-primary">
                    <Icon size={18} />
                    {item.title}
                  </div>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-accent-teal">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GradientCard>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

