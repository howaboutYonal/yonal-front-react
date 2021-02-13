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
      width: 200,
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
            <TextField id="standard-basic" label="프로젝트 이름" value={name} onChange={(e) => setName(e.target.value)} />

            <br></br>
            <div className='period'>
                start date
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        type="date"
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
                        id="date"
                        type="date"
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
              <button className = 'indexBtn' >확인</button>
            </Link>            
        </div>
    );
}

export default CreateProject;