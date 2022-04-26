const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/characters', controllerCharacters.findAllCharactersController);
route.post(
  '/characters/create',
  controllerCharacters.createCharacterController,
);

module.exports = route;
