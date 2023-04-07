// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  mode: "jit",
  darkMode: "media",
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      px: "1px",
      0: "0px", // 0px
      0.25: "0.125rem", // 2px
      0.375: "0.09375rem", // 1.5px
      0.3: "0.1875rem", // 3px
      0.5: "0.25rem", // 4px
      0.75: "0.375rem", // 6px
      1: "0.5rem", // 8px
      1.125: "0.5625rem", // 9px
      1.1875: "0.59375rem", // 9.5px
      1.25: "0.625rem", // 10px
      1.5: "0.75rem", // 12px
      1.75: "0.875rem", // 14px
      2: "1rem", // 16px
      2.25: "1.125rem", // 18px
      2.5: "1.25rem", // 20px
      2.75: "1.375rem", // 22px
      3: "1.5rem", // 24px
      3.5: "1.75rem", // 28px
      4: "2rem", // 32px
      4.5: "2.25rem", // 36px
      5: "2.5rem", // 40px
      6: "3rem", // 48px
      6.5: "3.25rem", // 52px
      7: "3.5rem", // 56px
      7.5: "3.75rem", // 60px
      8: "4rem", // 64px
      8.5: "4.25rem", // 68px
      9: "4.5rem", // 72px
      9.25: "4.625rem", // 74px
      10: "5rem", // 80px
      10.5: "5.25rem", // 84px
      12: "6rem", // 96px
      14: "7rem", // 112px
      15: "7.5rem", // 120px
      18: "9rem", // 144px
      20: "10rem", // 160px
      24: "12rem", // 192px
      34: "17rem", // 272px
      40: "20rem", // 320px
      48: "24rem", // 384px
      54: "27rem", // 432px
      60: "30rem", // 480px
      62.5: "31.25rem", // 500px
      66: "33rem", // 528px
      66.5: "33.25rem", // 532px
      72.5: "36.25rem", // 580px
      75: "37.5rem", // 600px
      105: "52.5rem", // 840px
      151.25: "75.625rem", // 1210px
    },
    fontSize: {
      largeJumbo: "3.5rem", // 56px
      jumbo: "3rem", // 48px
      smallJumbo: "2rem", // 32px
      h1: "1.5rem", // 24px
      h2: "1rem", // 16px
      h3: "0.875rem", // 14px
      h4: "0.75rem", // 12px
      h5: "0.625rem", // 10px
      h6: "0.5rem", // 8px
      body1: "1rem", // 16px
      body2: "0.875rem", // 14px
      body3: "0.75rem", // 12px
      body4: "0.625rem", // 10px
      paragraph1: "1rem", // 16px
      paragraph2: "0.875rem", // 14px
      paragraph3: "0.75rem", // 12px
      paragraph4: "0.625rem", // 10px
      label1: "0.75rem", // 12px
      label2: "0.625rem", // 10px
      label3: "0.5rem", // 8px
      icon: "1.125rem", // 18px
    },
    lineHeight: {
      none: "1",
      full: "100%",
      jumbo: "3.375rem", // 54px
      h1: "1.75rem", // 28px
      h2: "1.188rem", // 19px
      h3: "1rem", // 16px
      h4: "0.875rem", // 14px
      h5: "0.75rem", // 12px
      h6: "0.625rem", // 10px
      body1: "1.3125rem", // 21px
      body2: "1.125rem", // 18px
      body3: "1rem", // 16px
      body4: "0.875rem", // 14px
      paragraph1: "1.5rem", // 24px
      paragraph2: "1.3125rem", // 21px
      paragraph3: "1.125rem", // 18px
      paragraph4: "1rem", // 16px
      label1: "1rem", // 16px
      label2: "0.875rem", // 14px
      label3: "0.75rem", // 12px
    },
    letterSpacing: {
      jumbo: "-0.02em", // -0.48px
      h1: "-0.02em", // -0.48px
      h2: "-0.01em", // -0.16px
      h3: "-0.005em", // -0.07px
      h4: "-0.0025em", // -0.03px
      h5: "0em", // 0px
      h6: "-0.0025em", // 0.03px
      body1: "-0.01em", // -0.16px
      body2: "-0.005em", // -0.07px
      body3: "-0.0025em", // -0.03px
      body4: "0em", // 0px
      paragraph1: "-0.01em", // -0.16px
      paragraph2: "-0.005em", // -0.07px
      paragraph3: "-0.0025em", // -0.03px
      paragraph4: "0em", // 0px
      label1: "0.04em", // 0.4px
      label2: "0.04em", // 0.4px
      label3: "0.04em", // 0.4px
    },
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      current: "currentColor",
      transparent: "rgba(0,0,0,0)",
      blue: {
        50: "var(--blue-100)",
        100: "var(--blue-100)",
        200: "var(--blue-200)",
        300: "var(--blue-300)",
        400: "var(--blue-400)",
        500: "var(--blue-500)",
        600: "var(--blue-500)",
        700: "var(--blue-500)",
        800: "var(--blue-500)",
        900: "var(--blue-500)",
        background: "var(--blue-background)",
        border: "var(--blue-border)",
        primary: "var(--blue-primary)",
        hover: "var(--blue-hover)",
      },
      red: {
        50: "var(--red-100)",
        100: "var(--red-100)",
        200: "var(--red-200)",
        300: "var(--red-300)",
        400: "var(--red-400)",
        500: "var(--red-500)",
        600: "var(--red-500)",
        700: "var(--red-500)",
        800: "var(--red-500)",
        900: "var(--red-500)",
        background: "var(--red-background)",
        border: "var(--red-border)",
        primary: "var(--red-primary)",
        hover: "var(--red-hover)",
      },
      purple: {
        50: "var(--purple-100)",
        100: "var(--purple-100)",
        200: "var(--purple-200)",
        300: "var(--purple-300)",
        400: "var(--purple-400)",
        500: "var(--purple-500)",
        600: "var(--purple-500)",
        700: "var(--purple-500)",
        800: "var(--purple-500)",
        900: "var(--purple-500)",
        background: "var(--purple-background)",
        border: "var(--purple-border)",
        primary: "var(--purple-primary)",
        hover: "var(--purple-hover)",
      },
      green: {
        50: "var(--green-100)",
        100: "var(--green-100)",
        200: "var(--green-200)",
        300: "var(--green-300)",
        400: "var(--green-400)",
        500: "var(--green-500)",
        600: "var(--green-500)",
        700: "var(--green-500)",
        800: "var(--green-500)",
        900: "var(--green-500)",
        background: "var(--green-background)",
        border: "var(--green-border)",
        primary: "var(--green-primary)",
        hover: "var(--green-hover)",
      },
      orange: {
        50: "var(--orange-100)",
        100: "var(--orange-100)",
        200: "var(--orange-200)",
        300: "var(--orange-300)",
        400: "var(--orange-400)",
        500: "var(--orange-500)",
        600: "var(--orange-500)",
        700: "var(--orange-500)",
        800: "var(--orange-500)",
        900: "var(--orange-500)",
        background: "var(--orange-background)",
        border: "var(--orange-border)",
        primary: "var(--orange-primary)",
        hover: "var(--orange-hover)",
      },
      yellow: {
        50: "var(--yellow-100)",
        100: "var(--yellow-100)",
        200: "var(--yellow-200)",
        300: "var(--yellow-300)",
        400: "var(--yellow-400)",
        500: "var(--yellow-500)",
        600: "var(--yellow-500)",
        700: "var(--yellow-500)",
        800: "var(--yellow-500)",
        900: "var(--yellow-500)",
        background: "var(--yellow-background)",
        border: "var(--yellow-border)",
        primary: "var(--yellow-primary)",
        hover: "var(--yellow-hover)",
      },
      pink: {
        50: "var(--pink-100)",
        100: "var(--pink-100)",
        200: "var(--pink-200)",
        300: "var(--pink-300)",
        400: "var(--pink-400)",
        500: "var(--pink-500)",
        600: "var(--pink-500)",
        700: "var(--pink-500)",
        800: "var(--pink-500)",
        900: "var(--pink-500)",
        background: "var(--pink-background)",
        border: "var(--pink-border)",
        primary: "var(--pink-primary)",
        hover: "var(--pink-hover)",
      },
      gray: {
        50: "var(--gray-50)",
        100: "var(--gray-100)",
        200: "var(--gray-200)",
        300: "var(--gray-300)",
        400: "var(--gray-400)",
        500: "var(--gray-500)",
        600: "var(--gray-600)",
        700: "var(--gray-700)",
        800: "var(--gray-800)",
        900: "var(--gray-900)",
        background: "var(--gray-background)",
        border: "var(--gray-border)",
        primary: "var(--gray-primary)",
        hover: "var(--gray-hover)",
      },
      background: {
        1: "var(--background-1)",
        2: "var(--background-2)",
        3: "var(--background-3)",
        4: "var(--background-4)",
      },
      border: "var(--border)",
      details: "var(--details)",
      contrast: {
        lowest: "var(--lowest-contrast)",
        low: "var(--low-contrast)",
        high: "var(--high-contrast)",
      },
    },
    boxShadow: {
      none: "none",
      xs: "0px 0.125rem 0.25rem rgba(32, 43, 61, 0.08), 0px 0.063rem 0.125rem rgba(32, 41, 58, 0.04)", // 0px 2px 4px rgba(32, 43, 61, 0.08), 0px 1px 2px rgba(32, 41, 58, 0.04)
      sm: "0px 0.125rem 0.25rem rgba(32, 41, 58, 0.04), 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.08)", // 0px 2px 4px rgba(32, 41, 58, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.08)
      md: "0px 0.25rem 0.5rem rgba(32, 41, 58, 0.04), 0px 0.5rem 1rem rgba(0, 0, 0, 0.08)", // 0px 4px 8px rgba(32, 41, 58, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)
      lg: "0px 0.375rem 0.75rem rgba(32, 41, 58, 0.08), 0px 0.75rem 1.5rem rgba(0, 0, 0, 0.08)", // 0px 6px 12px rgba(32, 41, 58, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.08)
      DEFAULT: "0px 0px 0.75rem rgba(0, 0, 0, 0.12)",
      // @FIXME: these specific use cases probably shouldn't be here
      card: "0px 0px 0.5rem rgba(39, 135, 245, 0.16)", // 0px 0px 8px rgba(39, 135, 245, 0.16)
      dropdown: "0px 0px 0.25rem rgba(32, 46, 61, 0.16)",
      "no-top": "0px 0.875rem 0.8125rem 0px rgba(0, 0, 0, 0.10)",
    },
    extend: {
      minWidth: (theme) => theme("width"),
      maxWidth: (theme) => theme("width"),
      minHeight: (theme) => theme("height"),
      maxHeight: (theme) => theme("height"),
      outline: {
        0: 0,
      },
      borderWidth: {
        DEFAULT: "0.125rem",
        px: "1px",
        1.5: "0.09375rem", // 1.5px
      },
      borderRadius: {
        px: "1px",
        "2xs": "0.125rem", // 2px
        xs: "0.25rem", // 4px
        "2sm": "0.375rem", // 6px
        sm: "0.5rem", // 8px
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        section: "6rem", // 96px
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      dropShadow: {
        input: "0px 0px 4px rgba(69, 151, 245, 0.16)",
        "input-error": "0px 0px 8px rgba(244, 0, 0, 0.16)",
      },
      scale: {
        flip: -1,
        96: "0.96",
        "1/3": `${1 / 3}`,
        "2/3": `${2 / 3}`,
        "1/4": `${1 / 4}`,
        "2/4": `${2 / 4}`,
        "3/4": `${3 / 4}`,
      },
      animation: {
        fadeIn: "fade-in 200ms ease-in-out",
        fadeOut: "fade-out 200ms ease-in-out",
        modalIn: "modal-in 200ms ease-in-out",
        modalOut: "modal-out 200ms ease-in-out",
        slideIn: "slide-in 200ms ease-in-out",
        slideOut: "slide-out 200ms ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "modal-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.96)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [
  ],
};
