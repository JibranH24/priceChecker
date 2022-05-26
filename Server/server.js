const express = require('express');
const sqlite3 = require("sqlite3")
const { check, validationResult } = require('express-validator');
const app = express();

//Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//npm cors
///////////////////////////////////////  

app.use(express.static('../public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const port = 3000;

const db = new sqlite3.Database("./Database/database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Success!!");
    }
})// how you connect to a database 



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

// Importing and use of the User class from userCreation.js
app.post('/users', (req, res) => {
    var sql =
        `INSERT INTO User(username, password, first_name, last_name, age, email, phone_number)` +
        `VALUES('${req.body.username}', '${req.body.password}', '${req.body.first_name}', '${req.body.last_name}', ${req.body.age},'${req.body.email}', ${req.body.phone_number})`;

    db.run(sql, (err) => {
        if (err) {
            res.status(400).send(err)
            return console.error(err.message);
        }
        else {
            console.log("Row Created!");
            res.sendStatus(201);
        }
    });
    //please work
})

app.get('/favourites', (req, res) => {
    // SQL to get all favourites and send to frontend (ideally as an array of strings)
})

app.post('/favourites/:id', (req, res) => {
    const id = req.params.id // Really should find a way of checking this is a real coin id!
    // SQL to add row to favourites database
})

app.delete('/favourites/:id', (req, res) => {
    // Delete the row from the database corresponding to the coin given in :id
})

///Favourites - Connection to favourites database

const favdb = new sqlite3.Database("./Database/database.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    else {
        console.log("Connection to Favourite database has been established");
    }
})


// create favourite table
//favdb.run("CREATE TABLE favourites(ID INTEGER PRIMARY KEY AUTOINCREMENT, COIN TEXT NOT NULL)")

