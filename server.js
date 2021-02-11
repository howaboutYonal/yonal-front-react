const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./routes');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const v1 = require('./routes/v1');
const { sequelize } = require('./models');

app.use('/', indexRouter);
app.use('/v1',v1);
sequelize.sync({force:false})
.then(()=>{
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

const connection = mysql.createConnection({
    host: conf.host,
    user : conf.user,
    password: conf.password,
    port: conf.port,
    database:conf.database
});
connection.connect();

app.listen(port, ()=> console.log(`Listening on port ${port}`));
