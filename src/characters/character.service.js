const Characters = require('./Character');

const findAllCharactersService = () => {
  return Characters.find();
};

const findByIdCharactersService = (idCharacter) => {
  return Characters.findById(idCharacter);
};

const findByNameCharactersService = (name) => {
  return Characters.find({ name: { $regex: name, $options: "i" } });
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
  findByIdCharactersService,
  findByNameCharactersService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
