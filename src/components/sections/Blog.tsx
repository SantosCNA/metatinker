import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { featuredPosts, blogFilters } from '@/data/blog'
import { GradientCard } from '@/components/common/GradientCard'
import { baseTransition, fadeInVariants } from '@/components/sections/animations'

export function BlogSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof blogFilters)[number]>('全部')

  const filteredPosts = useMemo(() => {
    if (activeFilter === '全部') return featuredPosts
    return featuredPosts.filter((post) => post.categories.some((category) => category === activeFilter))
  }, [activeFilter])

  return (
    <section id="blog" className="relative bg-background-card/40 py-24 sm:py-32">
      <div className="design-container space-y-12">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={baseTransition}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-primary">
            Insights
          </span>
          <h2 className="font-heading text-heading-1 text-text-primary">技术研究博客</h2>
          <p className="text-lg text-text-secondary">
            分享 AI 技术研究心得与实践经验，覆盖前沿趋势、架构设计与行业洞察。
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {blogFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? 'rounded-full border border-brand-primary bg-brand-primary/20 px-4 py-2 text-sm text-text-primary'
                  : 'rounded-full border border-white/10 px-4 py-2 text-sm text-text-secondary transition hover:border-brand-primary/40 hover:text-text-primary'
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...baseTransition, delay: index * 0.1 }}
            >
              <GradientCard className="flex h-full flex-col gap-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary/70">
                    <span>{post.publishedAt}</span>
                    <span>·</span>
                    <span>{post.readingTime}阅读</span>
                  </div>
                  <h3 className="font-heading text-heading-3 text-text-primary">{post.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs text-text-secondary/80">
                    {post.categories.map((category) => (
                      <span
                        key={`${post.id}-${category}`}
                        className="rounded-full border border-white/12 bg-background-card/60 px-3 py-1"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary">{post.summary}</p>

                <div className="space-y-4">
                  {post.sections.map((section) => (
                    <div key={section.heading} className="rounded-xl border border-white/8 bg-background-card/60 p-4">
                      <p className="text-sm font-semibold text-text-primary">{section.heading}</p>
                      <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                        {section.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-brand-primary">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <a
                  href={post.ctaHref}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition hover:text-brand-light"
                >
                  {post.ctaLabel}
                  <ArrowUpRight size={16} />
                </a>
              </GradientCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

