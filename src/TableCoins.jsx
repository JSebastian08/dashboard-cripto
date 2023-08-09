import React from "react";
import './TableCoins.css'
import CoinRow from './CoinRow'

export default function TableCoins({coins}){
    return(
        <table className='table_coins'>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Moneda</td>
                    <td>Precio</td>
                    <td>24h</td>
                    <td>Vol. total</td>
                    <td>Cap. mercado</td>
                    <td>Últimos 7 días</td>
                </tr>
            </thead>
            <tbody>
                <CoinRow />
            </tbody>
        </table>
    )
}