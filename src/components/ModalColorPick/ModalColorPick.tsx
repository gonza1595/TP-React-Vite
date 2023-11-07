import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

type ModalColorPickProps = {
    show: boolean;
    onHide: () => void;
    handleColorChange: (color: string) => void;
}

const ModalColorPick = ({show, onHide, handleColorChange}:ModalColorPickProps) => {
   
    // Para guardar el color seleccionado
    const [selectedColor, setSelectedColor] = useState("#FFF");

    //
    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    }

    //Al hacer click en aceptar, se pasa el color elegido a la funcion que proviene del componente
    //padre y se cierra el modal
    const handleAcceptClick = () => {
        handleColorChange(selectedColor);
        onHide();
    }
    

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Cambiar color</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label htmlFor="exampleColorInput">Elije un color</Form.Label>
                <Form.Control type="color" id="exampleColorInput" defaultValue="#FFF" title="Elije tu color" onChange={handleColorPickerChange}></Form.Control>
            </Modal.Body>
            <Modal.Footer onClick={handleAcceptClick}>
                    <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                    <Button variant="primary" onClick={handleAcceptClick}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalColorPick