import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Opinion from '../models/opinion.js';

dotenv.config();
const DB = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}`)))
    .catch(console.error);

// Home Route
app.get('/', (_, res) => {
    res.send('Hello There');
});

// Get All Opinions
app.get('/get-opinions', (_, res) => {
    Opinion.find().then(ops => {
        res.send(ops);
    })
    .catch(err => res.send(err));
});

// Adding Opinions
app.post('/add-opinion', (req, res) => {
    const { body } = req;
    const { title, content, author, date, time } = body;

    const payload = {
        title: title,
        content: content,
        author: author,
        date: date,
        time: time
    };
        
    const opinion = new Opinion(payload);

    opinion.save()
        .then(result => res.send({ saved: true, id: result._id }))
        .catch(err => res.send(err));
});
