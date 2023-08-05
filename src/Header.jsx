import React from "react"
import './Header.css'

export default function Header({currencys, fun, cur}) : Element {
    return (
        <header className='app-header'>
            <p>Crypto Stadistics</p>

            <div className='select-button'>
                <select value={cur} name="coinSelect" id="coninSelect" onChange={_ => {fun(document.getElementById("coinSelect".value))}}>
                    {currencys.map((item, index) : Element => <option value={"item"} key={index} >{item}</option>)}
                </select>
            </div>

            <button className='toogleMode'></button>
        </header>
        )
}