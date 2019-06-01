<template>
    <div class="matchesShowingArea">
        <div class="dataPicker">
            <el-date-picker
                    v-model="selectedDate"
                    type="date"
                    placeholder="选择日期"
            >
            </el-date-picker>

            <!--title-->
            <single-match
                    :isHeader="matchTableHeader.isHeader"
                    :matchDate="matchTableHeader.matchDate"
                    :homeTeam="matchTableHeader.homeTeam"
                    :homeTeamScore="matchTableHeader.homeTeamScore"
                    :awayTeam="matchTableHeader.awayTeam"
                    :awayTeamScore="matchTableHeader.awayTeamScore"
                    :scoreDiff="matchTableHeader.scoreDiff"
                    :predictWinner="matchTableHeader.predictWinner"
                    :winner="matchTableHeader.winner"
            ></single-match>

            <single-match
                v-for="match in currenMatches"
                :isHeader="match.isHeader"
                :matchDate="match.matchDate"
                :homeTeam="match.homeTeam"
                :homeTeamScore="match.homeTeamScore"
                :awayTeam="match.awayTeam"
                :awayTeamScore="match.awayTeamScore"
                :scoreDiff="match.scoreDiff"
                :predictWinner="match.predictWinner"
                :winner="match.winner"
            >

            </single-match>
        </div>

    </div>
</template>

<script>
    import {DatePicker} from "element-ui";
    import Vue          from "vue";
    import SingleMatch  from "@vue/singleMatch.vue";
    import {fetch}      from 'whatwg-fetch'

    Vue.use(DatePicker);

    export default {
        data() {
            return {
                selectedDate: new Date(),
                matchTableHeader: {
                    isHeader: true,
                    matchDate: "比赛日期",
                    homeTeam: "主队",
                    homeTeamScore: "主队得分",
                    awayTeam: "客队",
                    awayTeamScore: "客队得分",
                    scoreDiff: "分差",
                    predictWinner: "预测胜出者",
                    winner: "胜者"
                },
                matches: []
            };
        },

        components: {
            SingleMatch
        },

        computed: {
            currenMatches: function () {
                if (this.matches.length === 0) {
                    return [];
                }

                const year = this.selectedDate.getFullYear(),
                    month = this.selectedDate.getMonth() + 1,
                    day = this.selectedDate.getDate();

                return this.matches.filter(match => {
                    const {time} = match;
                    const date = time.split(" ")[0].replace(/[^0-9\-]/g, "").split("-").map(Number);

                    return year === date[0] && month === date[1] && day === date[2];
                }).map(match => {
                    /**
                     * away: "费城76人"
                     home: "波士顿凯尔特人"
                     score: "105-87"
                     spread: "4.5"
                     time: "2018-10-17 星期三 10-17 08:00"
                     total: "211.5"
                     */
                    const {
                        away, home, score, time
                    } = match;

                    // Remove Day of week string
                    let matchDate = time.split(/\s/);
                    matchDate.splice(2, 1);
                    matchDate = matchDate.join(" ");

                    // parse score string to number array
                    const scoreArr = score.split("-").map(Number);

                    return {
                        isHeader: false,
                        matchDate,
                        homeTeam: home,
                        homeTeamScore: scoreArr[0],
                        awayTeam: away,
                        awayTeamScore: scoreArr[1],
                        scoreDiff: Math.abs(scoreArr[0] - scoreArr[1]),
                        predictWinner: "",
                        winner: scoreArr[0] > scoreArr[1] ? home : away
                    };
                });
            }
        },

        methods: {},

        mounted() {
            fetch('/data/schedule', {
                method: 'POST'
            })
                .then(response => response.json())
                .then(data => {
                    this.matches = data;
                });
        }
    };
</script>

<style>
    .matchesShowingArea {
        padding: 100px 50px 0px 50px;
    }

    .dataPicker .el-date-editor {
        width: 100%;
        border-radius: 0;
    }
</style>