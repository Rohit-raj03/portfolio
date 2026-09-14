const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", (error) => {
  if (error) {
    console.log("Database connection failed!", error.message);
  } else {
    console.log("Database connected successfully");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    f_name TEXT NOT NULL
  )
`, (error) => {
  if (error) {
    console.log("Table creation failed:", error.message);
  } else {
    console.log("Users table created successfully");
  }
});

module.exports = db;
