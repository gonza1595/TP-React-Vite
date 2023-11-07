import React, { useState } from "react";
import AlertGenerator from "../AlertGenerator/AlertGenerator";
const AlertMessage = () => {
     
    // Guarda el valor de campo de texto
    const [inputValue, setInputValue] = useState("");

    // Guarda el mensaje
    const [message, setMessage] = useState("");

    // Muestra el componente hijo
    const [showAlert, setShowAlert] = useState(false);
    
    // Si el campo de texto no esta vacio, se guarda el texto que escribio el usuario en "message" y se renderiza el componente hijo
    const handleClick = () => {
        if (inputValue.trim() !== "") {
            setShowAlert(true);
            setMessage(inputValue)
        } else {
            setShowAlert(false);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(String(event.target.value))
    }

    return(
        <div className="m-3">
            <h2>Ejemplo 2</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Enviar</button>

            {showAlert && <AlertGenerator message={message}/>}
        </div>
    )
}


export default AlertMessage