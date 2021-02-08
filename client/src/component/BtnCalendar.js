import React, {Component} from 'react';

class BtnCalendar extends Component {
    bring(){
        alert("bring calendar");   
    }
    render(){
        return <button className = "btn" onClick={this.bring}>구글 캘린더 가져오기</button>
    }
}

class BtnNoCalendar extends React.Component {
    bring(){
        alert("no calendar");   
    }
    render(){
        return <button className = "btn" onClick={this.bring}>직접 입력하기</button>;
    }
}

export {BtnCalendar, BtnNoCalendar};