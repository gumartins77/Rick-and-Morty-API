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

const findByIdCharactersController = async (req, res) => {
  const chosenCharacter = await charactersService.findByIdCharactersService(
    req.params.id,
  );
  if (!chosenCharacter) {
    return res.status(404).send({ message: 'Character not found!' });
  }
  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const createCharacter = await charactersService.createCharacterService(
    req.body,
  );
  res.status(201).send({ message: 'Character created successfully!' });
};

const updateCharacterController = async (req, res) => {
  const updateCharacter = await charactersService.updateCharacterService(
    req.params.id,
    req.body,
  );
  res.send({ message: 'Character successfully updated!' });
};

const deleteCharacterController = async (req, res) => {
  const deleteCharacter = await charactersService.deleteCharacterService(
    req.params.id,
  );
  res.send({ message: 'Character successfully deleted!' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
