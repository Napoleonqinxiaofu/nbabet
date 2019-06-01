<template>
    <div class="aboutComp">

        <div class="aboutUsInto">
            <br>
            <h2>All About Us</h2>
            <br>
            <h4></h4>
            <br>
            <p>
                NBA是世界上最顶级的篮球联赛，吸引着全球篮球热爱着的目光，赛场上的不确定性增加NBA比赛的观赏性以及戏剧性，这令统计学家们既兴奋又烦恼，NBA Prediction网站借助数据分析的方法来对比赛进行预测。
                <br>
                <br>
                数据不会欺骗人，但是数据是死的，世界却是活动的，所以在数据分析方法之外，我们还加入了赛场上的不确定性的因子来加以计算，让比赛预测更加可靠。
            </p>
        </div>
        <div class="aboutUsImage">
            <img :src="hadeng" alt="NBA Star">
        </div>

    </div>
</template>

<script>
    import HaDeng from "@images/hadeng.png";
    export default {
        data () {
            return {
                hadeng: HaDeng
            };
        }
    }
</script>

<style>

    .aboutComp {
        width: 960px;
        height: 700px;
        margin: auto;
        color: white;
        position: relative;

        /*dev*/
        /*border: 1px solid red;*/
    }

    .aboutUsInto {
        position: absolute;
        left: 0;
        top: 0;
        padding-left: 40px;
        width: 50%;
        height: 100%;
        background-color: rgba(25, 25, 25, 1);

        /*dev*/
        /*border: 1px solid green;*/
    }

    .aboutUsInto h2 {
        font-size: 40px;
    }

    .aboutUsInto h4 {
        font-size: 20px;
    }

    .aboutUsInto p {
        font-size: 16px;
    }

    .aboutUsImage {
        position: absolute;
        right: 0;
        width: 50%;
    }

    .aboutUsImage img {
        width: 100%;
    }

</style>