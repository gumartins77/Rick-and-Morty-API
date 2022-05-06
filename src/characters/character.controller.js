const charactersService = require('./character.service');
const mongoose = require('mongoose');

const findAllCharactersController = async (req, res) => {
  let { offset, limit } = req.query;

  offset = Number(offset);
  limit = Number(limit);

  if (!limit) {
    limit = 0;
  }

  if (!offset) {
    offset = 0;
  }

  const allCharacters = await charactersService.findAllCharactersService(
    offset,
    limit,
  );

  const total = await charactersService.countCharacters();

  const currentUrl = req.baseUrl;

  const next = offset + limit;
  const nextUrl =
    next < total ? `${currentUrl}$limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  if (allCharacters.length == 0) {
    return res.status(404).send({ message: 'Não há personagens registrados!' });
  }
  res.send({ nextUrl, previousUrl, limit, offset, total, allCharacters });
};

const findByIdCharactersController = async (req, res) => {
  const chosenCharacter = await charactersService.findByIdCharactersService(
    req.params.id,
  );
  if (!chosenCharacter) {
    return res.status(400).send({ message: 'Personagem não encontrado!' });
  }
  res.send(chosenCharacter);
};

const findByNameCharactersController = async (req, res) => {
  const { name } = req.query;
  const searchCharacter = await charactersService.findByNameCharactersService(
    name,
  );
  if (searchCharacter.length === 0) {
    return res.status(400).send({ message: 'Personagem não encontrado!' });
  }
  res.send(searchCharacter);
};

const createCharacterController = async (req, res) => {
  const createCharacter = await charactersService.createCharacterService(
    req.body,
  );
  res.status(201).send(createCharacter);
};

const updateCharacterController = async (req, res) => {
  const updateCharacter = await charactersService.updateCharacterService(
    req.params.id,
    req.body,
  );
  res.send(updateCharacter);
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
  findByNameCharactersController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
