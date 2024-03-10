import React from 'react';
import { SubTitulo } from '../SubTitulo/SubTitulo';
import "./Portafolio.css"
import { Paginas } from '../Paginas/Paginas';
import screen1 from "../Img/screen1.jpg"
import screen2 from "../Img/screen2.jpg"
import screen3 from "../Img/screen3.jpg"



function Portafolio (){
   
    return(
        <section className='portafolio' id='portafolio'>
            <SubTitulo titulo={"PORTAFOLIO"} texto={"Puedes ver mis diferentes proyectos aqui!"} />
            <div className='div'>
                <Paginas texto={"Landign Page"} imagen={screen1} link={"https://leonelbarchetta.github.io/Sign-in-page-design/"}/>
                <Paginas texto={"Elegant Essence Collection"} imagen={screen2} link={"https://leonelbarchetta.github.io/Elegant-Essence-Collection/"}/>
                <Paginas texto={"Lark Homes"} imagen={screen3} link={"https://leonelbarchetta.github.io/Lark-Homes/"}/>
            </div>
           
        </section>
    )
}

export {Portafolio}