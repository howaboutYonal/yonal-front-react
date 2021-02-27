import React from 'react'
import {Link} from 'react-router-dom'

const ProjectButton = (props) => {
    
    const myProjects = props.value;
    console.log(myProjects)

    return (
        
        <div>
            <Link to={{pathname:'./totalcal', projectId:0}}>
                <button className = 'btn' >프로젝트 이름</button>
            </Link>
            {/* <Link to={{pathname:'./totalcal', projectId:myProjects[0].id}}>
                <button className = 'btn' >{myProjects[0].name}</button>
            </Link> */}
        </div>
    );
}

export default ProjectButton;