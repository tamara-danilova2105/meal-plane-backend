const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal, deleteAll } = require("./mealController");

const router = Router();

router.get('/meals', getMeal);
router.post('/save-meal', saveMeals);
router.post('/delete-meal', deleteMeal);
router.post('/delete-all', deleteAll);
router.put('/edit-meal', editMeal);

//upload


//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api', swaggerUi.serve);
router.get('/api', swaggerUi.setup(swaggerDocument));

module.exports = router;