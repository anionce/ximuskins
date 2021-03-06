const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./data/food.db");

function add(data, callback) {
  const sql =
    "INSERT INTO platos(name, main_flavour, country_origin, ingredients, score) VALUES(?, ?, ?, ?, ?)";
  db.run(
    sql,
    [
      data.name,
      data.main_flavour,
      data.country_origin,
      data.ingredients,
      data.score,
    ],
    callback
  );
}

function all(callback) {
  const sql = "SELECT * FROM platos";
  db.all(sql, callback);
}

function one(id, callback) {
  const sql = "SELECT * FROM platos WHERE id = ?";
  db.get(sql, id, callback);
}

function update(id, newData, callback) {
  const sql =
    "UPDATE measurements SET name = ?,  main_flavour = ?, country_origin = ?, ingredients = ?, score = ? WHERE id = ?";
  db.run(
    sql,
    [
      newData.name,
      newData.main_flavour,
      newData.country_origin,
      newData.ingredients,
      newData.score,
    ],
    callback
  );
}

function remove(id, callback) {
  const sql = "DELETE FROM platos WHERE id = ?";
  db.run(sql, id, callback);
}

/*
function stats(callback) {
  const sql =
    "SELECT AVG(bmi) AS 'averageBmi', COUNT(*) AS 'measurements' FROM measurements";
  db.get(sql, callback);
} */

function deleteAll(callback) {
  const sql = "DELETE FROM platos";
  db.run(sql, callback);
}

module.exports = { add, all, one, update, remove, deleteAll };
