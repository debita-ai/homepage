import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/ragekit/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          // Debita.aí brand colors
          'off-white': '#ECF7F2',
          orange: '#E37A37',
          'dark-orange': '#C65A1A',
          'light-orange': '#FFF3E7',
          blue: '#006279',
          'dark-blue': '#004A5C',
          'light-blue': '#ADE2EA',
          green: '#4A8C7A',
          'dark-green': '#3A6F5F',
          'light-green': '#DAF1EA',
        },
        fontFamily: {
          satoshi: ['Satoshi', 'sans-serif'],
          baskerville: ['var(--font-baskerville)', 'Libre Baskerville', 'serif'],
        },
      },
    },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;
