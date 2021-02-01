import React from 'react';
import logo from '../../images/logo.png';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

export default function Login() {
  const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div className="login__container">
            <div className="login__card">
                <img src={logo} alt="slack logo"/>
                <h1>Eric's Slack Clone</h1>
                <Button variant="contained" color="primary" onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}
