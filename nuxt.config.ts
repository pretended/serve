import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    css: ["@/assets/css/style.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
})
