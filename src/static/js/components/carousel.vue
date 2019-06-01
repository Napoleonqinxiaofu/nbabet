<template>
    <div class="carousel-container">

        <div class="carousel-images">
            <carousel
                    :autoplay="true"
                    :perPage="1"
                    :paginationEnabled="false"
                    :loop="true"
                    :autoplayHoverPause="false"
                    :mouseDrag="false"
                    :autoplayTimeout="2000">
                <slide v-for="img in images">
                    <img :src="img" alt="Images">
                </slide>
            </carousel>
        </div>

        <div class="website-intro-text">
            <div class="welcome-words">
                NBA Prediction Site
                <br>
                Welcomes
                <br>
                You
            </div>

            <div class="website-welcomes-words-detail">
                NBA Prediction 网站提供NBA数据查询以及NBA常规赛预测。
            </div>
        </div>

    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    // import images
    import carousel_1 from "@images/carousel-1.jpg";
    import carousel_2 from "@images/carousel-2.jpg";
    import carousel_3 from "@images/carousel-3.jpg";
    import carousel_4 from "@images/carousel-4.jpg";
    import carousel_5 from "@images/carousel-5.jpg";
    import carousel_6 from "@images/carousel-6.jpg";
    import carousel_7 from "@images/carousel-7.jpg";

    const images = [
        carousel_1, carousel_6, carousel_2, carousel_4, carousel_3, carousel_5, carousel_7
    ];

    export default {
        components: {
            Carousel,
            Slide
        },

        data: () => {
            return {
                images
            };
        }
    }

</script>

<style>

    .carousel-container {
        color: white;
        height: 580px;
        position: relative;
        overflow: hidden;

        /*border-bottom: 1px solid red;*/
    }

    .carousel-images {
        height: 580px;
    }

    .carousel-images img {
        height: 580px;
        width: 100%;
        display: inline-block;
    }

    .website-intro-text {
        height: 580px;
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.6);

        // dev
        /*border: 1px solid red;*/
    }

    .welcome-words {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        white-space : nowrap;
        text-align: center;

        font-size: 40px;
    }

    .website-welcomes-words-detail {
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
        text-indent: 2em;
    }

</style>