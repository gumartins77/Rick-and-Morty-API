const route = require('express').Router();
const controllerCharacters = require('./character.controller');
const { validId, validObjectBody } = require('./character.middleware');
const loginMiddleware = require('../login/login.middleware');

route.get(
  '/',
  loginMiddleware,
  controllerCharacters.findAllCharactersController,
);
route.get(
  '/find/:id',
  loginMiddleware,
  validId,
  controllerCharacters.findByIdCharactersController,
);
route.get(
  '/search',
  loginMiddleware,
  controllerCharacters.findByNameCharactersController,
);

route.post(
  '/create',
  loginMiddleware,
  validObjectBody,
  controllerCharacters.createCharacterController,
);
route.put(
  '/update/:id',
  loginMiddleware,
  validId,
  validObjectBody,
  controllerCharacters.updateCharacterController,
);

route.delete(
  '/delete/:id',
  loginMiddleware,
  validId,
  controllerCharacters.deleteCharacterController,
);

module.exports = route;
