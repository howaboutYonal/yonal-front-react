import React, {Component} from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard'

class CopyLink extends Component {
    bring(){
        alert("링크가 클립보드에 복사되었습니다.");   
    }
    render(){
        const url = window.location.href; // url 복사

        // <CopyToClipboard text={url}>
        //   <button>Copy URL to the clipboard</button>
        // </CopyToClipboard>
        return <button className = "btn" onClick={this.bring}>링크 복사하기</button>
    }
}


export {CopyLink};