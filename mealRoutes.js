const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal, deleteAll } = require("./mealController");

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeals', deleteMeal);
router.post('/deleteAll', deleteAll);
router.post('/editMeal', editMeal);

module.exports = router;