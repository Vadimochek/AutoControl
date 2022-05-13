import React, { useContext, useEffect, useState, useCallback } from "react"
import { Loader } from "../components/Loader"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/htttp.hook"
import { Car } from "../components/Car"
import { useParams } from 'react-router-dom'
import Geo from "../components/Geo"
import Inside from "../components/Inside"


export const CarPage = () => {
    const [car, setCar] = useState([])
    const [geo, setGeo] = useState([])
    const [inside, setInside] = useState([])
    const { token } = useContext(AuthContext)
    const carId = useParams().id
    const { request, loading } = useHttp()

    const getCar = useCallback(async () => {
        try {
            const fetched = await request(`/api/autos/${carId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setCar(fetched)
        } catch (e) {

        }
    }, [token, carId, request])

    const getGeo = useCallback(async () => {
        try {
            const fetched = await request(`/api/info/geo`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setGeo(fetched)
        } catch (e) {

        }
    }, [token, request])

    const getInside = useCallback(async () => {
        try {
            const fetched = await request(`/api/info/inside`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setInside(fetched)
        } catch (e) {

        }
    }, [token, request])

    useEffect(() => {
        getCar()
        getGeo()
        getInside()
    }, [getCar, getGeo, getInside])

    if (loading) {
        return <Loader />
    }
    return (
        <div className="row">
            <div className="col s12">
                {!loading && <Car car={car} />}
            </div>
            <div class="col s6">
                {!loading && <Geo geo={geo} />}
            </div>
            <div class="col s6">
                {!loading && <Inside inside={inside} />}
            </div>
        </div>
    )
}