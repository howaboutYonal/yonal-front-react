const Sequelize = require('sequelize');

module.exports = class VoteData extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey:true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            }
            }, {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'VoteData',
                tableName: 'voteData',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
        });
    };
    
    static associate(db){
    }
};