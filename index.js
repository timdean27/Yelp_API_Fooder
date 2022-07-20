const express = require("express");
const cors = require("cors");
const axios = require("axios");
const queryString = require("query-string");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
app.get('/favicon.ico', (req, res) => {res.send(".......")})

//////////////////////////////API call For "/businesses/search"
const API_BASE_URL = process.env.API_BASE_URL;
const YELP_API_KEY = process.env.YELP_API_KEY;

app.get("/apiBS", (req, res) => {
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
app.get("/api/Detail", (req, res) => {;
    let pathDetail = req.query.pathDetail;
    console.log("req.query.path pathDetail", pathDetail);
  
    const options = {
      method: "GET",
      url: `${API_BASE_URL}${pathDetail}`,
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
////////////////////////////////API call For "/businesses/{id}/reviews"
app.get("/api/Reviews", (req, res) => {;
    let pathReviews = req.query.pathReviews;
    console.log("req.query.path  pathReviews", pathReviews);
  
    const options = {
      method: "GET",
      url: `${API_BASE_URL}${pathReviews}`,
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



  app.set('port', process.env.PORT || 3500);

// Run our server!
app.listen(port, () => {
  console.log(`Express app is running on port ${port}`);
});
