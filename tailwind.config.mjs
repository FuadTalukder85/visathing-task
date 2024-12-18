/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#005397",
        primarydeep: "#00233F",
        black: "#111322",
      },
      fontFamily: {
        workSans: "var(--font-work-sans)",
      },
    },
  },
  plugins: [],
};
