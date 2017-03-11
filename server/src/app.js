var express = require('express');
var https = require('https');
var CurrencyRoute = require('./CurrencyRoute');
var app = express();

app.use('/currency', CurrencyRoute);

app.listen(3000, function () {
	console.log('App start listening on port 3000');
})

