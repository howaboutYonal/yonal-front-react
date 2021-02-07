import React, { useState } from 'react';
import Calendar, { MonthView} from 'react-calendar';
import TileContent  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [days, setDays] = useState([]);
    const [value, setValue] = useState(new Date());

    function onChange(nextValue){
        var tmp = [];
        setDays(days.concat(nextValue));
        days.forEach(function(value){
            console.log(value);
            console.log(nextValue);
            if(value.valueOf() === nextValue.valueOf){
                
            }else{
                tmp.push(value);
            }
        })
        //setDays(tmp);
        console.log(days);

        
//        if(days.includes(nextValue))
//            alert('selected');
//        else{
//            setValue(nextValue);
//            setDays(days.concat(nextValue));
//            //console.log(days);
//        }

    }
    

    return (
        <div >
          
            <Calendar
                className="calendar"
                onChange={onChange} 
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