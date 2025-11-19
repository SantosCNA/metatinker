/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
      },
      colors: {
        background: {
          DEFAULT: '#0f172a',
          card: '#1e293b',
          elevated: '#334155',
        },
        brand: {
          dark: '#0f172a',
          primary: '#6366f1',
          light: '#8b5cf6',
        },
        accent: {
          teal: '#06d6a0',
          amber: '#fbbf24',
          neon: '#3b82f6',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'PingFang SC',
          'Microsoft YaHei',
          'system-ui',
          'sans-serif',
        ],
        heading: [
          'Space Grotesk',
          'Inter',
          'Alibaba PuHuiTi',
          'Helvetica Neue',
          'PingFang SC',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        base: '8px',
        card: '12px',
        xl: '20px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(99, 102, 241, 0.45)',
        glass: '0 25px 45px rgba(15, 23, 42, 0.55)',
        card: '0 16px 32px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        'neon-gradient':
          'linear-gradient(90deg, #6366f1, #8b5cf6, #06d6a0)',
        'card-gradient':
          'linear-gradient(145deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95))',
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-3': ['1.75rem', { lineHeight: '1.35' }],
        lead: ['1.25rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.75' }],
        small: ['0.875rem', { lineHeight: '1.6' }],
        micro: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      letterSpacing: {
        widest: '0.35em',
      },
      transitionDuration: {
        micro: '200ms',
        page: '300ms',
      },
      animation: {
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.45 },
        },
      },
    },
  },
  plugins: [],
}

