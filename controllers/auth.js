var workspace = 'backend';
var backlink = '/administrator';

var models = require('../models/index');

exports.getDashboard = (req, res, next) => {
  res.render(workspace+'/dash', { title: 'Dashboard'});
};

exports.getLogin = (req, res, next) => {
  res.render(workspace+'/login', { title: 'Login'});
};

exports.postLogin = (req, res, next) => {
	var inputEmail = req.body.email;
	var inputPassword = req.body.password;
  var where = { where: { email: inputEmail, password: inputPassword, aktif: true }};
  models.penggunas.findOne(where).then(row => {
  	if(row) {
  		res.redirect(backlink);
  	} else {
    	res.render(workspace+'/login', { 
    		title: 'Login', 
    		message: 'Email atau password salah.'
    	});
  	}
  })

};

exports.getLogout = (req, res, next) => {
  res.redirect(backlink+'/login');
};