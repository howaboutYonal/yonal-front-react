import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "88721696570-626294ccdp8h1vthmb7sce60mep2i15q.apps.googleusercontent.com";
// 클라이언트 보안 비밀번호 Z4L3SvyZM_xL7YyhLN4sufuB

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        alert(response);
        // onSocial은 구글로그인이 성공하게 되면 받은 데이터를 이용해 웹사이트 서버와 연결하는 함수
        // await onSocial({
        //     socialId : googleId,
        //     socialType : 'google',
        //     email,
        //     nickname : name
        // });
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}