var workspace = 'backend';
var backlink = '/administrator';

var models = require('../models/index');

exports.getPengaturan = (req, res, next) => {
	models.pengaturans.findAll().then(rows => {
		res.render(workspace+'/pengaturan', {
			title: 'Pengaturan Website',
			forms: rows
		});
	})
};

exports.simpanPengaturan = (req, res, next) => {
	req.body = JSON.parse(JSON.stringify(req.body));

	if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('value')) {
		if(Array.isArray(req.body.name) && Array.isArray(req.body.value)) {
			let arr = [];
			for(var i=0; i<req.body.name.length; i++) {
				arr.push({ name: req.body.name[i], value: req.body.value[i]})
			}

			models.pengaturans.bulkCreate(arr).then(rows => {
				res.redirect(backlink+'/pengaturan');
			});
		} else {
			models.pengaturans.create({ name: req.body.name, value: req.body.value }).then( rows => {
				res.redirect(backlink+'/pengaturan');
			});
		}
	} else {
		let cloneBody = {...req.body};
		delete cloneBody.submit;

		Object.keys(cloneBody).forEach(item => {
			models.pengaturans.update({ value: cloneBody[item]}, {where: { name: item }}).then(rows => {
				res.redirect(backlink+'/pengaturan');
			})
		});
	}
};