import '.CardPrincipal.css'
import {FaPlay} from "react-icons/fa";
import { deleteDec, colorDec } from './App';

export default function CardPrincipal({json:{id, simbol, current_price, image,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_30d_in_currency,
    price_change_percentage_1y_in_currency}, cur= 'usd'}) {
    return(
        <>
            <article className="cripto-first">
                <div>
                    <img src={image} alt="Icono de la cripto" />
                    <h2>Nombre de la Cripto - USD - %</h2>
                    <h2><FaPlay /></h2>
                </div>

                <div className="graphic">
                    {/*Grafico*/}
                </div>

                <div className="capitalization">
                    <h2>Capitalización</h2>

                    <table className="capitalization-table">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>23h</th>
                                <th>7d</th>
                                <th>1m</th>
                                <th>1y</th>
                            </tr>
                        </thead>
                    </table>
                </div>

            </article>
        </>
    )
}