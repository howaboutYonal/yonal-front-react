import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import axios from 'axios'

const LoginUserMain = props => {
    console.log("lo0cation", props);

    const myName = props.name;
    const myEmail = props.email;
    const myImg = props.image;
    const [myProjects, setMyProjects] = useState([]);
    const isMobile = useMediaQuery ({
        query : "(max-width : 500px)"
      })
    const projectStyle = isMobile? 'mProjectBox' : 'projectBox';
    const btn = isMobile? 'mBtn' : 'btn';
    const logoText = isMobile? 'logoText' : 'pcLogoText';

    const projectList = myProjects.map(item => 
        isMobile?
            <div>
                <Link to={{pathname:'./totalcal', projectId:item.id, projectTitle:item.name}}>
                    <button className={projectStyle}>{item.name}</button>
                </Link>
            </div>
        :
        <div className='App'>
                <Link to={{pathname:'./totalcal', projectId:item.id, projectTitle:item.name}}>
                    <button className={projectStyle}>{item.name}</button>
                </Link>
            </div>
    );




      
    function copyData(arr) {
        const temp = [];
        arr.forEach(function(item){
            var id = item['projectId'];
            var name = item['Projects.name'];
            temp.push({id, name});
        })
        setMyProjects(temp);
    }

    useEffect(async () =>{
        await fetchApi().then(res => copyData(res.data.projectData));
    },[])
    
    async function fetchApi(){
        return axios.post('http://localhost:5000/v1/get/myProject', {
            email: myEmail
        })
    }   

    return (
        isMobile?
        <div>
            <div><img className='profile' src={myImg}/></div>
            <Link to={{pathname: './create', email: myEmail}}>
                <button className = {btn}>새 프로젝트 만들기</button>
            </Link>
            
            <div className={logoText}>내 프로젝트</div>
            {projectList}
        </div>
        :
        <div>
            <div><img className='profile' src={myImg}/></div>
            <Link to={{pathname: './create', email: myEmail}}>
                <button className = {btn}>새 프로젝트 만들기</button>
            </Link>
            
            <div className='logoText'>내 프로젝트</div>
            {projectList}
        </div>
        
        
    );
}

export default LoginUserMain;