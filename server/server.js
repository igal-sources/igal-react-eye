const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "67a6282843d3951c480df57aad82eaef";
var port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/movies/film-list", (req, res) => {
  request(baseUrl.concat(req.query.queryParams, "&api_key=", apiKey), (error, response, body) => {
    error && console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    res.send(body);
  });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
