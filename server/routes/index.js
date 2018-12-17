var fs = require('fs');
// var jsonFilter = require("underscore");
var express = require('express');
var router = express.Router();

//thirdParty Large CSV File Parser
var Papa = require('papaparse');

const csv = "./qf.csv"

var content = fs.readFileSync(csv, "utf8");

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



const csvData = Papa.parse(content, {header: true, skipEmptyLines: true })

var items = csvData.data;


  /* GET home page. */
  router.get('/', function(req, res, next) {

    res.send(csvData.data)

});

module.exports = router;
