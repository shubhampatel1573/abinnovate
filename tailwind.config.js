/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0D12',
        'bg-secondary': '#11151E',
        'accent-blue': '#FFFFFF',
        'accent-violet': '#8B5CF6',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'border-default': '#252B38',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
