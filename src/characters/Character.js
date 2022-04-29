const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imagemUrl: {
    type: String,
    require: true,
  },
});

const Character = mongoose.model('characters', CharacterSchema);

module.exports = Character;
