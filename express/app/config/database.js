const { Sequelize } =  require("sequelize");

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./express/app/config/database/db.sqlite"
});

connection.authenticate()
    .then(() => console.log("Conexão com o banco efeutada com sucesso."),
          () => console.error("Deu ruim"));

module.exports = connection;