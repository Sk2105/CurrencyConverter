import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './InputBox'
import useCurrencyExchange from './CurrencyExchange'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('INR')
  const [convertAmount, setConvertAmount] = useState(0)
  const CurrencyExchange = useCurrencyExchange(currencyFrom)
  const currencyList = Object.keys(CurrencyExchange)

  const swapValues = () => {
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
    setAmount(convertAmount)
    setConvertAmount(amount)
  }

  const convertCurrency = () => {
    setConvertAmount(amount * CurrencyExchange[currencyTo])
    console.log(convertAmount);
  }


  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-600  '
    >
      <div className='p-4 w-1/2  bg-gray-400 rounded-2xl border-2 border-white flex justify-center items-center flex-col'>
        <h2 className='w-full m-2 text-center text-2xl text-white font-bold'>Currency Converter</h2>

        <InputBox
          title="From"
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setCurrencyFrom(currency)}
          selectedCurrency={currencyFrom}
          currencyList={currencyList}
        />

        <button onClick={swapValues} className='bg-blue-400 hover:bg-blue-600 p-2 rounded-xl text-white mt-[-15px] mb-[-15px] absolute border-2 border-solid border-white'>
          Swap
        </button>


        <InputBox
          title="To"
          amount={convertAmount}
          onAmountChange={(amount) => setConvertAmount(amount)}
          onCurrencyChange={(currency) => setCurrencyFrom(currency)}
          selectedCurrency={currencyTo}
          currencyList={currencyList}
        />

        <button onClick={convertCurrency} className='w-full rounded-2xl p-2 text-center m-2 text-2xl bg-blue-400 hover:bg-blue-600 text-white font-bold'>Convert</button>
      </div>

    </div>


  )
}

export default App
