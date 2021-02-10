import React, { useState } from 'react';
import RadioButton from '../../component/RadioButton';
import {CopyLink} from "../../component/CopyLink";
import DatePickers from '../../component/DatePicker';
import yonal_logo from '../yonal_logo.png'


const CreateProject = () => {
    return (
        <div>
            <div className='logoText'>프로젝트 만들기</div>
            <img className='Applogo' src={yonal_logo}/>
            <div className='anonymity'>
                <RadioButton value="radioA" inputProps={{ 'aria-label': 'Radio A' }}/>
            </div>
            <br></br>
            <div className='period'>
                start date <DatePickers/>
                end date <DatePickers/> 
            </div>
            {/* 수정 권한  */}
            <div>
                <CopyLink/>
            </div>
        </div>
    );
}

export default CreateProject;