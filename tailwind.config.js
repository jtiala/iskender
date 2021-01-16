module.exports = {
  purge: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["montserrat", "sans-serif"],
        serif: ["merriweather", "serif"],
      },
      borderWidth: {
        10: "10px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            fontFamily: theme("fontFamily.serif"),
            a: {
              color: theme("colors.red.800"),
              "&:hover": {
                color: theme("colors.gray.800"),
              },
            },
            h1: {
              color: theme("colors.black"),
              fontSize: theme("fontSize.6xl"),
              fontWeight: theme("fontWeight.black"),
              fontFamily: theme("fontFamily.sans"),
            },
            h2: {
              color: theme("colors.black"),
              fontSize: theme("fontSize.5xl"),
              fontWeight: theme("fontWeight.extrabold"),
              fontFamily: theme("fontFamily.sans"),
            },
            h3: {
              color: theme("colors.black"),
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.bold"),
              fontFamily: theme("fontFamily.sans"),
            },
            h4: {
              color: theme("colors.black"),
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.semibold"),
              fontFamily: theme("fontFamily.sans"),
            },
            h5: {
              color: theme("colors.black"),
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.semibold"),
              fontFamily: theme("fontFamily.sans"),
            },
            h6: {
              color: theme("colors.black"),
              fontSize: theme("fontSize.lg"),
              fontWeight: theme("fontWeight.semibold"),
              fontFamily: theme("fontFamily.sans"),
            },
            blockquote: {
              borderLeftColor: theme("colors.red.800"),
            },
            figure: {
              figcaption: {
                fontFamily: theme("fontFamily.sans"),
                fontWeight: theme("fontWeight.light"),
                fontStyle: "italic",
                color: theme("colors.black"),
                borderLeftWidth: "4px",
                borderLeftColor: theme("colors.red.800"),
                paddingLeft: "1em",
                paddingTop: "0.75em",
                paddingBottom: "0.5em",
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
