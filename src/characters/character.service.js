const Characters = require('./Character');

const findAllCharactersService = (offset, limit) => {
  return Characters.find()
    .sort({ name: +1 })
    .skip(offset)
    .limit(limit);
};

const countCharacters = () => {
  return Characters.countDocuments();
};

const findByIdCharactersService = (idCharacter) => {
  return Characters.findById(idCharacter);
};

const findByNameCharactersService = (name) => {
  return Characters.find({ name: { $regex: name, $options: 'i' } }).sort({
    name: +1,
  });
};

const createCharacterService = (newCharacter) => {
  return Characters.create(newCharacter);
};

const updateCharacterService = (idCharacter, editedCharacter) => {
  return Characters.findByIdAndUpdate(idCharacter, editedCharacter);
};

const deleteCharacterService = (idCharacter) => {
  return Characters.findByIdAndDelete(idCharacter);
};

module.exports = {
  findAllCharactersService,
  countCharacters,
  findByIdCharactersService,
  findByNameCharactersService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
