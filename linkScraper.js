const axios = require("axios");
const cheerio = require("cheerio");
const url =
  "https://www.nfl.com/stats/player-stats/category/rushing/2020/POST/all/rushingyards/desc";
axios(url)
  .then((response) => {
    const data = response.data;
    const $ = cheerio.load(data);
    const scoringLeaderTable = $("tbody > tr");
    console.log(scoringLeaderTable.length);
  })
  .catch(console.error);
