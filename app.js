if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config=require('./config');
var mongoose=require('mongoose');
var global = require("global");
const flash=require('express-flash');
const session=require('express-session');
const methodOverride = require('method-override')
const passport=require('passport');


orderedItems=[];
size=[];




mongoose.connect(config.db,{useNewUrlParser:true});//polaczenie z baza

var db=mongoose.connection;
db.on('error',console.log.bind(console,'connection error:'));


var indexRouter = require('./routes/index');
var menRouter = require('./routes/men');
var womenRouter = require('./routes/women');
var itemRouter=require('./routes/item');
var loginRouter=require('./routes/login');
var registerRouter=require('./routes/register');


var shoppingCartRouter=require('./routes/shoppingCart')



var app = express();



////password
app.use(flash());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))




app.locals.orderedItems=[];
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//przekazujemy rozszerzenia ktore bedziemy wykorzystywac w expressie
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//deklaracja routingow na stronie (1arg-strona na ktora wchodzimy 2arg- co ma sie wykonac po wejsciu na nia)
app.use('/', indexRouter);
app.use('/men', menRouter);
app.use('/women', womenRouter);
app.use('/item',itemRouter);
app.use('/shoppingCart',shoppingCartRouter);
app.use('/login',loginRouter.router);
app.use('/register',registerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
