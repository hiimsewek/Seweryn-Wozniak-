const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('women', { title: 'Buty Damskie' });//index-renderujemy index.pug, {parametry dla puga}
});

module.exports = router;
