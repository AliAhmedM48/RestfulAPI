require("dotenv").config();
const connectDB = require("./db");
const port = process.env.PORT;

const UserController = require("./controllers/userController");
const userController = new UserController();



const express = require('express');
const app = express();
const User = require('./models/user');


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api/users', userController.usersGet);
app.get('/api/users/:id', userController.userGetById);
app.delete('/api/users/:id', userController.userDelete);

app.post('/api/users', userController.userCreate);


//* listening to server and connecting to db
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server started on port ${port}`);
        connectDB();

    } else {
        console.error("aaaaaaaaaaaaaaa", error);
    }
});