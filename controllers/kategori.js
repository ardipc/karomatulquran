var workspace = 'backend';
var backlink = '/administrator';

var models = require('../models/index');

exports.getKategori = (req, res, next) => {
	var formData = { id: '', namaKategori: '', deskripsiKategori: '' };
	models.kategoris.findAll().then(rows => {
		res.render(workspace+'/kategori', {
			title: 'Daftar Kategori',
			formData: formData,
			rows: rows,
		});
	});
};

exports.getEdit = (req, res, next) => {
	models.kategoris.findOne({ where: { id: req.params.id }}).then(row => {
		var formData = { id: row.id, namaKategori: row.namaKategori, deskripsiKategori: row.deskripsiKategori };
		models.kategoris.findAll().then(rows => {
			res.render(workspace+'/kategori', {
				title: 'Edit Kategori',
				formData: formData,
				rows: rows
			});
		});
	});
};

exports.getHapus = (req, res, next) => {
	models.kategoris.destroy({ where: { id: req.params.id }}).then(row => {
		res.redirect(backlink+'/kategori');
	});
};

exports.postProses = (req, res, next) => {
	var formData = { namaKategori: req.body.namaKategori, deskripsiKategori: req.body.deskripsiKategori };
	if(req.body.id == '') {
		models.kategoris.create(formData).then(row => {
			res.redirect(backlink+'/kategori');
		});
	} else {
		models.kategoris.update(formData, { where: { id: req.body.id }}).then(() => {
			res.redirect(backlink+'/kategori');
		});
	}
};