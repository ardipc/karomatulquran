var models = require('../models/index');

exports.getData = (req, res, next) => {
	models[req.params.model].findAll().then(rows => {
		res.json(rows);
	});
}