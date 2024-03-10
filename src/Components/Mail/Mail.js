import React from 'react';
import { useState } from 'react';
import { useForm } from '@formspree/react';


function Mail (){

    const [state, handleSubmit] = useForm("meqbogqe");
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

    const validateForm = () => {
        const formErrors = {};
    
        if (!values.Nombre) {
          formErrors.Nombre = <p style={{color:"red"}}>Completa este campo</p>
        }

        if (!values.Numero) {
            formErrors.Numero = <p style={{color:"red"}}>Completa este campo</p>
          }
    
        if (!values.Email) {
          formErrors.Email = <p style={{color:"red"}}>Completa este campo</p>
        }
    
        if (!values.Asunto) {
          formErrors.Asunto = <p style={{color:"red"}}>Completa este campo</p>
        }
    
        if (!values.Comentarios) {
          formErrors.Comentarios = <p style={{color:"red"}}>Completa este campo</p>
        }
    
        return formErrors;
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
    
        if (Object.keys(formErrors).length === 0) {
          handleSubmit(event); 
          setValues({}); 
        } else {
          setErrors(formErrors);
        }
    };
   

    
    if (state.succeeded) {
      return <div className='visita'>¡gracias por la visita!</div>;
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <div> 
                <label>NOMBRE</label>
                <input  id="name" type="text" name="Nombre" onChange={handleChange} value={values.Nombre || ''}/>
                {errors.Nombre && <span className="error">{errors.Nombre}</span>}
            </div>

            <div>
                <label>NUMERO DE TELEFONO</label>
                <input id="phone"type="number" name="Numero" onChange={handleChange} value={values.Numero || ''}/>
                {errors.Numero && <span >{errors.Numero}</span>}
            </div>

            <div>
                <label >EMAIL</label>
                <input  id="email"type="email" name="Email" onChange={handleChange} value={values.Email || ''} />
                {errors.Email && <span className="error">{errors.Email}</span>}
            </div>

            <div>
                <label >ASUNTO</label>
                <input id="subject" type="text" name="Asunto" onChange={handleChange} value={values.Asunto || ''}/>
                {errors.Asunto && <span className="error">{errors.Asunto}</span>}
            </div>

            <div>
                <label>MENSAJE</label>
                <textarea  id="message" name="Comentarios" onChange={handleChange} value={values.Comentarios || ''}/>
                {errors.Comentarios && <span className="error">{errors.Comentarios}</span>}
            </div>

            <button type='submit'>ENVIAR</button>
        </form>
        
    )
}

export {Mail}