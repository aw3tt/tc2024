var express = require('express')
var router = express.Router()
var Am_nyam = require('../models/am-nyam.js').Am_nyam
var checkAuth = require('../middlewares/checkAuth.js')

/* GET am_nyams listing. */
router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с am_nyams')
})

/* Страница ам нямов */
router.get('/:nick', checkAuth, async function (req, res, next) {
  var am_nyams = await Am_nyam.find({ nick: req.params.nick })
  console.log(am_nyams)
  if (!am_nyams.length) return next(new Error('Нет такого ам няма'))
  var am_nyam = am_nyams[0]
  res.render('am_nyam', {
    title: am_nyam.title,
    picture: am_nyam.avatar,
    desc: am_nyam.desc,
  })
})

//Hero.find({},{_id:0,title:1,nick:1},callback)

module.exports = router
