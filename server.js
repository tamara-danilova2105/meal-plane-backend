const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./mealRoutes');
const cors = require('cors');
const multer = require('multer');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = 8000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log('WE WERE CONNECTED TO MONGO'))
    .catch(err => console.log(err));

app.use(routes);

//upload
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
});

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`);
});



