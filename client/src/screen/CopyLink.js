import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyLink = ({location}) => {
    const url = location.value;
    return (
        <div>
            <div className='logoText'>{url}</div>
            <CopyToClipboard text={url}>
                <button>링크 복사</button>
            </CopyToClipboard>
        </div>
    );
}

export default CopyLink;