const connection = require("../config/database");
const { DataTypes } = require('sequelize');

const MensagemModel = connection.define("Mensagens", {
    conteudo: {
        type: DataTypes.TEXT
    },
    id_chat: {
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
    }
}, {
    underscored: true,
    modelName: "Mensagens",
    freezeTableName: true,
    timestamps: false,
    defaultScope: false
});

module.exports = MensagemModel; 