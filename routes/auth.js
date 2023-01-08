var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Redirect to login');
});

router.get('/register', function (req, res, next) {
  res.send('register');
});

router.get('/login', function (req, res, next) {
  res.send('login');
});

router.get('/forgot-password', function (req, res, next) {
  res.send('forgot password');
});

router.get('/create-new-password', function (req, res, next) {
  res.send('create new pass');
});


router.get('/verify-email', function (req, res, next) {
  res.send('verify email');
});

router.get('/verify-pass-link', function (req, res, next) {
  res.send('verify pass link');
});

module.exports = router;
