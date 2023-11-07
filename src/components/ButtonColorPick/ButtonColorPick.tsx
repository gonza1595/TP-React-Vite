import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";


const ButtonColorPick = () => {

    const [buttonColor, setButtonColor] = useState("#3d7c40");

    //Manejo del modal
    const [showModal, setShowModal] = useState(false);

    //Funcion para cambiar el boton
    const handleColorChange = (color: string) => {
        setButtonColor(color);
    }

    // Funcion para hacer click en el boton se muestre el modal 
    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
        <div className="m-3">
            <h2>Ejemplo 3</h2>

            <Button variant="primary" style={{ backgroundColor: buttonColor }} onClick={handleShowModal}>Cambiar Color</Button>
            
            {showModal && <ModalColorPick show={showModal}
                onHide={() => setShowModal(false)}
                handleColorChange={handleColorChange } />}
    </div>
)
}


export default ButtonColorPick