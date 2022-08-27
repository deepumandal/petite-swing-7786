const express = require("express");
const fs = require("fs");
const contractRoute = express.Router();
const contractModel = require("../model/contract.model");

// const contractsTemplate = fs.readFileSync(
//   `${__dirname}/../files/contracts.json`,
//   { encoding: "utf-8" }
// );

contractRoute.post("/create/contract", async (req, res) => {
  // const {img,type,head,name} = req.body
  const contractPost = await contractModel.insertMany(req.body);
  res.send(contractPost);
});
contractRoute.get("/", async (req, res) => {
  const skip = req.query.skip;
  //   console.log(skip, "skip");
  const ContractsData = await contractModel.find().skip(skip).limit(15);
  //   console.log(ContractsData);
  res.send(ContractsData);
});

module.exports = contractRoute;
