import React from 'react'
import {Link} from 'react-router-dom'

const ProjectButton = (props) => {
    
    // temp data  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ내꺼에서 받아옴..
    const myProjects = [
        {id: 1, name: "yonal 설연휴 회의 일정"},
        {id: 413153, name: "프로젝트 생성 api적용 테스트!"},
        {id: 413160, name: "projectUser test"},
        {id: 413161, name: "휴.."},
        {id: 413162, name: "어렵네"}
    ];
    // const myProjects = props.value;

    const projectList = myProjects.map(item => 
        <div>
            <Link to={{pathname:'./totalcal', projectId:item.id}}>
                <button>{item.name}</button>
            </Link>
        </div>
    );

    return (
        <div>
            {projectList}
        </div>
    );
}

export default ProjectButton;