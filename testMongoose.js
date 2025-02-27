const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024')

var Am_nyam = require('./models/Am_nyam').Am_nyam

var Am_nyam = new Am_nyam({
  title: 'Ам Ням с шляпкой',
  nick: 'am_nyam_s_shlyapkoi',
})

Am_nyam.save()
