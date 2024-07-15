<template>
    <HeSection background="var(--bg-blue-50)">
        <HeLimiter>
            <HeFlex horizontal padding="4rem 0" gap="2rem" breakpoint="768" reversed>
                <HeFlex class="flex-1">
                    <IodCarousel dots arrows infinite :interval="5000" overlay class="h-80 rounded-xl">
                        <template #slide-1>
                            <Visualizer />
                        </template>
                        <template #slide-2>
                            <Visualizer />
                        </template>
                    </IodCarousel>
                </HeFlex>
                <HeFlex class="flex-1">
                    <h1 class="m-0 text-blue-500">Iodine + Helium</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsum praesentium dignissimos dolorem
                        perferendis sequi aut exercitationem deserunt eos ratione asperiores excepturi quaerat non cum alias ab, qui
                        numquam eius!
                    </p>
                </HeFlex>
            </HeFlex>
        </HeLimiter>
        <template #below>
            <HeShapeDivider shape="arrow" height="2rem" background="var(--bg-blue-50)"/>
        </template>
    </HeSection>

    <HeSection>
        <HeLimiter>
            <HeFlex padding="4rem 0" gap="4rem">
                <HeFlex horizontal gap="2rem 4rem" align-y="flex-start" breakpoint="768">
                    <Visualizer class="flex-1 rounded-xl aspect-video"/>
                    <div class="flex-1">
                        <h2>Section 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsum praesentium dignissimos
                            dolorem perferendis sequi aut exercitationem deserunt eos ratione asperiores excepturi quaerat non.
                        </p>
                    </div>
                </HeFlex>
                <HeFlex horizontal gap="2rem 4rem" align-y="flex-start" breakpoint="768" reversed>
                    <Visualizer class="flex-1 rounded-xl aspect-video"/>
                    <div class="flex-1">
                        <h2>Section 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsum praesentium dignissimos
                            dolorem perferendis sequi aut exercitationem deserunt eos ratione asperiores excepturi quaerat non.
                        </p>
                    </div>
                </HeFlex>
            </HeFlex>
        </HeLimiter>
    </HeSection>

    <HeSection>
        <HeLimiter>
            <HeFlex padding="4rem 0" gap="2rem">
                <h2>Button Preview</h2>
                <PreviewButton />
            </HeFlex>
        </HeLimiter>
    </HeSection>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Helium Website Template',
        description: '',
    })
</script>

<style lang="sass" scoped></style>