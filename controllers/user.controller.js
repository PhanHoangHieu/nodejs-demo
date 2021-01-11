var db = require('../db');
const shortid = require('shortid');

module.exports.index = function(req, res){
  res.render('users/index',{
  	users: db.get('users').value()
  });
}

module.exports.search = function(req,res){
	//q chứa keyword để search
	var query = req.query.q;
	var matchedUsers = db.get('users').value().filter(function(users){
		return users.name.indexOf(query) !== -1;
	});

	res.render('users/index',{
		users:matchedUsers
	});
}

module.exports.create = function(req,res){
	console.log(req.cookies);
	res.render('users/create');
}

module.exports.get = function(req,res){
	var id = req.params.id;
	var user = db.get('users').find({id:id}).value();
	res.render('users/view',{
		user:user
	});
}

module.exports.postCreate = function(req,res){
	req.body.id = shortid.generate();
	
	db.get('users').push(req.body).write();
	// chuyển hướng đến trang /users
	res.redirect('/users');
}
