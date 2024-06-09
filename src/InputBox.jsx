import React, { useId } from 'react'


function InputBox(
   { title,
    amount,
    className = '',
    currencyList = [],
    onCurrencyChange,
    onAmountChange,
    selectedCurrency = 'USD'}
) {
    let amountInputId = useId()
    return (
        <div className='w-full p-4 bg-white m-2 rounded-2xl'>
            <div className='flex justify-between'>
                <p>{title}</p>
                <p>Currency</p>
            </div>

            <div className='flex justify-between'>
                <input  id={amountInputId} className='w-1/2 border-none p-2 outline-none' onChange={
                    (e) => onAmountChange(Number(e.target.value))
                } value={amount} type="number" placeholder='Enter the amount' />
                <select
                    className='rounded-xl text-black bg-white border-none p-2 outline-none'
                    name="" id="" value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
                    {(currencyList.map((currency) => <option key={currency} value={currency}>{currency}</option>))}
                </select>
            </div>

        </div>
    )
}

export default InputBox