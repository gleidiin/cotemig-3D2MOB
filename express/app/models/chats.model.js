const connection = require("../config/database");
const { DataTypes } = require('sequelize');

const ChatModel = connection.define("Chat", {
    nome: {
        type: DataTypes.TEXT
    },
    descricao: {
        type: DataTypes.TEXT
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    id_profile: {
        type: DataTypes.INTEGER
    }
}, {
    underscored: true,
    modelName: "Chats",
    timestamps: false,
    defaultScope: false
});

module.exports = ChatModel; 