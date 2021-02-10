import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CalendarComponent from './Deoksoo/CalendarComponent';
import Total_Calendar from './Deoksoo/Total_Calendar';

const DeoksooPage = () => {
    return (

        <BrowserRouter>
            <Route path="/deoksoo" component={CalendarComponent}/>
            <Route path="/totalcal" component={Total_Calendar}/>
        </BrowserRouter>

    );
}

export default DeoksooPage;