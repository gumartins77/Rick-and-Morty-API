const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');

route.get('/characters', controllerCharacters.findAllCharactersController);
route.get(
  '/characters/find/:id',
  controllerCharacters.findByIdCharactersController,
);
route.post(
  '/characters/create',
  controllerCharacters.createCharacterController,
);
route.put(
  '/characters/update/:id',
  controllerCharacters.updateCharacterController,
);

route.delete(
  '/characters/delete/:id',
  controllerCharacters.deleteCharacterController,
);

module.exports = route;
