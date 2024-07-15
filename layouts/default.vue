<template>
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