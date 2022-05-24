const sqlite3 = require("sqlite3");

function connect() {
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
}

function close(db) {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log("db Closed");
    }
  });
}

//db.run("CREATE TABLE ResturantClass(ID INTEGER PRIMARY KEY AUTOINCREMENT,NAME TEXT NOT NULL,IMAGELINK TEXT NOT NULL)");

module.exports = {connect, close};

// <!-- Sequalize failed connection -->
// //Database Connection to Database file using specific libraries
// const { Sequelize, DataTypes, Model } = require("sequelize");

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   //host: "localhost",
//   storage: "C:/Users/pinocchiot/SW6 - Multiverse Bootcamp/FinalBootcampProject/Database/database.db",
// });

// //Testing Database connection using 'await' in try and catch
// connectionTest = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// connectionTest()
// // //Closing Database
// // sequelize.close();

// //Exporting the database libraries for future use
// module.exports = { sequelize, DataTypes, Model };
