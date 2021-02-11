const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require('./user');
const Project = require('./project');
const ProjectUser = require('./projectUser');
const VoteData = require('./voteData');
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Project = Project;
db.ProjectUser = ProjectUser;
db.VoteData = VoteData;

User.init(sequelize);
Project.init(sequelize);
ProjectUser.init(sequelize);
VoteData.init(sequelize);


User.associate(db);
Project.associate(db);
ProjectUser.associate(db);
VoteData.associate(db);

module.exports = db;