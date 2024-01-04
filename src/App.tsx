import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import './App.css'

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <h1>QR-CODE GENERATOR</h1>
      <QRCodeSVG value={value} size={256}/>
      <div>
        <input type="text" id='inputValue' onChange={handleChange} />
      </div>
    </>
  )
}

export default App
