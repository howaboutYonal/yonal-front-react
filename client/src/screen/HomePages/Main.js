import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Main = ({location}) => {
    const myName = location.name;
    const myEmail = location.email;
    const myImg = location.image;
    const [myProjects, setMyProjects] = useState([]);
    const projectList = myProjects.map(item => 
        <div>
            <Link to={{pathname:'./totalcal', projectId:item.id}}>
                <button>{item.name}</button>
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
        <div>
            <div><img className='profile' src={myImg}/></div>
            <Link to={{pathname: './create', email: myEmail}}>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
            <div className='logoText'>내 프로젝트</div>
            {projectList}
        </div>
    );
}

export default Main;