var express = require('express');
var DB = require('./DB');
var moment = require('moment');

var router = express.Router();

router.get('/:dateFrom/:dateTo/:currencyFrom/:currencyTo', function(req, res, next) {
	const {
		dateFrom,
		dateTo,
		currencyFrom,
		currencyTo,
	} = req.params;
	const promises = [];
	const result = [];

	for (let date = moment(dateFrom); date.diff(dateTo) <= 0; date.add('days', 1)) {
		let d = date.format('YYYY-MM-DD');

		promises.push(
			DB.get('currency', d)
			.then((data) => {
				result.push([d, (data[currencyFrom]) / (data[currencyTo])]);
			})
		);
	}

	Promise.all(promises)
	.then(() => {
		res.json(result);
	})
	.catch(() => {
		res.sendStatus(500);
	});
});

module.exports = router;