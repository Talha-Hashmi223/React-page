import React from 'react'
import "../App.css"

const Cards = ({src,title,pera,btn}) => {
  return (
    <div className='card'>
        <img src={src}/>
        <h2>{title}</h2>
        <p>{pera}</p>
        <button>{btn}</button>
      
    </div>
  )
}

export default Cards
