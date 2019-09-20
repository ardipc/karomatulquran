var envi = require('../config/envi');
var workspace = 'backend';
var backlink = '/administrator';

var models = require('../models/index');

var multer = require('multer');
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/img/blog')
	},
	filename: (req, file, cb) => {
		var pecah = file.originalname.split('.');
		var ekstension = pecah[pecah.length-1];
		cb(null, 'blog-'+Date.now()+'.'+ekstension)
	}
});
var upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		var allowedImages = ['image/jpeg','image/jpg','image/png']
		if(!allowedImages.includes(file.mimetype)) {
    	return cb(new Error('Only jpeg, jpg, or png are allowed'))
		}
		cb(null, true)
	}
});

exports.getPostingan = (req, res, next) => {
	models.postingans.findAll({ 
		order: [
      ['id', 'DESC'],
    ],
		include: [
			{ model: models.kategoris, as: 'kategori' }, 
			{ model: models.penggunas, as: 'pengguna' }
		] 
	}).then(rows => {
		res.render(workspace+'/postingan', {
			title: 'Daftar Postingan',
			rows: rows
		});
	});
};

exports.getForm = (req, res, next) => {
	if(req.params.id) {
		models.postingans.findOne({ where: { id: req.params.id }, include: [
				{ model: models.kategoris, as: 'kategori' }, 
				{ model: models.penggunas, as: 'pengguna' }
			] 
		}).then(rows => {
			res.render(workspace+'/postingan-form', {
				title: 'Edit Postingan',
				formData: rows
			});
		});
	} else {
		var formData = {
			id: '',
			penggunaId: '',
	    kategoriId: '',
	    judulPost: '',
	    kontenPost: '',
	    coverKecil: '',
	    coverBesar: '',
	    aktif: '',
	    isKomentar: ''
		};

		res.render(workspace+'/postingan-form', {
			title: 'Buat Postingan',
			formData: formData
		});
	}
};

exports.getHapus = (req, res, next) => {
	models.postingans.destroy({ where: { id: req.params.id }}).then(row => {
		res.redirect(backlink+'/postingan');
	});
};

exports.getLihat = (req, res, next) => {
	models.postingans.findOne({ 
		where: {
			id: req.params.id
		},
		include: [
			{ model: models.kategoris, as: 'kategori' }, 
			{ model: models.penggunas, as: 'pengguna' }
		] 
	}).then(row => {
		res.render(workspace+'/postingan-lihat', {
			title: row.judulPost,
			row: row
		});
	});
}

exports.postProses = (req, res, next) => {
	if(req.body.id == '') {
		var cUpload = upload.fields([
			{ name: 'coverKecil', maxCount: 1 }, 
			{ name: 'coverBesar', maxCount: 1 }
		]);

		cUpload(req, res, (err) => {
			if(err instanceof multer.MulterError) {
				console.error('[ERROR INSTANCE]: ', err);
			} else if(err) {
				console.error('[ERROR]: ', err);
			}

			var formData = {
				judulPost: req.body.judulPost, kontenPost: req.body.kontenPost,
				isKomentar: req.body.isKomentar, aktif: req.body.aktif,
				kategoriId: req.body.kategoriId, penggunaId: '1',
				coverKecil: req.files['coverKecil'][0].filename,
				coverBesar: req.files['coverBesar'][0].filename
			};

			models.postingans.create(formData).then(row => {
				res.redirect(backlink+'/postingan');			
			});
		});
	} else {
		var formData = {
			judulPost: req.body.judulPost, kontenPost: req.body.kontenPost,
			isKomentar: req.body.isKomentar, aktif: req.body.aktif,
			kategoriId: req.body.kategoriId, penggunaId: '1',
		};

		models.postingans.update(formData, { where: {id: req.body.id}}).then(row => {
			res.redirect(backlink+'/postingan');			
		});
	}
};

exports.postGambar = (req, res, next) => {
	var cUpload = upload.single('upload');

	cUpload(req, res, (err) => {
		if(err instanceof multer.MulterError) {
			console.error('[ERROR INSTANCE]: ', err);
		} else if(err) {
			console.error('[ERROR]: ', err);
		}

		res.json({
			uploaded: 1,
			fileName: req.file.filename,
			url: envi.app_url+'/img/blog/'+req.file.filename
		})
	})
};
