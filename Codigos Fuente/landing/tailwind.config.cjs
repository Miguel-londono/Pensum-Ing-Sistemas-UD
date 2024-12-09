/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(99, 102, 241)", // Mantén el color primario, ya que es adecuado para un tema claro
        secondaryColor: "rgb(246, 178, 1)", // Este color también sigue siendo adecuado
        rojoUd: "rgb(237, 27, 35)", // Mantén este color para énfasis
        primaryText: "rgb(0, 0, 0)", // Cambiado a negro para un texto más legible en tema claro
        secondaryText: "rgb(74, 85, 104)", // Gris más suave para el texto secundario
        bgDark1: "rgb(250, 250, 250)", // Fondo blanco para tema claro
        bgDark2: "rgb(242, 243, 247)", // Fondo muy claro
        bgDark3: "rgb(236, 237, 242)", // Fondo más suave
        bgDark3Hover: "rgb(228, 229, 234)", // Fondo ligeramente oscuro en hover
        bgDarkTransparent: "rgb(255, 255, 255, 0.7)", // Fondo blanco translúcido
        bgDarkTransparentDarker: "rgb(0,0,0,0.1)", // Fondo transparente más claro
        bgDarkTransparentLighter: "rgb(255, 255, 255, 0.9)", // Fondo blanco translúcido más claro
        mainBorder: "rgb(0, 0, 0, 0.1)", // Borde sutil en color oscuro
        mainBorderDarker: "rgb(0, 0, 0, 0.15)", // Borde ligeramente más oscuro
        quoteIconColor: "rgb(104, 115, 133)", // Gris más suave para el icono de cita
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
};
