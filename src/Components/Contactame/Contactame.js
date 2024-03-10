import React from 'react';
import "./Contactame.css"
import { SubTitulo } from '../SubTitulo/SubTitulo';
import { Mail } from '../Mail/Mail';

function Contactame (){
   
    return(
        <section className='contacto' id='contactame'>
            <SubTitulo titulo={"CONTACTO"} texto={"contactame aqui: barchettaleonel@gmail.com."}/>
            <Mail/>
        </section>
        
    )
}

export {Contactame}