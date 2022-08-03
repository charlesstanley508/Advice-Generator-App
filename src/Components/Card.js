import React, { useState, useEffect } from 'react'
import { CardText } from './CardText';
import Logo1 from './Img/divider-desktop.svg';
import Logo2 from './Img/icon-dice.svg';

function Card() {
  const API_URL = 'https://api.adviceslip.com/advice';

  const [textValue, setTextValue] = useState(CardText[0].text);

  const changeTextValue = async() =>{
    try{
      const response = await fetch(API_URL);
      
      const textValue = await response.json();

      console.log(textValue)
      setTextValue(textValue.slip)
    }catch{
      throw Error('Did not receive expected data');
    }
  };
  
  useEffect(() =>{

    changeTextValue();
  },[])

  return (
    <header className="App-header">
       <div className='box'>
        <span className='Span-text'>Advice {textValue.id}</span>
        <div className='text-center'>
          {textValue.advice}
        </div>
        <img src={Logo1} alt="" />
          <br />
        <button className='Button' onClick={changeTextValue}>
          <img src={Logo2} alt="" />
        </button>
       </div>
    </header>
  )
}

export default Card