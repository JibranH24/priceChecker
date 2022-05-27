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






// AUTH

// app.post('/authenticate', (req, res) => {
//     // get the email and password from req.body
//     // try and select the row from the user database WHERE email matches
//     // check that the password in db is equal to the password in req.body
//     // if they match, res.sendStatus(200)
//     // if the row exists but passwords don't match res.sendStatus(403)
//     // if the does not exist want to res.sendStatus of (404)

//     let email = req.body.inputEmail
//     let password = req.body.inputPassword
    
    
//     // res.sendStatus(201);

//     const selectSql = `SELECT first_name FROM User WHERE email = '${email}', '${password}'`
    
//     console.log(selectSql)

//     db.run(selectSql, (err, rows)=>{
//         if(err)
//         {
//             res.sendStatus(404)
//             return console.error(err.message);
//         }
//         else{
//             res.sendStatus(201)
//         }
//     console.log(rows)

//     }) 
              
//     // res.sendStatus(200)
// });




