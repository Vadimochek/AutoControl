import React, {useContext, useEffect, useState, useCallback} from "react";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/htttp.hook";
import {AutosList} from "../components/AutosList";

export const AutosPage = () => {
    const [autos, setAutos] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchAutos = useCallback(async () => {
        try{
            const fetched = await request('/api/autos', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setAutos(fetched);
        }catch (e){

        }
    }, [token, request])

    useEffect(() => {
        fetchAutos()
    }, [fetchAutos])

    if(loading){
        return <Loader />
    }
    return (
        <div>
            {!loading && <AutosList autos={autos} />}
        </div>
    )
}