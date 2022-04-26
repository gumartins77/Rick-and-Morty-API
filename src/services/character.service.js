const Characters = require('../models/Character');

const findAllCharactersService = async () => {
  return await Characters.find();
};

const createCharacterService = async (newcharacter) => {
  return await Characters.create(newcharacter);
};

module.exports = {
  findAllCharactersService,
  createCharacterService,
};
