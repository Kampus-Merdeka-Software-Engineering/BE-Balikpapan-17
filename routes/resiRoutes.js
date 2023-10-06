const express = require('express');
const { resiController } = require('../controllers');
const resiRouter = express.Router('');

resiRouter.get('/resi', resiController.getResi);

resiRouter.get('/resi/:noResi', resiController.getResiByNoResi);

module.exports = resiRouter;