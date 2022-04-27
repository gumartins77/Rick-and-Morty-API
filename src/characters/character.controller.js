const charactersService = require('./character.service');
const mongoose = require('mongoose');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersService.findAllCharactersService();
  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não há personagens registrados!' });
  }
  res.send(allCharacters);
};

const findByIdCharactersController = async (req, res) => {
  const chosenCharacter = await charactersService.findByIdCharactersService(
    req.params.id,
  );
  if (!chosenCharacter) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }
  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const createCharacter = await charactersService.createCharacterService(
    req.body,
  );
  res.status(201).send({ message: 'Personagem criado com sucesso!' });
};

const updateCharacterController = async (req, res) => {
  const updateCharacter = await charactersService.updateCharacterService(
    req.params.id,
    req.body,
  );
  res.send({ message: 'Personagem atualizado com sucesso!' });
};

const deleteCharacterController = async (req, res) => {
  const deleteCharacter = await charactersService.deleteCharacterService(
    req.params.id,
  );
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
