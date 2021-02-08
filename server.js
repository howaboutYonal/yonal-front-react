const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req, res)=>{
    res.send([
        {
            'id' : 1,
            'name' : '정덕수',
            'selected_date' : '1613574000000'
        },
        {
            'id' : 2,
            'name' : '김지효',
            'selected_date' : '1614092400000'
        },
        {
            'id' : 3,
            'name' : '박수빈',
            'selected_date' : '1614265200000'
        }
    ])
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));