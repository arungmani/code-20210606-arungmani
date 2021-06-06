import express, { Request, Response } from "express";
import * as personalData from "./persons.service";
export const personsRouter = express.Router();
const fs = require("fs");
const rawdata = fs.readFileSync(
  "../code-20210606-arungmani/src/constants/personData.json"
);
const data = JSON.parse(rawdata);
personsRouter.get("/", async (req: Request, res: Response) => {
  try {
    let bmiresult: any = [{ overWeight: 0, completeData: [] }];
    let overWeightCount = 0;
    let dataSize = data.length;
    for (let i = 0; i < dataSize; i++) {
      let res = personalData.getBMIResult(data[i]);
      bmiresult[0].completeData.push(res);
      if (res.bmiCategory ? res.bmiCategory == "Over Weight" : 0)
        overWeightCount++;
    }
    bmiresult[0].overWeight = overWeightCount;
    res.status(200).send(bmiresult);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
