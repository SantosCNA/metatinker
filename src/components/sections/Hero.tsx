import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CustomButton } from '@/components/common/CustomButton'
import { heroSection } from '@/data/home'
import { baseTransition, fadeInVariants } from '@/components/sections/animations'

type Particle = { x: number; y: number; duration: number; delay: number }

const PARTICLE_COUNT = 18

const transitionWithDelay = (delay = 0) => ({
  ...baseTransition,
  delay,
})

const generateParticles = (): Particle[] => {
  if (typeof window === 'undefined') {
    return []
  }

  const width = window.innerWidth
  const height = window.innerHeight

  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 4,
  }))
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>(() => generateParticles())

  useEffect(() => {
    const handleResize = () => setParticles(generateParticles())

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-28"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 背景遮罩层，增强文字可读性 */}
      <div className="absolute inset-0 bg-hero-gradient/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-primary/35 to-transparent blur-3xl" />

      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-brand-primary/40"
            style={{ left: particle.x, top: particle.y }}
            animate={{ y: ['-10px', '12px', '-10px'], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={transitionWithDelay(0)}
          className="inline-flex items-center gap-2 rounded-full border border-text-secondary/30 bg-background-card/30 px-4 py-2 text-xs uppercase tracking-[0.35em] text-text-secondary backdrop-blur"
        >
          <Sparkles size={16} className="text-accent-teal" />
          MetaTinker · 元像AI Lab
        </motion.div>

        <motion.h1
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={transitionWithDelay(0.1)}
          className="font-heading text-display text-balance"
        >
          {heroSection.tagline}
        </motion.h1>

        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={transitionWithDelay(0.2)}
          className="max-w-2xl text-lg text-text-secondary mt-12"
        >
          {heroSection.description}
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={transitionWithDelay(0.3)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {heroSection.capabilityTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-2 text-sm text-text-primary"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={transitionWithDelay(0.4)}
          className="flex flex-col items-center gap-3 pt-4 sm:flex-row"
        >
          <CustomButton variant="gradient" size="lg" href={heroSection.primaryCta.href} className="group">
            {heroSection.primaryCta.label}
            <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform duration-micro group-hover:translate-x-1" />
          </CustomButton>
          <CustomButton variant="secondary" size="lg" href={heroSection.secondaryCta.href}>
            {heroSection.secondaryCta.label}
          </CustomButton>
        </motion.div>
      </div>
    </section>
  )
}

