var express = require('express');
var validate = require('../validate/user.validate')

var controllers = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controllers.index);

router.get('/cookie',function(req,res,next){
	//trả về 1 cookie
	res.cookie('user-id',206189323);
	res.send('Hello')
});
// req.query  lay ra ds param duoc gui len boi method  GET
router.get('/search',controllers.search);

router.get('/create',controllers.create);
// :id là route parameter
// param dùng để get 1 parameter động. vd: id
router.get('/:id',controllers.get);

// req.body lấy nội dung được gửi lên bởi form thông qua method POST
// dể sử dụng cần cài và cấu hình body paser
router.post('/create',validate.postCreate,controllers.postCreate);

module.exports = router;