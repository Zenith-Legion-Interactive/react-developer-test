import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Main Theme
        'blue-purple': '#9DA7D3',
        'blue-dark': '#0D182F',
        'blue': '#023E8B',
        'blue-light': '#1964B0',
        'pink-darker': '#D86E6E',
        'pink-dark': '#E18E8E',
        'pink': '#E9ADAD',
        // Supporting
        'orange': '#ffa900', // warning
        'red-dark': '#912f40', // danger-dark
        'red': '#BA1F33', // danger
        'green-dark': '#0C7C59', //success-dark
        'green': '#7DDF64' //success
      },
    },
   
    
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(blue-purple|blue-dark|blue|blue-light|pink-darker|pink-dark|pink|orange|red-dark|red|green-dark|green)/,
    },
  ],
}
export default config
