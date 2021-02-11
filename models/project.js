const Sequelize = require('sequelize');

module.exports = class Project extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            projectId: {
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
            startDate:{
                type: Sequelize.DATE,
                allowNull: true 
            },
            endDate:{
                type: Sequelize.DATE,
                allowNull: true 
            },
            shareLink:{
                type: Sequelize.STRING(100),
                allowNull: true 
            },
            inviteLink:{
                type: Sequelize.STRING(100),
                allowNull: true 
            },
            }, {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Project',
                tableName: 'project',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
        });
    };
    
    static associate(db){
    }
};