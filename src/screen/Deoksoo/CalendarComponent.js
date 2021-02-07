import React, { useState } from 'react';
import Calendar, { MonthView} from 'react-calendar';
import TileContent  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [days, setDays] = useState([]);
    const [value, setValue] = useState(new Date());



    function check_selected_days(nextValue){
        var flag = -1;
        for(var day in days){
            if(days[day].valueOf() === nextValue.valueOf()){
                console.log(day);
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
    
    return (
        <div >
          
            <Calendar
                className="calendar"
                onChange={check_selected_days} 
                // onClickDay={(value) => {
                //     console.log(value);
                //     setDays(days.concat(value));
                //     console.log(days);
                // }}
                value={value}
                minDate={new Date()}
                //tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
                tileClassName={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 3 ? 'wednesday' : null}
            />
            
        </div>

    );
}

export default CalendarComponent;