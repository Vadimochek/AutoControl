import React from "react";

export const Geo = ({ geo }) => {
    if (!geo.length) {
        return <p className="center">Ещё нет данных по автомобилю</p>
    }
    return (
        <div className="center">
            {geo.map((elem) => {
                    return (
                        <p> {elem.time}, {elem.coordinates}</p>
                    )})}
        </div>
    )
}