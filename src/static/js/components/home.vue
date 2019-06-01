<template>
    <div>
        <carousel></carousel>
        <matches></matches>
    </div>
</template>

<script>
    import carousel from "@vue/carousel.vue";
    import matches  from "@vue/matches.vue";

    export default {
        components: {
            carousel,
            matches
        }
    }
</script>