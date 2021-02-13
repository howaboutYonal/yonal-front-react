import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import leadingZeros from 'leadingzero'

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: "center",
      flexWrap: 'wrap',
    },
    textField: {
      width: 400,
    },
  }));
  
function getTimeStamp() {

    var d = new Date();
    var s =
        leadingZeros(d.getFullYear(), 2) + '-' +
        leadingZeros(d.getMonth() + 1, 2) + '-' +
        leadingZeros(d.getDate(), 2);

    return s;
}

const CreateProject = () => {
    
    const classes = useStyles();
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(getTimeStamp());
    const [endDate, setEndDate] = useState(getTimeStamp());

    return (
        <div>
            <TextField 
                id="name"
                label="프로젝트 이름"
                className={classes.textField}
                error={name === "" ? true : false}
                helperText="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <br></br>
            <div className='period'>
                start date
                <form className={classes.container} noValidate>
                    <TextField
                        id="startdate"
                        type="date"
                        error={startDate < getTimeStamp() ? true : false}
                        helperText="현재 날짜보다 전날을 선택할 수 없습니다"
                        className={classes.textField}
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                end date
                <form className={classes.container} noValidate>
                    <TextField
                        id="enddate"
                        type="date"
                        error={startDate > endDate ? true : false}
                        helperText="시작 날짜 이후의 날짜를 선택하세요"
                        className={classes.textField}
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                
            </div>
            
            <Link to={{pathname: './copylink', value: name + startDate + endDate}}>
                <button className = 'indexBtn' disabled={false}>확인</button>
            </Link>
         
        </div>
    );
}

export default CreateProject;