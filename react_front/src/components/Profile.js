import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {useMessage} from '../hooks/message.hook';
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/htttp.hook";

export const Profile = ({ info }) => {
    const {token} = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const updateHandler = async event => {
        try {
            event.preventDefault()
            const data = await request('/api/profile/update', 'POST', {...form}, {
                Authorization: `Bearer ${token}`
            })
            message(data.message)
        } catch (e) {
        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src="https://a.d-cd.net/YoAAAgLgneA-960.jpg" />
                        <span className="card-title yellow-text"> <b>Личный профиль пользователя</b></span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="email" type="text" placeholder={info.email} value={form.email} name="email"  onChange={changeHandler} />
                                        <label className="active" for="email" >Изменить Email</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="password" type="password"  name="password" value={form.password} onChange={changeHandler} />
                                        <label className="active" for="password">Изменить пароль</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light right" type="submit" name="action" disabled={loading} onClick={updateHandler}><i class="material-icons">Изменить</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}