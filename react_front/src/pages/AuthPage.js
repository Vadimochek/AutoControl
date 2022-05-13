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
        <div className="row">
            <div className="col s6 offset-s3 center" style={{marginTop: '10%'}}>
                <div className="card cyan darken-4 z-depth-1 hoverable">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div className="input-field">
                            <input 
                            id="email" 
                            type="text" 
                            value={form.email}
                            name="email"
                            onChange={changeHandler} />
                
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input 
                            id="password" 
                            type="password" 
                            value={form.password}
                            name="password"
                            onChange={changeHandler}
                            />
                            <label for="password">Пароль</label>
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
                        className="btn grey lighten-1 black-text"
                        onClick={registerHandler}
                        disabled={loading}>Регистрация</button>

                    </div>
                </div>
            </div>
        </div>

    )
}