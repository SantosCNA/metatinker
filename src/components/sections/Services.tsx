import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { servicesOverview, services } from '@/data/services'
import { GradientCard } from '@/components/common/GradientCard'
import { baseTransition, fadeInVariants } from '@/components/sections/animations'

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-background/60 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/80 to-transparent" />

      <div className="design-container relative z-10 space-y-16">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={baseTransition}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-primary">
            <Sparkles size={14} />
            Services
          </div>
          <h2 className="mt-6 font-heading text-heading-1 text-text-primary">
            {servicesOverview.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">{servicesOverview.description}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...baseTransition, delay: index * 0.1 }}
            >
              <GradientCard className="flex h-full flex-col gap-6">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-text-secondary/80">
                    {service.duration}
                  </p>
                  <h3 className="font-heading text-heading-3 text-text-primary">{service.name}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{service.summary}</p>
                </div>

                {'contents' in service && (
                  <div className="space-y-5">
                    {service.contents?.map((content) => (
                      <div key={content.title} className="space-y-2">
                        <p className="text-sm font-semibold text-text-primary">{content.title}</p>
                        <ul className="space-y-1 text-sm text-text-secondary">
                          {content.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <CheckCircle2 size={16} className="mt-0.5 text-accent-teal" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {'process' in service && (
                  <div className="space-y-4">
                    {service.process?.map((phase) => (
                      <div key={phase.title} className="rounded-xl border border-white/8 bg-background-card/60 p-4">
                        <p className="text-sm font-semibold text-text-primary">{phase.title}</p>
                        <ul className="mt-2 space-y-1 text-sm text-text-secondary">
                          {phase.steps.map((step) => (
                            <li key={step} className="flex gap-2">
                              <span className="text-brand-primary">•</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {'expertise' in service && (
                  <div className="space-y-4">
                    {service.expertise?.map((domain) => (
                      <div key={domain.title} className="rounded-xl border border-white/8 bg-background-card/60 p-4">
                        <p className="text-sm font-semibold text-text-primary">{domain.title}</p>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs text-text-secondary">
                          {domain.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {'deliverables' in service && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-text-primary">交付成果</p>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {service.deliverables?.map((deliverable) => (
                        <li key={deliverable} className="flex gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 text-accent-teal" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {'scenarios' in service && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-text-primary">典型应用场景</p>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {service.scenarios?.map((scenario) => (
                        <li key={scenario} className="flex gap-2">
                          <span className="text-brand-primary">▹</span>
                          <span>{scenario}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </GradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

