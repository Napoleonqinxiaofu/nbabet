<template>
    <footer class="footer">
        &copy;{{year}} By NBA Prediction.
    </footer>
</template>

<script>
    export default {
        data () {
            return {
                year: new Date().getFullYear()
            };
        }
    };
</script>

<style>
    .footer {
        color: white;
        font-size: 12px;
        text-align: center;
        margin-top: 50px;
        /*position: fixed;*/
        /*bottom: 10px;*/
        /*left: 50%;*/
        /*transform: translateX(-50%);*/
    }
</style>