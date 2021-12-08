var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia')

router.use("/admin", require("../admin"))

/* GET home page. */
router.get('/', async function(req, res, next) {
  not = await Noticia.find();
  res.json(not);
});

router.get('/visualizar', async function(req, res, next) {
  not = await Noticia.findById(req.query.id);
  res.json(not);
});

router.get('/contador', async function(req, res, next) {
  quantidade = await Noticia.find().count();
  res.json({ quantidade:quantidade});
});

module.exports = router;



