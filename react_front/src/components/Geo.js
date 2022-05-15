import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

// const test = [{time: '2021-10-12', coord:'55.66677 37.5999'}, {time: '2021-10-11', coord: '55.7 37.57'}, {time: '2021-10-10', coord: '55.888 37.60'}]

export const Geo = ({ geo }) => {
    if (!geo.length) {

        return (<div>
            <h5><b>Данные местоположения</b></h5>
            <p style={{fontSize: '20px'}}>Ещё нет данных по автомобилю</p>
        </div>)
    }
    return (
        <div style={{width: "100%"}}>
            <h5 style={{paddingBottom: "2%"}}><b>Данные местоположения</b></h5>
            <YMaps>
                <Map
                    defaultState={{ center: [geo[0].coordinates.split(' ')[0], geo[0].coordinates.split(' ')[1]], zoom: 9 }}
                    width='100%'
                    >
                        {
                            geo.map((elem, index) => {
                                const place = elem.coordinates.split(' ')
                                let date = elem.time.slice(0, 10)
                                let time = elem.time.slice(11, 16)
                                let color= '#' + Math.floor(Math.random()*16777215).toString(16)
                                return (
                                    <Placemark key={index}
                                    geometry={[place[0], place[1]]}
                                    options={{iconColor: color, preset: 'islands#icon' }}
                                    properties={{
                                        iconContent: geo.length-index,
                                        hintContent: `${date} ${time}`
                                    }}
                                    modules={
                                        ['geoObject.addon.hint']
                                    }
                                    />
                                )

                            })
                        }
              </Map>
            </YMaps>
            <p style={{fontSize: '20px'}}><i>Точки маршрута расположены от самой ранней до наиболее поздней.</i></p>
        </div>
    )
}