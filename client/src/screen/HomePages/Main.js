import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import ProjectButton from '../../component/ProjectButton'

const Main = ({location}) => {
    const myName = location.name;
    const myEmail = location.email;
    const myImg = location.image;
    const myProjects = [];
    const [flag, setFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    function setMyProjects(arr) {
        arr.forEach(function(item){
            var id = item['projectId'];
            var name = item['Projects.name'];
            myProjects.push({id, name});
        })
    }

    useEffect(async () =>{
        if(flag) setFlag(false);
        await fetchApi().then(res => setMyProjects(res.data.projectData)).then(setIsLoading(true));
        console.log(myProjects);
    },[])

    useEffect(()=>{
        if(isLoading) setFlag(true);
    },[isLoading]);
    
    async function fetchApi(){
        return axios.post('http://localhost:5000/v1/get/myProject', {
            email: myEmail
        })
    }   

    return (
        <div>
            <div><img className='profile' src={myImg}/></div>
            <Link to={{pathname: './create', email: myEmail}}>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
            <div className='logoText'>내 프로젝트</div>
            {isLoading ?
            <ProjectButton value={myProjects}/> : "loading"
            }
        </div>
    );
}

export default Main;