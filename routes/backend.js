var express = require('express');
var router = express.Router();

// deklarasi controller
var authController = require('../controllers/auth');
var penggunaController = require('../controllers/pengguna');
var kategoriController = require('../controllers/kategori');
var postinganController = require('../controllers/postingan');
var pengaturanController = require('../controllers/pengaturan');
var masterController = require('../controllers/master');

// {GET} AUTH
router.get('/', authController.getDashboard);
router.get('/dash', authController.getDashboard);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.getLogout);

// {GET} PENGGUNA
router.get('/pengguna', penggunaController.getPengguna);

// {GET} KATEGORI
router.get('/kategori', kategoriController.getKategori);
router.get('/kategori/:id/edit', kategoriController.getEdit);
router.get('/kategori/:id/hapus', kategoriController.getHapus);
router.post('/kategori/proses', kategoriController.postProses);

// {GET} POSTINGAN
router.get('/postingan', postinganController.getPostingan);
router.get('/postingan/form', postinganController.getForm);
router.get('/postingan/:id/edit', postinganController.getForm);
router.get('/postingan/:id/lihat', postinganController.getLihat);
router.get('/postingan/:id/hapus', postinganController.getHapus);
router.get('/postingan/:id/aktif', postinganController.getAktif);
router.get('/postingan/:id/cover', postinganController.getCover);
router.post('/postingan/proses', postinganController.postProses);
router.post('/postingan/prosesedit', postinganController.postProsesEdit);
router.post('/postingan/gambar', postinganController.postGambar);
router.post('/postingan/cover', postinganController.postCover);

// {GET} PENGATURAN
router.get('/pengaturan', pengaturanController.getPengaturan);
router.post('/pengaturan/simpan', pengaturanController.simpanPengaturan);

// {GET} MASTER DATA
router.get('/data/v1/:model', masterController.getData);

module.exports = router;
