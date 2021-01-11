module.exports.postCreate = function(req,res,next){
	var errors = [];
	if(!req.body.name){
		errors.push('name is required');
	}
	if(!req.body.phone){
		errors.push('phone is required');
	}

	if(errors.length){
		res.render('users/create',{
			errors:errors,
			values:req.body
		});
		return;
	}
	// chuyển tới middleware tiếp theo,nếu ko có next() thì gặp res thì nó sẽ tự động thoát khỏi cuộc gọi request
	//  và ko chuyển qua middle ware kh
	next();
}