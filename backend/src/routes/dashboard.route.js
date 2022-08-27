const express = require("express");
const fs = require('fs');

const projects = fs.readFileSync(`${__dirname}/../files/projects.json`,{encoding:'utf-8'});
const charts = fs.readFileSync(`${__dirname}/../files/charts.json`,{encoding:'utf-8'});
const charts1 = fs.readFileSync(`${__dirname}/../files/charts1.json`,{encoding:'utf-8'});
const items = fs.readFileSync(`${__dirname}/../files/items.json`,{encoding:'utf-8'});

const dashboardRoute = express.Router();


dashboardRoute.use(express.json());

dashboardRoute.get('/:path',async(req,res)=>{
    switch(req.params.path){
        case 'projects':{
            res.send(projects);
            break;
        }
        case 'charts':{
            res.send(charts);
            break;
        }
        case 'charts1':{
            res.send(charts1);
            break;
        }
        case 'items':{
            res.send(items);
            break;
        }
        default:{
            res.send("use routes /projects /charts /charts1 /items");
        }
    }
})


module.exports = dashboardRoute;