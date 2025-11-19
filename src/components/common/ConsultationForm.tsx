import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { CustomButton } from './CustomButton'

type ConsultationFormProps = {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    content: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 这里可以添加实际的表单提交逻辑
    // 例如发送到后端API或发送邮件
    try {
      // 模拟提交延迟
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // 可以在这里添加实际的提交逻辑
      console.log('表单数据:', formData)
      
      // 提交成功后重置表单并关闭
      setFormData({ name: '', phone: '', content: '' })
      onClose()
      
      // 可以添加成功提示
      alert('提交成功！我们会尽快与您联系。')
    } catch (error) {
      console.error('提交失败:', error)
      alert('提交失败，请稍后重试。')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* 表单模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-background-card/95 p-8 shadow-glass backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-text-secondary transition hover:bg-background-elevated hover:text-text-primary"
                aria-label="关闭"
              >
                <X size={20} />
              </button>

              {/* 表单标题 */}
              <div className="mb-6">
                <h2 className="font-heading text-heading-2 text-text-primary">预约咨询</h2>
                <p className="mt-2 text-sm text-text-secondary">
                  请填写以下信息，我们会尽快与您联系
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="mt-3 inline-flex items-center text-sm text-brand-primary hover:text-brand-light transition-colors"
                >
                  直接联系 →
                </a>
              </div>

              {/* 表单内容 */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 姓名 */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                    姓名 <span className="text-accent-teal">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-background-elevated/50 px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    placeholder="请输入您的姓名"
                  />
                </div>

                {/* 电话 */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-primary">
                    电话 <span className="text-accent-teal">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-background-elevated/50 px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    placeholder="请输入您的联系电话"
                  />
                </div>

                {/* 咨询内容 */}
                <div>
                  <label htmlFor="content" className="mb-2 block text-sm font-medium text-text-primary">
                    咨询内容 <span className="text-accent-teal">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-background-elevated/50 px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none"
                    placeholder="请简要描述您的咨询需求"
                  />
                </div>

                {/* 提交按钮 */}
                <div className="flex gap-3 pt-2">
                  <CustomButton
                    type="button"
                    variant="secondary"
                    size="lg"
                    onClick={onClose}
                    className="flex-1"
                  >
                    取消
                  </CustomButton>
                  <CustomButton
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? '提交中...' : '提交'}
                  </CustomButton>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

