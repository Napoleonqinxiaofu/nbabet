<template>
    <div class="tableContainer">
        <h2 class="correctRatio"><b>
            正确率：{{correctRatio}}
        </b></h2>
        <el-table
                :data="sortedTableData"
                style="width: 100%"
                height="500"
        >
            <el-table-column
                    fixed
                    prop="home"
                    label="主队"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="away"
                    label="客队"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="比分"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="oddOffice"
                    label="博彩机构"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="homeOdd"
                    label="主队赔率"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="awayOdd"
                    label="客队赔率"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="isOddRight"
                    label="是否正确"
                    width="">
                <template slot-scope="scope">
                    <i class="el-icon-check" v-if="scope.row.isOddRight"></i>
                    <i class="el-icon-close" v-else-if="!scope.row.isOddRight"></i>
                </template>
            </el-table-column>
            <el-table-column
                    prop="multiple"
                    label="倍数"
                    width="">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {TableColumn, Table} from "element-ui";
    import Vue                  from "vue";
    import {fetch}              from "whatwg-fetch";

    Vue.use(Table);
    Vue.use(TableColumn);

    const fixNumber = (num, fixed = 2) => Math.floor(num * Math.pow(10, fixed)) / Math.pow(10, fixed);

    export default {
        data() {
            return {
                tableData: []
            }
        },

        components: {
            TableColumn, Table
        },

        computed: {
            correctRatio() {
                if (this.tableData.length === 0) {
                    return "0%";
                }

                let count = 0;
                let len = this.tableData.length;

                for (let i = 0; i < len; i++) {
                    const {isOddRight} = this.tableData[i];
                    isOddRight && count++;
                }

                return fixNumber(count / len) * 100 + "%";
            },

            sortedTableData () {
                const right = [], wrong = [];

                for( let i = 0; i < this.tableData.length; i++) {
                    const {isOddRight} = this.tableData[i];
                    if (isOddRight) {
                        right.push(this.tableData[i]);
                    } else {
                        wrong.push(this.tableData[i]);
                    }
                }

                return [...wrong, ...right];
            }
        },

        created() {
            fetch("/data/odd/all", {
                method: "POST"
            })
                .then((res) => res.json())
                .then(data => {

                    this.tableData = data.map(d => {
                        const {
                            home, away, score, oddList
                        } = d;

                        let odd = [];
                        oddList.some(o => {
                            if (o[0].replace(/\s/g, '') === "竞彩官方") {
                                odd = o;
                                return true;
                            }
                        });

                        if (odd.length === 0) {
                            odd = oddList[0];
                        }

                        let [oddOffice, homeOdd, awayOdd] = odd;
                        homeOdd = parseFloat(homeOdd);
                        awayOdd = parseFloat(awayOdd);

                        // 判断机构预测的情况与现实情况是否相同
                        let scoreArr = score.split("-").map(Number);


                        return {
                            home, away, score,
                            oddOffice,
                            homeOdd,
                            awayOdd,
                            isOddRight: scoreArr[0] < scoreArr[1] === homeOdd > awayOdd,
                            multiple: homeOdd > awayOdd ? -(fixNumber(homeOdd / awayOdd)) : fixNumber(awayOdd / homeOdd)
                        };
                    });
                })
        }
    }

    // 1.45 ~ infinity
    // multiple 3
    // 反着来
</script>


<style>
    .correctRatio {
        color: white;
        font-size: 20px;
    }
</style>
