<template>

    <div class="matchesDetail" :style="{fontWeight: isHeader ? 'bold' : 'normal'}">
        <div>
            {{matchDate}}
        </div>
        <div>
            {{homeTeam}}
        </div>
        <div>
            {{homeTeamScore}}
        </div>
        <div :style="{opacity: isHeader ? 0 : 1}">
            VS
        </div>
        <div>
            {{awayTeam}}
        </div>
        <div>
            {{awayTeamScore}}
        </div>
        <div>
            {{scoreDiff}}
        </div>
        <div>
            {{predictWinner}}
            <i class="el-icon-check" v-if="isCorrect && !isHeader"></i>
            <i class="el-icon-close" v-else-if="isCorrect && !isHeader"></i>
        </div>
        <div>
            {{winner}}
        </div>
        <div>
            <button
                    class="statClickButton"
                    v-if="!isHeader"
                    @click="getStat"
            >{{statWord}}</button>
        </div>
    </div>

</template>

<script>
    import {fetch} from 'whatwg-fetch';


    export default {

        props: {
            "matchDate": {
                default: ""
            },
            "homeTeam": {
                default: ""
            },
            "homeTeamScore": {
                default: ""
            },
            "awayTeam": {
                default: ""
            },
            "awayTeamScore": {
                default: ""
            },
            "isHeader": {
                default: false
            },
            scoreDiff: {
                default: ""
            },
            predictWinner: {
                default: ""
            },
            winner: {
                default: ""
            },
            isCorrect: {
                default: true
            }
        },

        data() {
            return {
                statWord: "数据统计",
                statData: []
            };
        },

        methods: {
            getStat() {
                fetch(`/data/stat/${this.homeTeam}-${this.awayTeam}`, {
                    method: 'POST'
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    });
            }
        }
    };
</script>

<style>
    .matchesDetail {
        color: white;
        height: 100px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        font-size: 16px;

        border-bottom: 1px solid white;

        /*// dev*/
        /*border: 1px solid red;*/
    }

    .matchesDetail > div {
        flex: 1;
        text-align: center;
    }

    .statClickButton {
        background: transparent;
        color: white;
        font-size: 16px;
        cursor: pointer;
        padding: 10px;
    }

    .statClickButton:hover {
        background: white;
        color: black;
    }
</style>