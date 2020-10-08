const connection = require("../config/database");
const { DataTypes } = require('sequelize');

const UsuarioModel = connection.define("Usuario", {
    nome: {
        type: DataTypes.TEXT
    }
}, {
    underscored: true,
    modelName: "Usuario",
    timestamps: false,
    defaultScope: false
});

module.exports = UsuarioModel;