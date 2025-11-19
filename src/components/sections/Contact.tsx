import { motion } from 'framer-motion'
import { Mail, MessageSquare, PhoneCall } from 'lucide-react'
import { wechatSection } from '@/data/home'
import { baseTransition, fadeInVariants } from '@/components/sections/animations'

const contactChannels = [
  {
    icon: Mail,
    label: '电子邮件',
    value: '13825266041@139.com',
    description: '提交需求或合作意向，24小时内回复',
  },
  {
    icon: PhoneCall,
    label: '电话咨询',
    value: '+86 13825266041',
    description: '工作日 10:00-18:00 提供快速沟通',
  },
  {
    icon: MessageSquare,
    label: '预约交流',
    value: '微信：_xxx132',
    description: '添加微信进行技术交流，评估AI落地路径',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.35),_transparent_55%)]" />
      <div className="design-container relative z-10 space-y-12">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={baseTransition}
          className="mx-auto max-w-3xl space-y-5 text-center"
        >
          <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-primary">
            Contact
          </span>
          <h2 className="font-heading text-heading-1 text-text-primary">开启下一阶段的智能化实践</h2>
          <p className="text-lg text-text-secondary">
            无论是 AI 解决方案评估、系统架构咨询还是创新项目共创，我们都期待与您深入交流。
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={baseTransition}
            className="space-y-6 rounded-2xl border border-white/10 bg-background-card/70 p-8 shadow-card backdrop-blur-xl"
          >
            <h3 className="font-heading text-heading-3 text-text-primary">联系渠道</h3>
            <p className="text-sm text-text-secondary">
              留下您的需求或问题，我们将由资深 AI 顾问跟进沟通，评估可行性并制定实施路径。
            </p>

            <div className="space-y-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon
                const isEmail = channel.label === '电子邮件'
                const isPhone = channel.label === '电话咨询'
                const href = isEmail
                  ? `mailto:${channel.value}`
                  : isPhone
                    ? `tel:${channel.value.replace(/\s/g, '')}`
                    : undefined
                return (
                  <div
                    key={channel.label}
                    className="flex items-start gap-4 rounded-xl border border-white/8 bg-background-card/60 p-4"
                  >
                    <div className="mt-1 rounded-full bg-brand-primary/15 p-2 text-brand-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{channel.label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-brand-primary hover:text-brand-light">
                          {channel.value}
                        </a>
                      ) : (
                        <p className="text-sm text-brand-primary">{channel.value}</p>
                      )}
                      <p className="text-xs text-text-secondary/80">{channel.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...baseTransition, delay: 0.1 }}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-brand-primary/30 bg-brand-primary/10 p-8 shadow-glass"
          >
            <div className="space-y-4">
              <h3 className="font-heading text-heading-3 text-text-primary">{wechatSection.title}</h3>
              <p className="text-sm text-text-secondary">{wechatSection.subtitle}</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                {wechatSection.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-accent-teal">◆</span>
                    <span>{perk.replace(/^.\s/, '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/20 bg-background-card/70 p-6 text-center text-sm text-text-secondary">
              <p className="text-xs uppercase tracking-[0.28em] text-text-secondary/80">
                {wechatSection.consultation.title}
              </p>
              <p className="mt-2 text-sm text-text-secondary">{wechatSection.consultation.description}</p>
              <div className="mt-4 flex items-center justify-center rounded-xl border border-dashed border-brand-primary/40 bg-background-card/60 p-4">
                <img
                  src={`${import.meta.env.BASE_URL}images/qisu-qrcode.jpg`}
                  alt="七宿咨询微信二维码"
                  className="h-32 w-32 rounded-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

