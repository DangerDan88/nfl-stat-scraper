const axios = require("axios");
const cheerio = require("cheerio");
const url =
  "https://www.nfl.com/stats/player-stats/category/rushing/2020/POST/all/rushingyards/desc";
axios(url)
  .then((response) => {
    const data = response.data;
    const $ = cheerio.load(data);
    const scoringLeaderTable = $(`<tbody> > tr`);
    const topRushLeaders2020 = [];
    for (i = 0; scoringLeaderTable.length > i; i++) {
      console.log(scoringLeaderTable.data);
    }

    // scoringLeaderTable.each(function () {
    //   const rushingLeaders = $(this).find("td").text();
    // console.log(rushingLeaders);
    //   topRushLeaders2020.push({
    //     rushingLeaders,
    //   });
    //});

    //console.log(topRushLeaders2020);
  })
  .catch(console.error);
