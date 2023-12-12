const repo = require("../newsRepository/newsRepository");


const GetnewsByCategory = (req, res) => {
  repo.GetnewsByCategory(req.query.q).then((data) => {
    res.send(data);
  });
};

const SearchByTitle = (req, res) => {
  repo.SearchByTitle(req.query.q).then((data) => {
    res.send(data);
  });
};
module.exports = { SearchByTitle, GetnewsByCategory };
