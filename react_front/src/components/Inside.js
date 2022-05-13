import React from "react";

export const Inside = ({ inside }) => {
    if (!inside.length) {
        return <p className="center">Ещё нет данных по автомобилю</p>
    }
    return (
        <div className="center">
            <p>Время обновления данных: {inside.time}</p>
            <p>Влажность: {inside.humidity},  Масло: {inside.oil}, Бензин: {inside.benzine} </p>
            <p>Температура: {inside.temperature},  Заряд аккумулятора: {inside.chargeAcc}</p>
        </div>
    )
}