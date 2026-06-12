/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#7B2FF7',
        'blue-primary': '#2563FF',
        'navy-deep': '#041B4D',
        'black-primary': '#0A0A0A',
        'gray-light': '#F8F9FB',
        'gray-medium': '#E5E7EB',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7B2FF7 0%, #2563FF 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #2563FF 0%, #7B2FF7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #041B4D 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0A0A0A 0%, #041B4D 50%, #0A0A0A 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'float-delay-2': 'float 6s ease-in-out infinite 4s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'brand': '0 20px 60px rgba(123, 47, 247, 0.3)',
        'brand-sm': '0 8px 30px rgba(123, 47, 247, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow-purple': '0 0 40px rgba(123, 47, 247, 0.4)',
        'glow-blue': '0 0 40px rgba(37, 99, 255, 0.4)',
      },
    },
  },
  plugins: [],
};
