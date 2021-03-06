import {withRouter} from 'react-router-dom'
import BoxDescription from '../../component/BoxDescription'
import icon_plan from '../../image/yonal_icon_plan.png'
import {useMediaQuery} from 'react-responsive'



const VoteFinished = ({location,history}) => {
    const nickname = location.nickname;
    const projectTitle = location.projectTitle;
    const isMobile = useMediaQuery ({
        query : "(max-width : 500px)"
    })
    const nicknameGuide = isMobile? 'mNicknameGuide' : 'nicknameGuide';

    console.log("projectTitle: ", projectTitle);
    console.log("nickname: ", nickname);
    return (
        <div>
            <BoxDescription icon={icon_plan} title={projectTitle}/>
            <h3 className={nicknameGuide}>{nickname}님,</h3>
            <h3 className='voteFinishGuide'>투표를 제출했습니다 😊</h3>
        </div>
    );
}

export default withRouter(VoteFinished);