import React, { useState } from "react";
import Form from "react-bootstrap/FormRange";
import DangerBar from "../DangerBar/DangerBar";

export default function DangerInput() {
    // Variable que va a guardar el valor elegido por el usuario
    const [value, setValue] = useState(0);

    // Actualizar el estado de value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setValue(Number(event.target.value))
   }

    return (
        <div className="m-3 w-50">
            <h2>Ejemplo 1</h2>
            <Form value={value} onChange={handleChange} />

            <DangerBar value={value} />
        </div>
    )
};
