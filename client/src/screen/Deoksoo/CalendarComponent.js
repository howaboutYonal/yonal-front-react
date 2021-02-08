import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
    const [days, setDays] = useState([]);
    const [value, setValue] = useState(new Date());
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
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    };

    function check_selected_days(nextValue){
        var flag = -1;
        if(nextValue.valueOf() === value.valueOf()) return;
        for(var day in days){
            if(days[day].valueOf() === nextValue.valueOf()){
                flag = day;
                break;
            }
        }
        if(flag===-1){
            setDays(days.concat(nextValue));
        }else{
            var fore = days.splice(0, flag);
            var back = days.splice(1, days.length);
            var tmp = fore.concat(back);
            setDays(tmp);
        }
    }

    function tileClassName(params){
        if(params.view === 'month' && !(days.length ===0))
            if(days.some(x => x.valueOf() === params.date.valueOf()))
                return 'selected_day'
    }
    
    return (
        <div>
            <Calendar
                className="calendar"
                onChange={check_selected_days} 
                value={value}
                minDate={value}
                tileClassName={tileClassName}
            />
            <p>{days.map(x=> x.valueOf())}</p>
            <p>{test.customers ? test.customers.map(x => console.log(x)) : ""}</p>
        </div>
    );
}

export default CalendarComponent;