import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { CustomButton } from '@/components/common/CustomButton'
import { ConsultationForm } from '@/components/common/ConsultationForm'
import { cn } from '@/lib/utils'
import { navigationLinks } from '@/config/navigation'

const navItems = navigationLinks

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    navItems.forEach((item) => {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition duration-page',
          isScrolled ? 'glass-effect border-b border-white/5' : 'bg-transparent',
        )}
      >
        <div className="design-container flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <img
              src="/images/logo.png"
              alt="MetaTinker Logo"
              className="h-12 w-auto object-contain"
            />
          </motion.a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm transition-colors duration-micro',
                  activeSection === item.href.slice(1)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary',
                )}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent-teal transition-all duration-micro',
                    activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full',
                  )}
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <CustomButton
              variant="primary"
              size="md"
              onClick={() => setIsConsultationFormOpen(true)}
            >
              预约咨询
            </CustomButton>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-text-primary md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 24, stiffness: 180 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col px-8 pb-12 pt-24">
              <div className="flex flex-col gap-6 text-lg text-text-primary">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      'transition-colors',
                      activeSection === item.href.slice(1)
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary',
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto space-y-3">
                <CustomButton
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false)
                    setIsConsultationFormOpen(true)
                  }}
                >
                  预约咨询
                </CustomButton>
                <CustomButton
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  联系我们
                </CustomButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* 预约咨询表单 */}
      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
    </>
  )
}

