import React from "react";
import { NavLink } from "react-router-dom";

export const AutosList = ({ autos }) => {
    if (!autos.length) {
        return <p className="center">Нет привязанных автомобилей</p>
    }
    return (

        <table className="hoverable centered" style={{marginTop: '2rem', borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden', fontSize: '20px'}}>
            <thead className="grey lighten-4">
                <tr>
                    <th>№</th>
                    <th>Номер автомобиля</th>
                    <th>Марка</th>
                    <th>Модель</th>
                    <th>Посмотреть данные автомобиля</th>
                </tr>
            </thead>

            <tbody className="amber lighten-4">
                {autos.map((auto,index) => {
                    return (
                        <tr key={auto._id}>
                            <td>{index + 1}</td>
                            <td>{auto.number}</td>
                            <td>{auto.model}</td>
                            <td>{auto.kind}</td>
                            <td>
                                <NavLink to={`/autos/${auto._id}`}>Открыть данные</NavLink>
                            </td>
                        </tr>
                    )})}
            </tbody>
        </table>
    )
}