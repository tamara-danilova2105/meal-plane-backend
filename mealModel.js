const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model('Meal', mealSchema);
