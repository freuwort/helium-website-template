<template>
    <footer>
        <HeSection is="div" background="var(--bg-blue-50)">
            <template #above>
                <HeShapeDivider shape="waves" height=".75rem" background="var(--bg-blue-50)" flip-y />
            </template>
            <HeLimiter>
                <HeFlex horizontal padding="4rem 0" gap="2rem" align-y="flex-start" breakpoint="768">
                    <HeFlex class="flex-1">
                        <h3 class="m-0 text-blue-500">Contact</h3>
                        <HeDivider class="my-4"/>
                        <NuxtLink to="/">Menu Item 1</NuxtLink>
                        <NuxtLink to="/">Menu Item 2</NuxtLink>
                        <NuxtLink to="/">Menu Item 3</NuxtLink>
                        <NuxtLink to="/">Menu Item 4</NuxtLink>
                    </HeFlex>
                    <HeFlex class="flex-1">
                        <h3 class="m-0 text-blue-500">About us</h3>
                        <HeDivider class="my-4 !border-t-blue-200"/>
                        <NuxtLink to="/">Menu Item 1</NuxtLink>
                        <NuxtLink to="/">Menu Item 2</NuxtLink>
                    </HeFlex>
                    <HeFlex class="flex-1">
                        <h3 class="m-0 text-blue-500">Resources</h3>
                        <HeDivider class="my-4"/>
                        <NuxtLink to="/">Menu Item 1</NuxtLink>
                        <NuxtLink to="/">Menu Item 2</NuxtLink>
                        <NuxtLink to="/">Menu Item 3</NuxtLink>
                        <NuxtLink to="/">Menu Item 4</NuxtLink>
                    </HeFlex>
                    <HeFlex class="flex-1">
                        <h3 class="m-0 text-blue-500">Rechtliches</h3>
                        <HeDivider class="my-4"/>
                        <NuxtLink class="link" v-for="item in legalMenu" :key="item.id" :to="item.href">{{item.label}}</NuxtLink>
                    </HeFlex>
                </HeFlex>
            </HeLimiter>
        </HeSection>
        <HeSection is="div" background="var(--bg-blue-500)" style="--color-text: white; color: #ffffffcc;">
            <HeLimiter>
                <HeFlex horizontal class="h-16">
                    <small>© {{ new Date().getFullYear() }} {{ useAppConfig().name}}</small>
                    <HeSpacer />
                    <IodIconButton icon-font="var(--font-brand)" is="a" href="#" target="_blank" variant="text" corner="pill" icon="&#62002;" aria-label="WhatsApp" />
                    <IodIconButton icon-font="var(--font-brand)" is="a" href="#" target="_blank" variant="text" corner="pill" icon="&#61805;" aria-label="Instagram" />
                    <IodIconButton icon-font="var(--font-brand)" is="a" href="#" target="_blank" variant="text" corner="pill" icon="&#61594;" aria-label="Facebook" />
                </HeFlex>
            </HeLimiter>
        </HeSection>
    </footer>
</template>

<script setup>
    const legalMenu = useMenu('legal')
</script>

<style lang="sass" scoped>
</style>