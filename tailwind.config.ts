import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik-light_300": ["Rubik-Light", "sans-serif"],
        "rubik-light-italic_300": ["Rubik-LightItalic", "sans-serif"],
        "rubik-medium_500": ["Rubik-Medium", "sans-serif"],
        "rubik-medium-italic_500": ["Rubik-MediumItalic", "sans-serif"],
        "rubik-regular_400": ["Rubik-Regular", "sans-serif"],
        "rubik-italic_400": ["Rubik-Italic", "sans-serif"],
        "rubik-semibold_600": ["Rubik-SemiBold", "sans-serif"],
        "rubik-semibold-italic_600": ["Rubik-SemiBoldItalic", "sans-serif"],
        "rubik-bold_700": ["Rubik-Bold", "sans-serif"],
        "rubik-bold-italic_700": ["Rubik-BoldItalic", "sans-serif"],
        "rubik-extrabold_800": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-extrabold-italic_800": ["Rubik-ExtraBoldItalic", "sans-serif"],
        "rubik-black_900": ["Rubik-Black", "sans-serif"],
        "rubik-black-italic_900": ["Rubik-BlackItalic", "sans-serif"],

        "urbanist-thin_100": ["Urbanist-Thin", "sans-serif"],
        "urbanist-thin-italic_100": ["Urbanist-ThinItalic", "sans-serif"],
        "urbanist-extralight_200": ["Urbanist-ExtraLight", "sans-serif"],
        "urbanist-extralight-italic_200": [
          "Urbanist-ExtraLightItalic",
          "sans-serif",
        ],
        "urbanist-light_300": ["Urbanist-Light", "sans-serif"],
        "urbanist-light-italic_300": ["Urbanist-LightItalic", "sans-serif"],
        "urbanist-medium_500": ["Urbanist-Medium", "sans-serif"],
        "urbanist-medium-italic_500": ["Urbanist-MediumItalic", "sans-serif"],
        "urbanist-regular_400": ["Urbanist-Regular", "sans-serif"],
        "urbanist-italic_400": ["Urbanist-Italic", "sans-serif"],
        "urbanist-semibold_600": ["Urbanist-SemiBold", "sans-serif"],
        "urbanist-semibold-italic_600": [
          "Urbanist-SemiBoldItalic",
          "sans-serif",
        ],
        "urbanist-bold_700": ["Urbanist-Bold", "sans-serif"],
        "urbanist-bold-italic_700": ["Urbanist-BoldItalic", "sans-serif"],
        "urbanist-extrabold_800": ["Urbanist-ExtraBold", "sans-serif"],
        "urbanist-extrabold-italic_800": [
          "Urbanist-ExtraBoldItalic",
          "sans-serif",
        ],
        "urbanist-black_900": ["Urbanist-Black", "sans-serif"],
        "urbanist-black-italic_900": ["Urbanist-BlackItalic", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
