const express = require("express");
const cors = require("cors");
const axios = require("axios");
const queryString = require("query-string");
require("dotenv").config();
const app = express();
app.use(cors());

////////////////////////////////API call For "/businesses/search"
const API_BASE_URL = process.env.API_BASE_URL;
const YELP_API_KEY = process.env.YELP_API_KEY;

app.get("/api", (req, res) => {
  let recivedQuery = req.query.searchQuery;
  let path = req.query.path;
  console.log("req.query.searchQuery", recivedQuery);

  const options = {
    method: "GET",
    url: `${API_BASE_URL}${path}?${recivedQuery}`,
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
      Origin: "localhost",
      withCredentials: true,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

////////////////////////////////API call For "/businesses/{id}"

////////////////////////////////API call For "/businesses/{id}/reviews"







const port = process.env.PORT || 3500;

// Run our server!
app.listen(port, () => {
  console.log(`Express MVC app is running on port ${port}`);
});
