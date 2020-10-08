const { Sequelize } =  require("sequelize");

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./app/config/database/db.sqlite"
});

connection.authenticate()
    .then(() => console.log("conectou"),
          () => console.error("Deu ruim"));

module.exports = connection;