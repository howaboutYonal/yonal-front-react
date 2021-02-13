import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import DatePickers from '../component/DatePicker';
import TextField from '@material-ui/core/TextField';

const CreateProject = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <TextField id="standard-basic" label="프로젝트 이름" value={value} onChange={(e) => setValue(e.target.value)} />

            <br></br>
            <div className='period'>
                start date <DatePickers/>
                end date <DatePickers/> 
            </div>
            <Link to={{pathname: './copylink', value: value}}>
              <button className = 'indexBtn' >확인</button>
            </Link>            
        </div>
    );
}

export default CreateProject;