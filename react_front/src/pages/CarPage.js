import React, { useContext, useEffect, useState, useCallback } from "react"
import { Loader } from "../components/Loader"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/htttp.hook"
import { Car } from "../components/Car"
import { useParams } from 'react-router-dom'
import { Geo } from "../components/Geo"
import { Inside } from "../components/Inside"


export const CarPage = () => {
    const [auto, setAuto] = useState([])
    const [geo, setGeo] = useState([])
    const [inside, setInside] = useState([])
    const { token } = useContext(AuthContext)
    const carId = useParams().id
    const { request, loading } = useHttp()

    const getAuto = useCallback(async () => {
        try {
            const fetched = await request(`/api/autos/${carId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setAuto(fetched)
            console.log(fetched)
        } catch (e) {

        }
    }, [token, carId, request])

    const getGeo = useCallback(async () => {
        try {
            const fetched = await request(`/api/info/geo/${carId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setGeo(fetched)
        } catch (e) {

        }
    }, [token, carId, request])

    const getInside = useCallback(async () => {
        try {
            const fetched = await request(`/api/info/inside/${carId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setInside(fetched)
        } catch (e) {

        }
    }, [token,carId, request])

    useEffect(() => {
        getAuto()
        getGeo()
        getInside()
    }, [getAuto, getGeo, getInside])

    if (loading) {
        return <Loader />
    }

    return (
        <div className="row center">
            <div className="col s12 flow-text" style={{marginTop: '2%'}}>
                {!loading && <Car car={auto} />}
            </div>
            <div className="col s5 lime lighten-3" style={{borderRadius: '5%'}}>
                {!loading && <Geo geo={geo} />}
            </div>
            <div className="col s5 offset-s2 lime lighten-3" style={{borderRadius: '1%'}}>
                {!loading && <Inside inside={inside} />}
            </div>
        </div>
    )
}