const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal, deleteAll } = require("./mealController");

const router = Router();

router.get('/meals', getMeal);
router.post('/save-meals', saveMeals);
router.post('/delete-meals', deleteMeal);
router.post('/delete-all', deleteAll);
router.put('/edit-meal', editMeal);

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api', swaggerUi.serve);
router.get('/api', swaggerUi.setup(swaggerDocument));

module.exports = router;