/**
 * This script will fetch currency data from openexchangerates and store it to Firebase database
 * Example usage:
 * - node bin/get-history-currency.js 2016-09-01 2017-03-11 (Fetch the data in the time series)
 * - node bin/get-history-currency.js 2016-09-01 (Fetch only on day)
 */

var request = require('request');
var config = require('config');
var moment = require('moment');
var DB = require('../src/DB');

var API_ROOT = 'https://openexchangerates.org/api/historical/';
var APP_ID = config.openexchangeratesApiKey;

var fromDate = process.argv[2];
var toDate = process.argv[3];

if (!fromDate) {
	console.log('Usage: node bin/get-history-currency.js 2016-09-01 2017-03-11');
	process.exit(0);
}

var startDate = moment(fromDate);
var endDate = toDate ? moment(toDate) : startDate;

for(var date = moment(startDate); date.diff(endDate) <= 0; date.add('days', 1)) {
	let d = date.format('YYYY-MM-DD');
	let url = `${API_ROOT}${date.format('YYYY-MM-DD')}.json?app_id=${APP_ID}`;

	request(url, function (error, res, body) {
		var json = JSON.parse(body)

		console.log(d);
		DB.set('currency', d, json.rates)
	});
}