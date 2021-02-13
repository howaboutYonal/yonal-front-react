import React, { useState } from 'react';
import {CopyLink} from "../component/CopyLink";
import DatePickers from '../component/DatePicker';
import TextField from '@material-ui/core/TextField';

const CreateProject = () => {
    return (
        <div>
            <TextField id="standard-basic" label="프로젝트 이름" />

            <br></br>
            <div className='period'>
                start date <DatePickers/>
                end date <DatePickers/> 
                <CopyLink/>
            </div>
        </div>
    );
}

export default CreateProject;