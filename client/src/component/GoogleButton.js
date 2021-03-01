import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const clientId = "88721696570-626294ccdp8h1vthmb7sce60mep2i15q.apps.googleusercontent.com";
// 클라이언트 보안 비밀번호 Z4L3SvyZM_xL7YyhLN4sufuB

const GoogleButton = ({sendData , history}) => {

    const onSuccess = async(response) => {

        await axios.post('http://localhost:5000/v1/register/google-login', {
            user_name:response.getBasicProfile().getName(),
            user_email:response.getBasicProfile().getEmail(),
            user_image:response.getBasicProfile().getImageUrl()
        });
        sendData(response.getBasicProfile().getName(), response.getBasicProfile().getEmail(), response.getBasicProfile().getImageUrl(), true);
        history.push({pathname: "../home", name:response.getBasicProfile().getName(), email:response.getBasicProfile().getEmail(), image:response.getBasicProfile().getImageUrl()});
    }

    const onFailure = (error) => {
        console.log(error);
        sendData(null, null, null, false);
        history.push({pathname: "./homepage"});
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    )
}

export default withRouter(GoogleButton);