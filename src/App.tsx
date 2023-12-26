import { useEffect, useState } from 'react'
import './App.css'

const noColorOptions = 3;

function App() {
  const [colorOptions, setColorOptions] = useState<Array<string>>([])
  const [correctColor, setCorrectColor] = useState<string>("")

  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  const generatePastelColor = () => {
    let R = Math.floor((Math.random() * 127) + 127);
    let G = Math.floor((Math.random() * 127) + 127);
    let B = Math.floor((Math.random() * 127) + 127);
    
    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`;      
  }

  function makeGameOptions(){
    let opts = []
    for(let i = 0; i < noColorOptions; i++){
      opts.push(generatePastelColor())
    }
    setColorOptions(opts)
    setCorrectColor(opts[getRandomInt(noColorOptions)])
  }

  useEffect(() => {
    makeGameOptions()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='box' style={{backgroundColor: `${correctColor}`}}>

        </div>
      </div>
    </>
  )
}

export default App
