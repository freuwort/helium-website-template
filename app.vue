<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
    const appConfig = useAppConfig()

    useHead({
        htmlAttrs: {
            lang: appConfig.lang as string,
        },
    })
</script>