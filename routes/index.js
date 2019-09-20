var express = require('express');
var router = express.Router();

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
	res.render('galeri', { title: 'Galeri Terbaru'});
});

router.get('/kontak', (req, res, next) => {
	res.render('kontak', { title: 'Kontak Kami'});
});

router.get('/profil', (req, res, next) => {
	res.render('profil', { title: 'Profil Kami'});
});

module.exports = router;
