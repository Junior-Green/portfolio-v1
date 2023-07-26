/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '100px',
      md: '720px',
    },
    extend: {
      cursor: {
        ball: 'url(/rl-ball.png), auto',
        dumbbell: 'url(/dumbbell.png), auto',
      },

      height: {
        '10v': '10vmax',
        '20v': '20vmax',
        '30v': '30vmax',
        '40v': '40vmax',
        '50v': '50vmax',
        '60v': '60vmax',
        '70v': '70vmax',
        '80v': '80vmax',
        '90v': '90vmax',
      },
      width: {
        '10v': '10vmax',
        '20v': '20vmax',
        '30v': '30vmax',
        '40v': '40vmax',
        '50v': '50vmax',
        '60v': '60vmax',
        '70v': '70vmax',
        '80v': '80vmax',
        '90v': '90vmax',
      },
      colors: {
        theme: {
          blue: '#070b14',
          green: {
            light: '#70E48E',
            dark: '#07260f'
          },

          gray: {
            light: '#8B9CB7',
            dark: '#64748B'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textOpacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      },
    },
  },
  plugins: [],
}
