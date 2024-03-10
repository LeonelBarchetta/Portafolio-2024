import React from 'react';
import { Inicio } from '../Inicio/Inicio';
import { Portafolio } from '../Portafolio/Portafolio';
import { Resumen } from '../Resumen/Resumen';
import { Contactame } from '../Contactame/Contactame';
import "./Main.css"

function Main (){
   
    return(
        <main>
            <Inicio/>
            <Portafolio/>
            <Resumen/>
            <Contactame/>
        </main>
    )
}

export {Main}