import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../calendar.css';
import axios from 'axios';

/*  참여한 모든 유저의 date데이터를 api로 불러온다.
    이렇게 불러온 데이터를 종합하여 캘린더에 출력한다. */

// projectId는 링크를 통해 유추한다.

const Result = () => {
    const [value, ] = useState(new Date());
    const [test, setTest] = useState([
        // {
        //     customers:""
        // }
    ]);
    const [users, setUsers] = useState([
        {
            users:""
        }
    ]);
    const [voteData, setVoteData] = useState([
        {
            votedata:""
        }
    ]);

    useEffect(() =>{
        // callApi()
        //     .then(res => setTest({customers: res}))
        //     .catch(err => console.log(err));
        fetchApi().then(console.log(test));
    },[]);

    async function callApi(){
        const response = await fetch('/api/user');
        const body = await response.json();
        return body;
    };

    const fetchApi = async() =>{
        const res = await axios.post('http://localhost:5000/v1/get/project-result',{
            projectId: 0
        }).then(result => console.log(result.data.user_name,result.data.votedata));
    };

    function tileClassName(params){
        if(params.view === 'month' && !(test.customers.length ===0))
        if(test.customers.some(x => x.selectedday === params.date.valueOf().toString()))
            return 'selected_day';
    }
    
    return (
        <div>
            <h1>종합된 날짜</h1>
            {test.customers ? 
            <Calendar className="calendar"
            value = {value}
            minDate = {value}
            tileClassName = {tileClassName} /> : ""}
        </div>
    );
}

export default Result;