var Am_nyam = require('../models/am-nyam').Am_nyam

module.exports = async function (req, res, next) {
  res.locals.nav = []

  var menu = await Am_nyam.find(null, { _id: 0, title: 1, nick: 1 })
  if (menu.length != 0) {
    res.locals.nav = menu
  }
  next()
}
