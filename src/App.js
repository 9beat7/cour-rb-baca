import { useState } from 'react'
import './App.css'

const App = () => {
  const [result, setResult] = useState(0)
  const [input, setInput] = useState(0)

  const calculate = (operation) => {
    switch (operation) {
      case 'add':
        setResult(result + input)
        break
      case 'subtract':
        setResult(result - input)
        break
      case 'multiply':
        setResult(result * input)
        break
      case 'divide':
        setResult(result / input)
        break
      default:
        // do nothing ¯\_(ツ)_/¯
    }
    if (operation === 'reset result') {
      setResult(0)
    } else {
      setInput(0)
    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>{result}</p>
      <input type='number' value={input} onChange={(e) => setInput(Number(e.target.value))} />
      <br />
      <input type='button' value='add' onClick={() => calculate('add')} />
      <input type='button' value='subtract' onClick={() => calculate('subtract')} />
      <input type='button' value='multiply' onClick={() => calculate('multiply')} />
      <input type='button' value='divide' onClick={() => calculate('divide')} />
      <input type='button' value='reset input' onClick={() => calculate()} className='red' />
      <input type='button' value='reset result' onClick={() => calculate('reset result')} className='red' />
    </div>
  )
}

export default App
