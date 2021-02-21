const Sequelize = require('sequelize');

module.exports = class ProjectUser extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey:true,
            },
            projectId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                include:{
                    
                }
            },
            userId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            isManager: {
                type: Sequelize.TINYINT(1),
                allowNull: false,
            }
            }, {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'ProjectUser',
                tableName: 'projectUser',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
        });
    };

    static associate(db){
        db.ProjectUser.hasMany(db.User, {foreignKey:'userId', sourceKey:'userId'})
        db.ProjectUser.hasMany(db.Project, {foreignKey:'projectId', sourceKey:'projectId'})
    }
};