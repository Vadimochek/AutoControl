import React from "react";

export const Profile = ({ info }) => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card">
                    <div className="card-image">
                        <img src="https://a.d-cd.net/YoAAAgLgneA-960.jpg" />
                        <span className="card-title yellow-text"> <b>Личный профиль пользователя </b></span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="email" type="text" className="validate" value={info.email}/>
                                        <label className="active" for="email" >Изменить Email</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="pass" type="text" className="validate"  />
                                        <label className="active" for="pass">Изменить пароль</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light right" type="submit" name="action"><i class="material-icons">Изменить</i>
  </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}