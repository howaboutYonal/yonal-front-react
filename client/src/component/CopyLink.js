import React, {Component} from 'react';

class CopyLink extends Component {
    bring(){
        alert("링크가 클립보드에 복사되었습니다.");   
    }
    render(){
        return <button className = "btn" onClick={this.bring}>링크 복사하기</button>
    }
}


export {CopyLink};