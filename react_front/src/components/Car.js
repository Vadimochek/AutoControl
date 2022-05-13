import React from "react";

export const Car = ({ car }) => {
    return (
        <div className="center">
            <p>Машина {car.model}, марки {car.kind}. Номер: {car.number}</p>
        </div>
    )
}