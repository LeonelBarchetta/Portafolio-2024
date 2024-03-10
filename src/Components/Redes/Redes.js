import React from 'react';

function Redes ({texto , red1 , red2 , red3, link, link2 ,link3}){
   
    return(
        <div className='skills'>
           <p>{texto}</p>
           <div>
                <a href={link} target='_blank' rel="noreferrer"><img alt='' src={red1} /></a>
                <a href={link2} target='_blank' rel="noreferrer"><img alt='' src={red2} /></a>
                <a href={link3} target='_blank' rel="noreferrer"><img alt='' src={red3} /></a>
           </div>
        </div>
    )
}


export {Redes}