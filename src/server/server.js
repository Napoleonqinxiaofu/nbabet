import express      from "express";
import {dataRouter} from "./dataApi/api";

const app = express();

app.use("/data", dataRouter);

app.listen(3000, function () {
    console.log("Live at Port 3000");
});
