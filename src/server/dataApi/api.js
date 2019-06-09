import express    from "express";
import path       from "path";
import {readJson} from "../../tool/json-file";

const dataRouter = express.Router();

const dataPath = path.resolve(__dirname, '../../../data/');

dataRouter.post("/schedule", (req, res) => {
    const jsonData = readJson(path.resolve(dataPath, "json/odd_2018-2019.json"));

    // filter
    const responseData = jsonData.map(d => {
        // "time":"2018-10-17 星期三 10-17 08:00","home":"波士顿凯尔特人",
        // "away":"费城76人","score":"105-87","spread":"4.5","total":"211.5"
        const {
            time, home, away, score, spread, total
        } = d;

        return {time, home, away, score, spread, total};
    });

    res.status(200).json(responseData);
});

dataRouter.post("/stat/:matchTeams", (req, res) => {
    const {matchTeams} = req.params;

    res.send(matchTeams);
});

dataRouter.post("/odd/:matchTeams", (req, res) => {
    const {matchTeams} = req.params;

    const jsonData = readJson(path.resolve(dataPath, "json/odd_2018-2019.json"));

    // 1.45 ~ infinity
    // multiple 3 ~ 4
    // 反着来
    res.status(200).json(jsonData);
});

export {
    dataRouter
};