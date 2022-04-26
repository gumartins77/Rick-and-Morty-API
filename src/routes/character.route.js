const route = require('express').Router();
const controllerCharacters = require('../controllers/character.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/character.middleware');

route.get('/characters', controllerCharacters.findAllCharactersController);
route.get(
  '/characters/find/:id',
  validId,
  controllerCharacters.findByIdCharactersController,
);
route.post(
  '/characters/create',
  validObjectBody,
  controllerCharacters.createCharacterController,
);
route.put(
  '/characters/update/:id',
  validId,
  validObjectBody,
  controllerCharacters.updateCharacterController,
);

route.delete(
  '/characters/delete/:id',
  validId,
  controllerCharacters.deleteCharacterController,
);

module.exports = route;
