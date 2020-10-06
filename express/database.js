const { Sequelize, DataTypes } =  require("sequelize");

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./database/db.sqlite"
});

connection.authenticate()
    .then(() => {
        console.log("conectou");
    }, () => {
        console.error("Deu ruim")  
    });

    
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

const ProfileModel = connection.define("Profile", {
    nome: {
        type: DataTypes.TEXT
    },
    descricao: {
        type: DataTypes.TEXT
    },
    foto_url: {
        type: DataTypes.TEXT
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

//ProfileModel.hasOne(UsuarioModel);
ProfileModel.hasMany(ChatModel, { foreignKey: 'id_profile' });
ChatModel.hasMany(MensagemModel, { foreignKey: 'id_chat' });

module.exports = {
    ChatModel, 
    MensagemModel,
    UsuarioModel, 
    ProfileModel
}