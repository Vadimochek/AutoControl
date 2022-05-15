import React, { useContext, useEffect } from "react";
import { useHttp } from "../hooks/htttp.hook";
import { useState } from "react";
import {useMessage} from '../hooks/message.hook';
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] =useState({
        email: '',password: ''
    })

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    
    const changeHandler = event => {
        setForm( {...form, [event.target.name]: event.target.value})
    }
     
    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message);
        }catch (e)
        {
        }
    }
    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId);
        }catch (e)
        {
        }
    }

    return (
        <div className="row" >
            <div className="col s6 offset-s3 center" style={{marginTop: '10%'}}>
                <div className="card grey lighten-3 z-depth-1 hoverable" style={{borderRadius: '3%'}}>
                    <div className="card-content ">
                        <span className="card-title black-text" style={{fontSize: '30px'}}><b>Авторизация</b></span>
                        <div className="input-field black-text">
                            <input 
                            id="email" 
                            type="text" 
                            value={form.email}
                            name="email"
                            style={{ fontSize: '20px' }}
                            onChange={changeHandler} />
                
                            <label for="email" style={{ fontSize: '20px', color: 'black' }}>Email</label>
                        </div>
                        <div className="input-field black-text">
                            <input 
                            id="password" 
                            type="password" 
                            value={form.password}
                            name="password"
                            onChange={changeHandler}
                            />
                            <label for="password" style={{ fontSize: '20px', color: 'black' }}>Пароль</label>
                        </div>
                    </div>

                    <div className="card-action">
                        <button 
                        className="btn yellow darken-4" 
                        style={{ marginRight: 10 }}
                        disabled={loading}
                        onClick={loginHandler}
                        >Войти</button>
    
                        <button 
                        className="btn  light-green accent-3 black-text"
                        onClick={registerHandler}
                        disabled={loading}>Регистрация</button>

                    </div>
                </div>
            </div>
        </div>

    )
}