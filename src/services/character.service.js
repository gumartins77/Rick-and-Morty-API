const Characters = require('../models/Character');

const findAllCharactersService = async () => {
  return await Characters.find();
};

const findByIdCharactersService = async (idCharacter) => {
  return await Characters.findById(idCharacter);
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
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
