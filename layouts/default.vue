<template>
    <HeInfoBar>
        <span class="mx-auto text-sm">
            Erreichen Sie uns unter
            <NuxtLink to="/" class="text-slate-400 hover:text-slate-200">info@example.com</NuxtLink>
        </span>
    </HeInfoBar>
    <AppHeader :menu>
        <template #cta>
            <IodButton to="/kontakt" label="Kontakt" corner="pill" />
        </template>
    </AppHeader>
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<script lang="ts" setup>
    const appConfig = useAppConfig()

    useHead({
        titleTemplate: (title) => title ? `${title} – ${appConfig.name}` : appConfig.name,
        bodyAttrs: {
            class: 'small-scrollbar'
        }
    })

    const menu = useMenu('main')
</script>

<style lang="sass" scoped></style>