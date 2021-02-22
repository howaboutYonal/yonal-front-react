import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import leadingZeros from 'leadingzero'

// projectUser테이블에 관계추가하는 api생성 후 추가할 예정(isManager=1)

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: "center",
      flexWrap: 'wrap',
    },
    textField: {
      width: 300,
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

function getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
}

const CreateProject = () => {
    
    const classes = useStyles();
    const [name, setName] = useState(null);
    const [startDate, setStartDate] = useState(getTimeStamp());
    const [endDate, setEndDate] = useState(getTimeStamp());
    const [inviteLink, ] = useState('http://localhost:3000/invite/'+getUUID());

    const fetchApi = async() => {
        const res = await axios.post('http://localhost:5000/v1/create/project', {
            name:name,
            startDate:startDate,
            endDate:endDate,
            inviteLink:inviteLink
        });
        console.log(res.data);
    };
    
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
            <Link to={{pathname: './copylink', value: inviteLink}}>
                <button className = 'indexBtn' onClick={fetchApi} disabled={false}>확인</button>
            </Link>
         
        </div>
    );
}

export default CreateProject;