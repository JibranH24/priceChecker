const sqlite3 = require("sqlite3");

function favConnect() {
  const db = new sqlite3.Database(
    "favourites.db",
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

function favClose(db) {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log("favdb Closed");
    }
  });
}

module.exports = {favConnect, favClose};