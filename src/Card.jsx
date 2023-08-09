import './Card.css'
import { colorDec } from './App'
export default function Card({price, porcentaje, img, coinId, cur}){
    return(
        <div className="card">
            <img src={img} alt="" />

            <div className="con-main">
                <div className="con-title">
                    <h2 className={`price ${colorDec(porcentaje)}`}>{price}</h2>
                    <h4 className={`porcentaje ${colorDec(porcentaje)}`}>{porcentaje}%</h4>
                </div>
            </div>
        </div>
    )
}