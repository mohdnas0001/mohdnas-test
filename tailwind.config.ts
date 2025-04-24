import type { Config } from "tailwindcss";
const config = {
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}",
   ],
   prefix: "",
 theme: {
    extend: {
      fontFamily: {
        chivo: ["var(--font-chivo)", "sans-serif"], 
        mono: ["ui-monospace", "SFMono-Regular", "monospace"], 
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--color-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "3xl": "2560px",
      },
    
    },
  },
} satisfies Config;

export default config;
