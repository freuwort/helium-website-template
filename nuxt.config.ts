export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass',
    ],

    devtools: {
        enabled: true,
    },

    modules: [
        "@nuxtjs/tailwindcss",
    ],

    compatibilityDate: "2024-07-15",
})