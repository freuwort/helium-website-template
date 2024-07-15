<template>
    <div class="visualizer">
        <slot>Placeholder</slot>
    </div>
</template>

<style lang="sass" scoped>
    .visualizer
        display: flex
        align-items: center
        justify-content: center
        height: 100%
        width: 100%
        min-height: 8rem
        text-transform: uppercase
        letter-spacing: .1em
        font-weight: 700
        font-family: var(--font-text)
        background: var(--bg-slate-800)
        color: var(--bg-slate-100)
        user-select: none
        overflow: hidden
</style>