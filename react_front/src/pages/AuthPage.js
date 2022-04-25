import React from "react";
import { useHttp } from "../hooks/htttp.hook";
import { useState } from "react";

export const AuthPage = () => {
    const {loading, request} = useHttp();
    const [form, setForm] =useState({
        email: '',password: ''
    })

    const changeHandler = event => {
        setForm( {...form, [event.target.name]: event.target.value})
    }
     
    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('DAta', data);
        }catch (e)
        {

        }
    }

    return (
        <div class="row">
            <div class="col s6 offset-s3">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Авторизация</span>
                        <div className="input-field">
                            <input 
                            id="email" 
                            type="text" 
                            placeholder="Введите email"
                            name="email"
                            onChange={changeHandler} />
                           
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input 
                            id="password" 
                            type="password" 
                            placeholder="Введите пароль" 
                            name="password"
                            onChange={changeHandler}
                            />
                            <label for="password">Пароль</label>
                        </div>
                    </div>

                    <div class="card-action">
                        <button 
                        className="btn yellow darken-4" 
                        style={{ marginRight: 10 }}
                        onClick={registerHandler}
                        disabled={loading}>Войти</button>
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