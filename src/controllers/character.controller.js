const charactersService = require('../services/character.service');
const mongoose = require('mongoose');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersService.findAllCharactersService();
  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: 'There is no registered character!' });
  }
  res.send(allCharacters);
};

const createCharacterController = async (req, res) => {
  const createCharacter = await charactersService.createCharacterService(
    req.body,
  );
  res.status(201).send({ message: 'Character created successfully!' });
};

module.exports = {
  findAllCharactersController,
  createCharacterController,
};
