const connection = require("../config/database");
const { DataTypes } = require('sequelize');

const ProfileModel = connection.define("Profile", {
    nome: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Campo nome não pode ser vazio"
            }
        }
    },
    descricao: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Campo descricao não pode ser vazio"
            }
        }
    },
    foto_url: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Campo foto_url não pode ser vazio"
            }
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER
    }
}, {
    underscored: true,
    modelName: "Profile",
    timestamps: false,
    defaultScope: false
});

module.exports = ProfileModel;