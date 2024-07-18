<template>
    <footer>
        <HeSection is="div" background="var(--bg-slate-100)">
            <template #above>
                <HeShapeDivider shape="triangle" height=".75rem" background="var(--bg-slate-100)" flip-y />
            </template>
            <HeLimiter>
                <HeFlex horizontal padding="4rem 0" gap="2rem" align-y="flex-start" breakpoint="768">
                    <HeFlex class="flex-1">
                        <h3 class="m-0">Kontakt</h3>
                        <HeDivider class="my-4"/>
                        <NuxtLink to="/">Menu Item 1</NuxtLink>
                        <NuxtLink to="/">Menu Item 2</NuxtLink>
                        <NuxtLink to="/">Menu Item 3</NuxtLink>
                        <NuxtLink to="/">Menu Item 4</NuxtLink>
                    </HeFlex>
                    <HeFlex class="flex-1">
                        <h3 class="m-0">Über uns</h3>
                        <HeDivider class="my-4"/>
                        <NuxtLink to="/">Menu Item 1</NuxtLink>
                        <NuxtLink to="/">Menu Item 2</NuxtLink>
                    </HeFlex>
                    <HeFlex class="flex-1">
                        <h3 class="m-0">Rechtliches</h3>
                        <HeDivider class="my-4"/>
                        <NuxtLink class="link" v-for="item in legalMenu" :key="item.id" :to="item.href">{{item.label}}</NuxtLink>
                    </HeFlex>
                </HeFlex>
            </HeLimiter>
        </HeSection>
        <HeSection is="div" background="var(--bg-slate-800)" style="--color-text: white; color: #ffffffcc;">
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