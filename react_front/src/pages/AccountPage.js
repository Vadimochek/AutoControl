import React, {useContext, useEffect, useState, useCallback} from "react";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/htttp.hook";
import {Profile} from "../components/Profile";

export const AccountPage = () => {
    const [account, setAccount] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchAccount = useCallback(async () => {
        try{
            const fetched = await request('/api/profile', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched);
            setAccount(fetched);
        }catch (e){

        }
    }, [token, request])

    useEffect(() => {
        fetchAccount()
    }, [fetchAccount])

    if(loading){
        return <Loader />
    }
    return (
        <div>
            {!loading && <Profile info={account} />}
        </div>
    )
}