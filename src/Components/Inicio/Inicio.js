import React from 'react';
import './Inicio.css';
import { FotoPerfil } from '../FotoPerfil/FotoPerfil';
import { Titulo } from '../Titulo/Titulo';

function Inicio (){
   
    return(
        <section className='inicio' id='home'>
            <div>
                <FotoPerfil/>
                <div className='sombra'></div>
                <div className='sombraDos'></div>
            </div>
            <Titulo/>
            
        </section>
    )
}

export {Inicio}