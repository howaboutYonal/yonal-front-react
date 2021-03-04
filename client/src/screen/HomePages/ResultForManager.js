import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import {Link} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import 'react-calendar/dist/Calendar.css';
import '../calendar.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles'
import yonal_logo from '../../image/yonal_logo.png'
import icon_plan from '../../image/yonal_icon_plan.png'
import BoxDescription from '../../component/BoxDescription'



/*  참여한 모든 유저의 date데이터를 api로 불러온다.
    이렇게 불러온 데이터를 종합하여 캘린더에 출력한다. */

// props를 통해 projectID를 전달받은 후 해당 프로젝트 반환
let useStyles = makeStyles({ foo: props => ({backgroundColor: props.backgroundColor, }),}); 
const rgbHex = require('rgb-hex');

function getUUID() { // UUID v4 generator in JavaScript (RFC4122 compliant)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
}

const ResultForManager = ({location}) => {
    let classes0 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0)});
    let classes1 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.1)});
    let classes2 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.2)});
    let classes3 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.3)});
    let classes4 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.4)});
    let classes5 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.5)});
    let classes6 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.6)});
    let classes7 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.7)});
    let classes8 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.8)});
    let classes9 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 0.9)});
    let classes10 = useStyles({ backgroundColor: '#'+rgbHex(40,75,114, 1)});

    const select = [ classes0, classes1, classes2, classes3, classes4, classes5, classes6, classes7, classes8, classes9, classes10 ]
    const [weight, setWeight] = useState();

    const [value, ] = useState(new Date());
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [projectId,] =useState(location.projectId);
    const [projectTitle,] =useState(location.projectTitle);

    const [shareLink,] = useState('http://localhost:3000/share/'+getUUID());
    const isMobile = useMediaQuery ({
        query : "(max-width : 500px)"
    })
    const btn = isMobile? 'mBtn' : 'btn';
    const logoText = isMobile? 'logoText' : 'pcLogoText';

    useEffect(async () =>{
        if(flag) setFlag(false);
        setIsLoading(false);
        await fetchApi().then(res => setApiData(res)).then(setIsLoading(true));
    },[]);
    useEffect(()=>{
        if(isLoading) setFlag(true);
    },[isLoading]);

    function parse(str) {
        var y = str.substr(0,4);
        var m = str.substr(4,2);
        var d = str.substr(6,2); 
        return  new Date(y,m-1,d);
    };
    

    function jointpars(apiData){
        var voteData = JSON.parse(apiData.votedata);

        var totaljoint = [];
        for(var j=0; j<voteData.length;j++){
            var joint = [];
            for( var i= 0;i<voteData[j].length;i++){
                joint = [
                    ...joint,
                    {
                        votedata:voteData[j][i].date
                    }
                ]
            }
            totaljoint=[
                ...totaljoint,
                {
                    votedata:joint
                }
            ]
        }
        console.log(totaljoint);
        return totaljoint;
    }

    async function fetchApi(){
        return axios.post('http://localhost:5000/v1/get/project-result', {projectId:projectId}).then(function (res) {
            console.log(res);
            setWeight((select.length/res.data.count));
            return jointpars(res.data);
        });
    }
    async function fetchApi2(){
        var url = 'http://localhost:5000/v1/save/shareLink';
        return axios.post(url, {projectId:location.projectId, shareLink:shareLink}).then(function (res) {
            return res.data;
        })
    }


    function tileClassName(params){
        if(!(apiData.length===0)){
            var count = 0;
            apiData.map(i=>{ count += comparFerUser(params,i) ? 1 : 0; });
            return assignColor(count);
        }
    }

    function assignColor(count){
        count = weight*count > select.length-1 ? select.length-1 : weight*count;
        try { return `${select[Math.round(count)].foo}`;
        } catch (error) { console.log(weight,Math.round(count),'err'); }
    }

    function comparFerUser(params,idx){
        if(params.view === 'month' && idx)
            if(idx.votedata.some(x => parse(x.votedata.replaceAll('-','')).valueOf() === params.date.valueOf()))
                return true;
    }


    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    const userImage = localStorage.getItem("userImage");

    return (
        <div>
            <BoxDescription icon={icon_plan} title={projectTitle}/>
            
            <div className='App'>
                <div className={logoText}>우리 모두 일정 맞추기</div>
                <img className='Applogo' src={yonal_logo}/>
                
                <h4 className='calendarTitle'>종합된 날짜</h4>

                <div className = 'marginTop'>
                {isLoading ?
                <Calendar className="calendar"
                    value = {value}
                    minDate = {value}
                    tileClassName = {flag?tileClassName:"" } 
                />
                : "Loading"
                }
                </div>

                <Link to={{pathname: './copylink', value: shareLink}}>
                    <button className = {btn} onClick={fetchApi2} disabled={false}>결과 공유하기</button>
                </Link>
            </div>
        </div>
    );

}

export default ResultForManager;