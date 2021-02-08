import React, { useState } from 'react';
import Calendar, { MonthView} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
    const [days, setDays] = useState([]);
    const [value, setValue] = useState(new Date());

    function check_selected_days(nextValue){
        var flag = -1;
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
                //value={value}
                minDate={new Date()}
                tileClassName={tileClassName}
            />
        </div>
    );
}

export default CalendarComponent;