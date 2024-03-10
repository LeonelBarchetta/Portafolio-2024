import React from 'react';
import { SubTitulo } from '../SubTitulo/SubTitulo';
import "./Resumen.css"
import { useState } from 'react';
import { Info } from '../Info/Info';
import html from "../Img/htmlCss2.png"
import js from "../Img/js.png"
import reactLogo from "../Img/react.png"
import coder from "../Img/coder.png"
import utn from "../Img/utn.ico"
import scrum from "../Img/scrum.svg"


function Resumen (){
    const [label,setLabel]=useState(true)
    const [label2,setLabel2]=useState(false)

    function botonUno (){
        if(label===false){
            setLabel(true)
            setLabel2(false)
        }
    }

    function botonDos (){
        if(label2===false){
            setLabel2(true)
            setLabel(false)
        }
    }

    const ClaseBoton1 = label ? "botonMarcado" : "boton"
    const ClaseBoton2 = label2 ? "botonMarcado" : "boton"
    return(
        <section className='resumen' id='resumen'>
            <SubTitulo titulo={"RESUMEN"} texto={"Resumen y habilidades principales."}/>
            <div style={{display:"flex", width:"100%", justifyContent:"space-evenly", margin:"5rem 0"}}>
                <button onClick={botonUno} className={ClaseBoton1}>Habilidades</button>
                <button onClick={botonDos} className={ClaseBoton2}>Resumen y formacion</button>
            </div>
            {label && <div> 
                <Info img1={html} text1={"Tengo habilidades en HTML y CSS con un dominio en el diseño y estructura de páginas web. Puedo crear interfaces intuitivas, responsivas y visualmente atractivas."} img2={js} text2={"Utilizo la logica javaScript para reforzar el dinamismo y la interactividad de las paginas web."} img3={reactLogo} text3={"Me baso en la herramientas react para lograr una pagina dinamica e interactiva. Puedo utilizar tanto React native como React vite y lo puedo utilizar con un framework como chakra UI."}/>
            </div>}
            {label2 && <div >
                <Info img1={coder} text1={" Tuve la oportunidad de embarcarme en un curso en Coderhouse, donde pude aprender en lenguajes de programación como HTML, CSS."} img2={utn} text2={"Concrete un curso fullstack de la Universidad Tecnológica Nacional(UTN) en donde defini mis conocimientos en programacion."} img3={scrum} text3={"Tengo conocimiento en la metologia Scrum, acompañado de una organizacion en proyectos en apps como Jira y un conocimiento medio en ingles."}/>
            </div>}
        </section>
    )
}

export {Resumen}