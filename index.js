const express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');
var cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
// npm nodemon giúp ta chỉ khởi động server,khi code có thay đổi thì server tự động reload
// cài đặt để thiệt lập giao diện cho web thông qua render()
app.set('view engine','pug');
app.set('views','./views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// load nhung file tinh(vd: css,js,img)
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index',{name:'Hieupeo'});
});

app.use('/users',userRoute);


app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
});