import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

/*  참여한 모든 유저의 date데이터를 api로 불러온다.
    이렇게 불러온 데이터를 종합하여 캘린더에 출력한다. */

const Total_Calendar = () => {
    //const [] = useState([]);
    const [value, ] = useState(new Date());
    const [test, setTest] = useState([
        {
            customers:""
        }
    ]);

    useEffect(() =>{
        callApi()
            .then(res => setTest({customers: res}))
            .catch(err => console.log(err));
    },[]);

    async function callApi(){
        const response = await fetch('/api/user');
        const body = await response.json();
        return body;
    };

    // function check_selected_days(nextValue){
    //     var flag = -1;
    //     if(nextValue.valueOf() === value.valueOf()) return;
    //     for(var day in days){
    //         if(days[day].valueOf() === nextValue.valueOf()){
    //             flag = day;
    //             break;
    //         }
    //     }
    //     if(flag===-1){
    //         setDays(days.concat(nextValue));
    //     }else{
    //         var fore = days.splice(0, flag);
    //         var back = days.splice(1, days.length);
    //         var tmp = fore.concat(back);
    //         setDays(tmp);
    //     }
    // }

    function tileClassName(params){
        if(params.view === 'month' && !(test.customers.length ===0))
            if(test.customers.some(x => x.selectedday === params.date.valueOf()))
                return 'selected_day'
    }
    
    return (
        <div>
            <h1>종합된 날짜</h1>
            <Calendar
                className="calendar"
//                onChange={check_selected_days} 
                value={value}
                minDate={value}
                tileClassName={test.customers ? tileClassName : ""}
            />
            <p>{test.customers ? test.customers.map(x => console.log(x)) : ""}</p>
        </div>
    );
}

export default Total_Calendar;