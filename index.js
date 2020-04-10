'use strict';
const express = require( 'express' );
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

const users = [];

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let userObj = {
    firstName : "",
    secondName : "",
    birthday: "",
}

app.post('/users', (req, res, next) => {
    const user = req.body;
    userObj.firstName = user.firstName
    userObj.secondName = user.secondName
    user.birthday = new Date(user.birthday);
    user.id = Date.now();
    users.push(user);
    res.json(user);
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});