import React, { useState } from 'react';
import CalendarComponent from './Deoksoo/CalendarComponent'
import ButtonComponent from './Deoksoo/ButtonComponent'

const DeoksooPage = () => {
    return (
        <div>
            <div className='logoText'>가능한 날짜</div>
            <CalendarComponent/>
            <ButtonComponent/>
        </div>
    );
}

export default DeoksooPage;