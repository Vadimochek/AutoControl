import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';



export const Geo = ({ geo }) => {
    if (!geo.length) {

        return (<div>
            <h5><b>Данные местоположения</b></h5>
            <p>Ещё нет данных по автомобилю</p>
           
            <YMaps>
                <Map
                    defaultState={{ center: [55.75, 37.57], zoom: 10, }}
                    width='100%'
                    // style={{borderRadius: '10px'}}
                    >
                    <Placemark
                    geometry={[55.684758, 37.738521]}
                    />
                
              </Map>
            </YMaps>
        </div>)
    }
    return (
        <div>
            <h5><b>Данные местоположения</b></h5>


            {geo.map((elem) => {
                return (
                    <p> {elem.time}, {elem.coordinates}</p>
                )
            })}
        </div>
    )
}