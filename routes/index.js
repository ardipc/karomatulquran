var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.get('/', (req, res, next) => {
  res.render('home', { title: 'Karomatul Quran' });
});

router.get('/berita', (req, res, next) => {
	res.render('berita', { title: 'Berita Terbaru'});
});

router.get('/berita/:id/detail', (req, res, next) => {
	res.render('berita-detail', { title: 'Berita Terbaru'});
});

router.get('/galeri', (req, res, next) => {
	res.render('galeri', { title: 'Galeri Kami'});
});

router.get('/kontak', (req, res, next) => {
	res.render('kontak', { title: 'Kontak Kami'});
});

router.get('/profil', (req, res, next) => {
	res.render('profil', { title: 'Profil Kami'});
});

router.get('/santri', (req, res, next) => {
	models.santris.findAll().then(rows => {
		res.render('santri', { title: 'Santri Kami', rows: rows });
	});
});

router.get('/prestasi', (req, res, next) => {
	models.prestasis.findAll().then(rows => {
		res.render('prestasi', { title: 'Prestasi Kami', rows: rows });
	})
});

router.get('/agenda', (req, res, next) => {
	res.render('agenda', { title: 'Agenda Keseharian' });
});

router.get('/fasilitas', (req, res, next) => {
	res.render('fasilitas', { title: 'Fasilitas Kami' });
});

module.exports = router;
