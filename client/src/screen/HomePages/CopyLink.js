import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {useMediaQuery} from 'react-responsive'

const CopyLink = ({location}) => {

    const url = location.Link;
    const isMobile = useMediaQuery ({
        query : "(max-width : 500px)"
    })
    const btn = isMobile? 'mBtn' : 'btn';

    return (
        <div>
            <div className='urlText'>{url}</div>
            <CopyToClipboard text={url}>
                <button className={btn} onClick={() => alert("링크가 복사되었습니다.")}>링크 복사</button>
            </CopyToClipboard>
        </div>
    );
}

export default CopyLink;