import React from "react";

export const Car = ({ car }) => {
    return (
        <div>
             <blockquote>
            <p>Машина <b>{car.model}</b>, марки  <b>{car.kind}</b>. Номер: <b>{car.number}.</b></p>
            </blockquote>
        </div>
    )
}