const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetwork-db', {});

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`server up and running on ${PORT}`));