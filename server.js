const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysql = require('mysql');
const { sequelize } = require('./models');
const indexRouter = require('./routes');
const v1 = require('./routes/v1');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use('/', indexRouter);
app.use('/v1',v1);

sequelize.sync({force:false})
.then(()=>{
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    port: process.env.DATABASE_PORT || 3306,
    database:process.env.DATABASE,
    insecureAuth : true
});
connection.connect();

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });