const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal } = require("./mealController");

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeals', deleteMeal);
router.post('/editMeal', editMeal);

module.exports = router;