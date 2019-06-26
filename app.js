const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const playstore = require('./playstore')


const app = express();

app.use(cors());

app.use(morgan('common'));

app.get('/apps', (req, res) => {
  const {sort = '', genres } = req.query

  if (sort) {
    if(!['rating', 'app'].includes(sort)) {
      return res
        .status(404)
        .send('sort must be one of title or rank')
    }
  }

  if (genres) {
    if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
      return res
        .status(404)
        .send('genres must be one of title or rank')

    }
  }

  let results = playstore
    if(sort) {
    results
      .sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    }); 
  } 

  res.json(results)
})


module.exports = app

