const mongoose = require('mongoose');

const validId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  if (!req.body || !req.body.name || !req.body.imageUrl) {
    return res.status(400).send({
      message: 'Não foi possível realizar a ação, envie o formulário completo!',
    });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
