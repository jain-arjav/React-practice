import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const convert = () => {
    if (amount>0) setconvertedAmount(amount * currencyInfo[toCurrency]);
    else {
      alert("Please enter a valid amount")
    }
  }

  return (
    <div
      className="w-full h-screen flex float-none justify-center items-center"
      style={{
       
        backgroundColor: "black",
      }}
    >
      <div className="w-screen">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                Currencyoptions={options}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={fromCurrency}
                
                
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                
                amount={convertedAmount}
                Currencyoptions={options}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={toCurrency}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} ({convertedAmount} {toCurrency.toUpperCase()}) 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
