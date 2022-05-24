const sqlite3 = require("sqlite3");
const databaseHandler = require("./database.js");
//user class object
class User {

  static CreateNewUser(
    username,
    password,
    first_name,
    last_name,
    age,
    email,
    phone_number
  ) {
    const db = new sqlite3.Database(
      "./Database/database.db",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          return console.error(err.message);
        } else {
          console.log("Success!!");
          return db;
        }
      }
    );
    // var db = databaseHandler.connect();
    
    var sql =
      `INSERT INTO User(username, password, first_name, last_name, age, email, phone_number)` +
      `VALUES('${username}', '${password}', '${first_name}', '${last_name}', ${age},'${email}', ${phone_number})`;
    
      console.log(sql);
      db.run(sql);

      db.close((err) => {
        if (err) {
          return console.error(err.message);
        } else {
          console.log("db Closed");
        }
      });
    }
    // databaseClose(db);


UpdateUser( 
  username,
  password,
  first_name,
  last_name,
  age,
  email,
  phone_number){
   
    // var db = databaseHandler.connect();
    
        //change this SQL to UPDATE :) 
    var sql =
      `INSERT INTO User(username, password, first_name, last_name, age, email, phone_number)` +
      `VALUES('${username}', '${password}', '${first_name}', '${last_name}', ${age},'${email}', ${phone_number}) WHERE ID = ${this.ID}`;
    
      console.log(sql);
      db.run(sql);

    }
  } 

//Calling create new user function and can be called as many times as we want
  User.CreateNewUser(
    "Samantha",
    "TestPass123",
    "Sam",
    "Haigh",
    26,
    "samantha.haigh@multieverse.io",
    123456678910
  );

  Sam = new User();
  //Sam.UpdateUser(values...)

  
//   CreateNewUser(
//     username,
//     password,
//     first_name,
//     last_name,
//     age,
//     email,
//     phone_number
//   ) {
//     // API.Post(username... password etc...)
//   }































































// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// //Defined 'User' Attributes as an object and the properties
// // const User = sequelize.define('User', {
// //   // Model attributes are defined here
// //   username: {
// //     type: DataTypes.STRING,
// //     allowNull: false
// //   },
// //   password: {
// //     type: DataTypes.STRING,
// //     allowNull: false
// //   },
// //   first_name: {
// //     type: DataTypes.STRING,
// //     allowNull: false
// //   },
// //   last_name: {
// //     type: DataTypes.STRING
// //     // allowNull defaults to true
// //   },
// //   phone_number: {
// //     type: DataTypes.NUMBER,
// //     allowNull: false
// //   },
// //   email: {
// //     type: DataTypes.STRING
// //     // allowNull defaults to true
// //   },
// //   age: {
// //     type: DataTypes.NUMBER,
// //     allowNull: false
// //   },
// // }, {
// //   // Other model options go here
// // });

// // `sequelize.define` also returns the model
// // console.log(User === sequelize.models.User); // true

// //Creating Class to be initilized as a class is more defined than a standard object
// class User extends Model {}

// //Init creates the 'user' tables with an ID that we have defined previously and initilizes this into the class
// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phone_number: {
//       type: DataTypes.INTEGER,
//     },
//     email: {
//       type: DataTypes.STRING,
//     },
//     age: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   { sequelize, modelName: "User" }
// );

// //User class is the same as user in sequelize table
// //console.log(User === sequelize.models.User); // true

// //   const user = new User({ id: 1 });
// //   user.id; // 1

// //   console.log("success")

// // createUser = async () => {
// //   try {
// //     const user = await User.create(
// //       {
// //         username: "alice123",
// //         password: "JibranIsACheatCode",
// //         first_name: "Alice",
// //         last_name: "Makey",
// //         phone_number: "8383838",
// //         email: "alice@gmail.com",
// //         age: "20",
// //       },
// //       {
// //         fields: [
// //           "username",
// //           "password",
// //           "first_name",
// //           "last_name",
// //           "phone_number",
// //           "email",
// //           "age",
// //         ],
// //       }
// //     );
// //     // let's assume the default of isAdmin is false
// //     console.log(user.username); // 'alice123'
// //     console.log(user.password); // 'alice123'
// //     console.log(user.first_name); // 'alice123'
// //     console.log(user.last_name); // 'alice123'
// //     console.log(user.phone_number); // 'alice123'
// //     console.log(user.email); // 'alice123'
// //     console.log(user.age); // 'alice123'
// //   } catch(Error) {
// //     console.log(Error);
// //   }
// // };

// createUser = async () => {
//   try {
//     const user = await User.create(
//       {
//         ID:1
//       },
//       {
//         fields: [
//           "ID"
//         ],
//       }
//     );
//     // let's assume the default of isAdmin is false
//     console.log(user.ID); // 'alice123'
//   } catch(Error) {
//     console.log(Error);
//   }
// };

// createUser();

// //   // Find all users
// //   findUser = async() => {
// // const users = await User.findAll();
// // console.log(users.every(user => user instanceof User)); // true
// // console.log("All users:", JSON.stringify(users, null, 2));
// //   }
// //   findUser()
