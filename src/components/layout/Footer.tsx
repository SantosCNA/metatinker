import { Github, Linkedin, Mail } from 'lucide-react'
import { navigationLinks } from '@/config/navigation'
import { copyrightStatement } from '@/data/legal'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/antosmina/metatinker' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/antosmina' },
  { icon: Mail, label: 'Email', href: 'mailto:13825266041@139.com' },
]

export function Footer() {
  return (
    <footer className="bg-background-card/60 py-10 text-sm text-text-secondary">
      <div className="design-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="font-heading text-lg text-text-primary">MetaTinker · 元像AI Lab</p>
          <p className="max-w-md text-xs leading-relaxed text-text-secondary/80">
            七宿咨询旗下 AI 研究与解决方案工作室，致力于以严谨的方法论和工程实践推动 AI 技术的可持续落地。
          </p>
          <p className="text-xs text-text-secondary/70">{copyrightStatement.content[2]}</p>
        </div>

        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.28em] text-text-secondary/60">
          <nav className="flex flex-wrap gap-4">
            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-text-primary transition">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-text-secondary transition hover:border-brand-primary/60 hover:text-brand-primary"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

