const express = require('express');
const cors = require('cors');
const axios = require('axios')
const queryString = require('query-string');
require('dotenv').config();
const app = express();

app.use(cors());



const API_BASE_URL = process.env.API_BASE_URL
const YELP_API_KEY = process.env.YELP_API_KEY
// const path = "/businesses/search"
// const searchCriteria = ({term: 'Pizza', location: 'New York', price : 2 , radius: 8049});
// const searchQuery = queryString.stringify(searchCriteria);

app.get('/api', (req, res) => {
let recivedQuery = req.query.searchQuery
let path = req.query.path
console.log("req.query.searchQuery", recivedQuery)


    const options = {
        method: 'GET',
        url: `${API_BASE_URL}${path}?${recivedQuery}`,
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
            Origin: "localhost",
            withCredentials: true,
          },
    }

    axios.request(options).then((response) => {
        res.json(response.data)
        // console.log(response.data)
    }).catch((error) => {
        console.log(error)})

})

app.use(cors());
// Create a variable for our port
const port = process.env.PORT || 3500;

// Run our server!
app.listen(port, () => {
  console.log(`Express MVC app is running on port ${port}`);
});