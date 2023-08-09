import React from 'react';
import './CoinRow.css'
import { deleteDec, colorDec, numberF } from './App';

export default function CoinRow({coin, index}) {
    return(
        <tr>
            <td>{index}</td>
            <td>
                <div className='coin_image_container'>
                    <img src={coin.image} alt={coin.name} title={coin.name}/>
                </div>
            </td>
            <td>{numberF.format(coin.current_price)} US$</td>
            <td className={colorDec(coin.market_cap_change_percentage_24h)}>{deleteDec(coin.market_cap_change_percentage_24h, 2)}</td>
            <td>{numberF.format(coin.total_volume)}USD</td>
            <td>{numberF.format(coin.market_cap)}US$</td>
            <td>Grafico</td>
        </tr>
    )
}