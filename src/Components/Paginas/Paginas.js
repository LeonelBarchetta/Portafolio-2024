import React from 'react';

function Paginas ({imagen,texto, link}){
   
    return(
        <a href={link} target='_blank' rel="noreferrer" className='pagina'>
            <img alt='' src={imagen}/>
            <h2>{texto}</h2>
        </a>
    )
}

export {Paginas}