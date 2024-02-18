/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': "#273846",
      'wood': {
        50: "#ffffff",
        100: "#ffffff",
        200: "#fefdfb",
        300: "#fcfaf7",
        400: "#fbf8f4",
        500: "#faf6f0",
        600: "#e2caa7",
        700: "#c99f5e",
        800: "#916b30",
        900: "#493518"
      },
      "mist": {
        50: "#f8fbfc",
        100: "#e4eff1",
        200: "#e4eff1",
        300: "#d7e7ea",
        400: "#c9dee3",
        500: "#b9d5db",
        600: "#9ac2cb",
        700: "#78aeba",
        800: "#5393a2",
        900: "#3d6b76"
      },
      "salmon": {
        50: "#fef5f0",
        100: "#feeee7",
        200: "#fdd9c9",
        300: "#fbc7b1",
        400: "#fab699",
        500: "#f9a27d",
        600: "#f67037",
        700: "#d7470a",
        800: "#8d2f07",
        900: "#491803"
    }
    },
    extend: {},
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    fontFamily: {
      serif: ['EB Garamond', 'font-serif'],
      sans: ['inter', 'font-sans'],
      mono: ['JetBrains Mono', 'font-sans'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

