import React from 'react';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import "./Header.css"
import ReactSwitch from "react-switch"
import menu from "../Img/menu.svg"
import { useState } from 'react';

function Header (prop){

    const [dropdown,setDropdown]=useState(false)

    const abrir = () =>{
        setDropdown(!dropdown)
    }

    const handleChange = (event) =>{
        prop.funcionProp(event)
    }
    return(
        <header>
            <div className='divuno'>
                <Logo/>
            </div>
             
             
             <Nav/>
             

             <div className='switch'>
                <ReactSwitch onChange={handleChange} checked={prop.themeProp === "dark"} className='reactSwitch'/>
            </div>
            <div className='menu'> 
                <img alt='' src={menu}  onClick={abrir}></img>

               {dropdown && <div className='drop'>
                <a href='#home'>INICIO</a>
                <a href='#portafolio'>PORTAFOLIO</a>
                <a href='#resumen'>RESUMEN</a>
                <a href='#contactame'>CONTACTAME</a>
                <div className='switch2'>
                    <ReactSwitch onChange={handleChange} checked={prop.themeProp === "dark"} className='reactSwitch'/>
                </div>
               </div>}
                
            </div>
             
        </header>
       
    )
}

export {Header}