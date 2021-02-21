import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const clientId = "88721696570-626294ccdp8h1vthmb7sce60mep2i15q.apps.googleusercontent.com";
// 클라이언트 보안 비밀번호 Z4L3SvyZM_xL7YyhLN4sufuB

export default function GoogleButton(){
    const onSuccess = async(response) => {
    	console.log(response);
        
        const name = response.getBasicProfile().getName();
        const email = response.getBasicProfile().getEmail();
        const res = await axios.post('http://localhost:5000/v1/register/google-login', {
            user_name:name,
            user_email:email,
        });
        console.log(res);
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