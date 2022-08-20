import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result , setResult] = useState("")

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name))
  }
  const clear = ()=>{
      setResult("")
  }
  const calculate = ()=>{
    setResult(eval(result).toString())
  }
  return (
   <>
      <div className='container'>
        <div className='calci-app'>
          <div className='calculator'>
            <h3>Calculator</h3>
          </div>
          <div className='first'>
            <input type="text" value={result}></input>
            <button type='button' onClick={clear} >C</button>
          </div>
          <div className='second'>
          <button type='button' name='1' onClick={handleClick}>1</button>
          <button type='button' name='2' onClick={handleClick}>2</button>
          <button type='button' name='3' onClick={handleClick}>3</button>
          <button type='button' name='/' onClick={handleClick}>/</button>
          </div>
          <div className='third'>
          <button type='button' name='4' onClick={handleClick}>4</button>
          <button type='button' name='5' onClick={handleClick}>5</button>
          <button type='button' name='6' onClick={handleClick}>6</button>
          <button type='button' name='*' onClick={handleClick}>*</button>
          </div>
          <div className='fourth'>
            <button type='button' name='7' onClick={handleClick}>7</button>
            <button type='button' name='8' onClick={handleClick}>8</button>
            <button type='button' name='9' onClick={handleClick}>9</button>
            <button type='button' name='-' onClick={handleClick}>-</button>
          </div>
          <div className='fifth'>
            <button type='button' name='.' onClick={handleClick}>.</button>
            <button type='button' name='0' onClick={handleClick}>0</button>
            <button type='button' name='=' onClick={calculate}>=</button>
            <button type='button' name='*' onClick={handleClick}>*</button>
          </div>

        </div>
      </div>
   </>
  );
}

export default App;
