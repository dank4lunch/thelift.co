/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefdf8',
          100: '#fdf9eb',
          200: '#fbf0d1',
          300: '#f7e2a7',
          400: '#f1cd72',
          500: '#e3b547', // Main gold - matches logo
          600: '#d4a035',
          700: '#b8872c',
          800: '#946e29',
          900: '#785c26',
          950: '#433212',
        },
        accent: {
          50: '#f8f6f0',
          100: '#eeead7',
          200: '#ded5b1',
          300: '#c9ba83',
          400: '#b8a05e',
          500: '#a89148', // Rich bronze/tan
          600: '#937d3d',
          700: '#7a6533',
          800: '#66542e',
          900: '#574729',
          950: '#322815',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        elite: {
          // Custom elite colors matching logo
          gold: '#e3b547',
          bronze: '#a89148',
          platinum: '#e8e8e8',
          obsidian: '#1a1a1a',
          cream: '#fdf9eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'muscle-flex': 'muscleFlex 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'bounce-3d': 'bounce3d 2s ease-in-out infinite',
        'float-3d': 'float3d 6s ease-in-out infinite',
        'shake-3d': 'shake3d 0.5s ease-in-out',
        'flip-3d': 'flip3d 1s ease-in-out',
        'tilt-3d': 'tilt3d 8s ease-in-out infinite',
        'depth-pulse': 'depthPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9) rotateY(-15deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotateY(0deg)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateZ(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px theme(colors.primary.500), 0 0 10px theme(colors.primary.500)' },
          '100%': { boxShadow: '0 0 20px theme(colors.primary.500), 0 0 30px theme(colors.accent.500), 0 0 40px theme(colors.primary.400)' },
        },
        muscleFlex: {
          '0%, 100%': { transform: 'scale(1) rotateX(0deg)' },
          '50%': { transform: 'scale(1.05) rotateX(5deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce3d: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg) scale(1)' },
          '25%': { transform: 'translateY(-10px) rotateX(5deg) scale(1.02)' },
          '50%': { transform: 'translateY(-20px) rotateX(10deg) scale(1.05)' },
          '75%': { transform: 'translateY(-10px) rotateX(5deg) scale(1.02)' },
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg) rotateX(0deg)' },
          '33%': { transform: 'translateY(-15px) rotateY(5deg) rotateX(2deg)' },
          '66%': { transform: 'translateY(-5px) rotateY(-5deg) rotateX(-2deg)' },
        },
        shake3d: {
          '0%, 100%': { transform: 'translateX(0) rotateZ(0deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px) rotateZ(-1deg)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px) rotateZ(1deg)' },
        },
        flip3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg) scale(1.1)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        tilt3d: {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(5deg) rotateY(5deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(10deg)' },
          '75%': { transform: 'rotateX(-5deg) rotateY(5deg)' },
        },
        depthPulse: {
          '0%, 100%': { 
            transform: 'scale(1) translateZ(0px)',
            boxShadow: '0 0 0 rgba(227, 181, 71, 0)'
          },
          '50%': { 
            transform: 'scale(1.05) translateZ(10px)',
            boxShadow: '0 10px 25px rgba(227, 181, 71, 0.3)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
}
