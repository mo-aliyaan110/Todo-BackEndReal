const Express = require('express');
const app = new Express();
const PORT = process.env.PORT || '5000';
const mongoose = require('mongoose');
const DB_URL=`mongodb+srv://admin:password123321@expressrest.oy7hyam.mongodb.net/?retryWrites=true&w=majority`
const cors = require('cors');
app.use(cors());
app.use(Express.json());

// Okay
const getRouter = require('./routes/getRouter');
const postRouter = require('./routes/postRouter');

app.use('/list', getRouter);
app.use('/todo', postRouter);

app.get('/', (req, res) => {
    res.send("<div>Hello</div>");
})

// connecting Database
mongoose.connect(DB_URL, () => {
    console.log("Database is connected");
})


app.listen(PORT, () => console.log(`Listenting @ port ${PORT} `));