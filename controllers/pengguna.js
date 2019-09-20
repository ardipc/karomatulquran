var workspace = 'backend';
var backlink = '/administrator';

var models = require('../models/index');

exports.getPengguna = (req, res, next) => {
	models.penggunas.findAll().then(rows => {
		res.render(workspace+'/pengguna', {
			title: 'Daftar Pengguna',
			rows: rows
		})
	})
};