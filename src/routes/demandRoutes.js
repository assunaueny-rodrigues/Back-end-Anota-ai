const express = require('express');

const router = express.Router();

const DemandController = require('../controller/DemandController');

const DemandValidation = require('../middlewares/demanValidation');

router.post('/', DemandValidation, DemandController.create);
router.put('/:id', DemandController.update);
router.get('/filter/all', DemandController.all)

module.exports = router;