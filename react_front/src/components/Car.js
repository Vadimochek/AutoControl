import React from "react";

export const Car = ({ car }) => {
    return (
        <div>
            <p style={{color: "snow"}}>Автомобиль <b>{car.model} {car.kind}</b>. Регистрационный номер: <b>{car.number}</b>.</p>
        </div>
    )
}