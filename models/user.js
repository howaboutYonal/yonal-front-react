const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey:true,
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            email:{
                type: Sequelize.STRING(50),
                allowNull: true 
            },
            pw:{
                type: Sequelize.STRING(20),
                allowNull: true 
            },
            }, {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'User',
                tableName: 'user',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
        });
    };
    
    static associate(db){

    }
};