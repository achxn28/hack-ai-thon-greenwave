const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        wave: {
          50: "#edfdf5",
          100: "#d5f8e5",
          300: "#79e5ad",
          400: "#3bd48a",
          500: "#13b86c",
          600: "#079353",
          700: "#087447",
          900: "#064b33",
          950: "#032d20"
        },
        ink: "#10251d"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 60px rgba(16, 37, 29, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
