import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#F4AE26",
        accent: "#F6EBDA",
        yellow: "#FFD057",
        light: "#9f9f9f",
        coffee: "#2f2105",
      },
    },
    // responsive
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    fontSize: {
      "12": [
        "12px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.01em",
          fontWeight: "300",
        },
      ],
      medium: [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.01em",
          fontWeight: "300",
        },
      ],
      "medium-2": [
        "24px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      xl: [
        "32px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "36px",
        {
          lineHeight: "36px",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      "3xl": [
        "48px",
        {
          lineHeight: "50px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1160px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      // "@screen sm": {
      //   maxWidth: "",
      // },
      // "@screen md": {
      //   maxWidth: "",
      // },
      // "@screen lg": {
      //   maxWidth: "",
      // },
      // "@screen xl": {
      //   maxWidth: "1400px",
      // },
    },
  },
  plugins: [],
} satisfies Config;
