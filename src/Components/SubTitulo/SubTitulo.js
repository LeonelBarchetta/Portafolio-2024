import React from 'react';
import flecha from "../Img/flecha.png"

function SubTitulo ({titulo, texto}){
   
    return(
        <div className='subtitulo'>
            <h1>{titulo}<img alt='' src={flecha}/></h1>
            <p>{texto}</p>
        </div>
    )
}

export {SubTitulo}