const connection = require("../config/database");
const { DataTypes } = require('sequelize');

const UsuarioModel = connection.define("Usuarios", {
    nome: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isNull: {
                msg: "Campo e-mail não pode ser nulo"
            }
        }
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isNull: {
                msg: "Campo senha não pode ser nulo"
            }
        }
    }
}, {
    underscored: true,
    modelName: "Usuarios",
    freezeTableName: true, 
    timestamps: false,
    defaultScope: false
});

module.exports = UsuarioModel;