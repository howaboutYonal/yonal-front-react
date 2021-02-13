require('dotenv').config();

module.exports = {
  "development": {
    "username": "admin_yonal",
    "password": process.env.DATABASE_PW,
    "database": "yonal",
    "host": "admin-yonal.ci04dcmjvtyq.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "admin_yonal",
    "password": process.env.DATABASE_PW,
    "database": "yonal",
    "host": "admin-yonal.ci04dcmjvtyq.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "production": {
    "username": "admin_yonal",
    "password": process.env.DATABASE_PW,
    "database": "yonal",
    "host": "admin-yonal.ci04dcmjvtyq.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  }
}
};
