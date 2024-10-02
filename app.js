const {engine}=require('express-handlebars');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const axios = require('axios');
const  indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { handlebars } = require('hbs');

const  app = express();
const  port = 3000;
const  apiKey = 'PyXZXESAG0P4vqgS0O2Ecb56RmVJZterehxavPLY'; // Replace with your actual API key

// Set up Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Fetch data from EONET API
async function fetchEONETData() {
  try {
    const response = await axios.get ('https://eonet.gsfc.nasa.gov/api/v3/events?api_key=${apiKey}');
    return response.data.events;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Set up routes
app.get('/', async (req, res) => {
  const events = await fetchEONETData();
  res.render('index', { title: 'Natural Events Map', events: JSON.stringify(events) });
});




module.exports=app;