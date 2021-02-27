import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import ProjectButton from './ProjectButton'

const Main = ({location}) => {
    const myName = location.name;
    const myEmail = location.email;
    const myImg = location.image;
    const myProjects = [];
    
    function setMyProjects(arr) {
        arr.forEach(function(item){
            var id = item['projectId'];
            var name = item['Projects.name'];
            myProjects.push({id, name});
        })
    }

    useEffect(async () =>{
        await axios.post('http://localhost:5000/v1/get/myProject', {
            email: myEmail
        }).then(function(res){
            const arr = res.data.projectData.slice();
            setMyProjects(arr);
            console.log(myProjects);
        });
    },[])
    
    return (
        <div>
            <div><img className='profile' src={myImg}/></div>
            <Link to={{pathname: './create', email: myEmail}}>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
            <div className='logoText'>내 프로젝트</div>
            <ProjectButton value={myProjects}/>
        </div>

    );
}

export default Main;