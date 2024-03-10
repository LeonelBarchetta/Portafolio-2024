import React from 'react';
import { Redes } from '../Redes/Redes';
import git from "../Img/git.png"
import link from "../Img/linkedin.png"
import ig from "../Img/ig.png"
import htmlCss from "../Img/htmlCss.png"
import js from "../Img/js.png"
import reactLogo from "../Img/react.png"
import flecha from "../Img/flecha.png"


function Titulo (){

    // const handleDownload = () => {
       
    //     const fileUrl = ''; 
    //     const link = document.createElement('a');
    //     link.href = fileUrl;
    //     link.download = ''; 
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   };
   
    return(
        <div className='titulo'>
           <h3>BIENVENIDO<img alt='' src={flecha} className='flecha'/></h3>
            <h1>Hola!, soy Leonel Barchetta -</h1>
            <a href='./Leonel Barchetta.pdf' download className='descarga'>Descarga mi CV -</a>
            <p className='texto'>Soy un desarrollador web que crea sitios dinámicos y atractivos. Mi enfoque principal es combinar mi conocimiento de lenguajes de programación como HTML, CSS, JavaScript y React.</p>
            <div className='div'>
                <Redes texto="Encuentrame en" red1={git} link={"https://github.com/LeonelBarchetta"} red2={link} link2={"https://www.linkedin.com/in/leonel-barchetta-1362592a0/"} red3={ig} link3={"https://www.instagram.com/leonel_b_/?next=%2F"} />
                <hr></hr>
                <Redes texto="Habilidades principales" red1={htmlCss} red2={js} red3={reactLogo} link={"#resumen"} link2={"#resumen"} link3={"#resumen"}/>
            </div>
        </div>
    )
}


export {Titulo}