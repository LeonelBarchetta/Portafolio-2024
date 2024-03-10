import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';
import { createContext, useState } from 'react';



export const ThemeContext = createContext(null);

export default function App() {

  const [theme,setTheme]=useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div id={theme}>
          <Header funcionProp={toggleTheme} themeProp={theme}/>
          <Main/>
          <Footer/>
        </div>
        
      </ThemeContext.Provider>
     
    </>
  );
}

export {App}

