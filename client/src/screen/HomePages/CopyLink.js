import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyLink = ({location}) => {
    const url = location.inviteLink;
    return (
        <div>
            <div className='urlText'>{url}</div>
            <CopyToClipboard text={url}>
                <button className='btn' onClick={() => alert("링크가 복사되었습니다.")}>링크 복사</button>
            </CopyToClipboard>
        </div>
    );
}

export default CopyLink;