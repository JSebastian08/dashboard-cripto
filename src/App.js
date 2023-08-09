import { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import CardPrincipal from './CardPrincipal.jsx';
import Card from './Card'
import Convert from './Convert'
import TableCoins from './TableCoins'
import Footer from './Footer'

function App(){

  // Estados de la Appi //
const [coins, setCoins] = useState()
const [currency, setCurrency] = useState()
const [selCur, setSelCur] = useState('usd')

// Llamado de la Appi//
const getData = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selCur}&order=market_cap_desc&per_page=4&page=1&sparkline=false`

  );
  const json = await response.json()

  const response_cur = await fetch(
    `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
  );
  const cur = await response_cur.json()

  // Los set sirven para guardar los datos//
  setCoins(json)
  setCurrency(cur)
}

//Este useEffect sirven para cargar la aplicacion cuando surgen cambios en los componentes//
useEffect(()  => {
  getData()
}, [])

//Este useEffect sirve para ejecutar cuando se selecciona una divisa//
useEffect(() =>  {
  getData()
}, [selCur])

return(
  !coins ? 'Cargando' : (
    <div className="App">
    <Header currency={currency} fun={setCurrency} cur={selCur}/>
    <main>
      <CardPrincipal json={coins[0]} cur={selCur} />
      <div className="cards_con">
        {
          coins.map(({
            id,
            symbol,
            image,
            current_price,
            price_change_percentage_30d_in_currency,
          }, index) => {
            if(index != 0){
              return <Card  key={index} price={`${symbol} -
              ${current_price} ${selCur} `} porcentaje = 
              {deleteDec
              (price_change_percentage_30d_in_currency, 2)}
              img={image} coinId={id} cur={selCur}/>
            }
          })
        }
      </div>
    </main>
    <Convert />
    <TableCoins coins={coins} />
    <Footer />
  </div>
  )
  
)
}

export default App;

//Funcion para leer los decimales de la Appi//
export function deleteDec(val, decimal) {
  return val.toFixed(decimal);
}

//Funicion para el tema del color de la parte del grafico y la informacion de la moneda//

export function colorDec(num) {
  return num > 0 ? "green" : "red" ;
}

//Funcion para darle formato a los numero de la Appi//
export const numberF = Intl.NumberFormat("es-ES");