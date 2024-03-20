const mealModel = require('./mealModel');

module.exports.getMeal = async (_, res) => {
    const resultMeal = await mealModel.find().sort({ _id: -1 });
    res.send(resultMeal);
};

module.exports.saveMeals = async (req, res) => {
    const { title, image } = req.body;
    mealModel.create({ title, image })
        .then(data => res.send(data));
};

module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    mealModel.findByIdAndDelete(_id)
        .then(() => res.send('Deleted a meal'))
};

module.exports.editMeal = async (req, res) => {
    const { _id, title } = req.body;
    mealModel.findByIdAndUpdate(_id, { title })
        .then(() => res.send('Edided a meal'));
}

module.exports.deleteAll = async (_, res) => {
    mealModel.deleteMany({})
        .then(() => res.send('Deleted All'))
}