<template>
    <div>
        <navComp></navComp>

        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <footerComp></footerComp>
    </div>
</template>


<script>
    // App enter file

    import navComp    from "@vue/navComp.vue";
    import footerComp from "@vue/footerComp.vue";

    export default {
        components: {
            navComp, footerComp
        }
    };
</script>