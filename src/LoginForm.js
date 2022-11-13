import './App.css';
import './api.js';
import { useState } from 'react';
import { api, account } from './api.js';
import {useNavigate} from 'react-router-dom'
function LoginForm() {
    const navigation = useNavigate()
    async function Login(e){
        e.preventDefault();
        account.createEmailSession(
            e.target.user.value,
            e.target.pass.value
        ).then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        navigation("/game")

    }

    return (
    <div>
        <form onSubmit={Login}>
            <label>user</label>
            <input type="text" id="user"/>
            <label>Password</label>
            <input type="text" id = "pass"/>
            <button type="submit">Login</button>
        </form>
        
    </div>
  );
}
export default LoginForm
