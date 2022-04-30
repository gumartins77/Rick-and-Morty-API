const Characters = require('./Character');

const findAllCharactersService = async () => {
  return await Characters.find();
};

const findByIdCharactersService = async (idCharacter) => {
  return await Characters.findById(idCharacter);
};

const findByNameCharactersService = async (nameCharacter) => {
  return await Characters.find({ name: nameCharacter });
};

const createCharacterService = async (newCharacter) => {
  return await Characters.create(newCharacter);
};

const updateCharacterService = async (idCharacter, editedCharacter) => {
  return await Characters.findByIdAndUpdate(idCharacter, editedCharacter);
};

const deleteCharacterService = async (idCharacter) => {
  return await Characters.findByIdAndDelete(idCharacter);
};

module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
  findByNameCharactersService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
