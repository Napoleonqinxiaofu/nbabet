<template>
    <div class="nav">
        <div class="logo">
            {{logoText}}
        </div>

        <ul>
            <li v-for="(link, text) in links">
                <router-link class="nav-item" :to="link">{{text}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                logoText: "NBA Prediction",
                links: {
                    "Home": "/",
                    "About Us": "/about",
                    "Contact Us": "/contact"
                }
            };
        }
    };

</script>

<style>

    .nav {
        color: white;
        cursor: pointer;
        height: 100px;
        position: relative;

        // dev
        /*border-bottom: 1px solid red;*/
    }

    .nav a {
        color: white;
    }

    .logo {
        font-size: 30px;
        margin-left: 70px;
    }

    .nav>div, .nav>ul {
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .nav>ul {
        right: 0;
    }
    .nav>ul li {
        display: inline-block;
        margin-right: 30px;
        font-size: 16px;
    }

</style>