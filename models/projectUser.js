const Sequelize = require('sequelize');
const { Project } = require('.');

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
                references:{
                    model:'project',
                    key:'projectId'
                }
            },
            userId:{
                type: Sequelize.INTEGER,
                allowNull: false,
                references:{
                    model:'user',
                    key:'userId'
                }
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
                tableName: 'project-user',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
        });
    };

    static associate(db){
        db.Project.belongsToMany(db.User, {through: 'ProjectUser'});
        db.User.belongsToMany(db.Project, {through: 'ProjectUser'});
    }
};