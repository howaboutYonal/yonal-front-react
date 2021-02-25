import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Main = ({location}) => {
    const myName = location.name;
    const myEmail = location.email;
    const myImg = location.image;
    const myProjects = [];
    
    function myButton(arr) {
        arr.forEach(function(item){
            var id = item['projectId'];
            var name = item['Projects.name'];
            console.log(id, name);
        })
    }

    useEffect(async () =>{
        await axios.post('http://localhost:5000/v1/get/myProject', {
            email: myEmail
        }).then(function(res){
            const arr = res.data.projectData.slice();
            arr.forEach(function(item){
                myProjects.push(item);
            })
            console.log(myProjects);
            myButton(myProjects)
        });
    },[])
    
    return (
        <div>
            <div><img className='profile' src={myImg}/></div>
            <div className='logoText'>내 프로젝트</div>
            <div>
                {myProjects}
            </div>
            <Link to='./totalcal'>
                <button className = 'indexBtn' projectId="1">아직미완</button>
            </Link>
            <Link to={{pathname: './create', email: myEmail}}>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
        </div>

    );
}

export default Main;