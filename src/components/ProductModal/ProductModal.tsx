import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductService } from "../../services/ProductService";
import { toast } from "react-toastify";

type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    prod: Product;
    products: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ProductModal({ show, onHide, title, modalType, prod, products}: ProductModalProps) {
    
    //CREATE - ACTUALIZAR
    const handleSaveUpdate = async (pro: Product) => {
        try {
            const isNew = pro.id === 0;
            if (isNew) {
                const newProduct = await ProductService.createProduct(pro);
                let updateData = ((prevProducts: any) => [...prevProducts, newProduct]);
                products(updateData); // Agregar el nuevo producto al final del arreglo
            } else {
                await ProductService.updateProduct(pro.id, pro);
                products((prevProducts) =>
                    prevProducts.map((product) =>
                        product.id === pro.id ? pro : product
                    )
                );
            }
    
            toast.success(isNew ? "Producto creado" : "Producto actualizado", {
                position: "top-center",
            });
    
            onHide();
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error");
        }
    }
    
    //DELETE
    const handleDelete = async () => {
        try {
            await ProductService.deleteProduct(prod.id);
            products((prevProducts) =>
                prevProducts.filter((products) =>
                    products.id !== prod.id)
            );
            toast.success("Producto eliminado con exito", {
                position: "top-center",
            })
            onHide();

        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error")
        }
    }

    //Yup, esquema de validacion
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required("El titulo es requerido"),
            price: Yup.number().min(0).required("El precio es requerido"),
            description: Yup.string().required("La descripcion es requerida"),
            category: Yup.string().required("La categoria es requerida"),
            image: Yup.string().required("La URL de la imagen es requerida"),
        });
    };

    //Formik, crea formulario dinamico y lo bloquea en caso de haber errores 
    const formik = useFormik({
        initialValues: prod,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => handleSaveUpdate(obj),
    });
    
    return (
        <>
            {modalType === ModalType.DELETE ? (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>¿Esta seguro que desea eliminar el producto <br />
                                <strong>{prod.title }</strong>?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                        <Modal.Header>
                            <Modal.Title> {title}</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>

                                 {/* Formulario */}
                                <Form onSubmit={formik.handleSubmit}>

                                    {/* Titulo */}
                                    <Form.Group controlId="formTitulo">
                                        <Form.Label> Titulo </Form.Label>
                                        <Form.Control 
                                            name="title"
                                            type="text"
                                            value={formik.values.title || ""}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                                        />
                                        <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
                                    </Form.Group>

                                     {/* Precio */}
                                    <Form.Group controlId="formPrecio">
                                        <Form.Label> Precio </Form.Label>
                                        <Form.Control 
                                            name="price"
                                            type="number"
                                            value={formik.values.price || ""}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                                        />
                                        <Form.Control.Feedback type="invalid">{formik.errors.price}</Form.Control.Feedback>
                                    </Form.Group>

                                     {/* Descripcion */}
                                    <Form.Group controlId="formDescription">
                                        <Form.Label> Descripcion </Form.Label>
                                        <Form.Control 
                                            name="description"
                                            type="text"
                                            value={formik.values.description || ""}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                                        />
                                        <Form.Control.Feedback type="invalid">{formik.errors.description}</Form.Control.Feedback>
                                    </Form.Group>

                                     {/* Categoria */}
                                    <Form.Group controlId="formCategory">
                                        <Form.Label> Categoria </Form.Label>
                                        <Form.Control 
                                            name="category"
                                            type="text"
                                            value={formik.values.category || ""}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                                        />
                                        <Form.Control.Feedback type="invalid">{formik.errors.category}</Form.Control.Feedback>
                                    </Form.Group>

                                     {/* Imagen */}
                                    <Form.Group controlId="formImage">
                                        <Form.Label> Imagen </Form.Label>
                                        <Form.Control 
                                            name="image"
                                            type="text"
                                            value={formik.values.image || ""}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                                        />
                                        <Form.Control.Feedback type="invalid">{formik.errors.image}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Modal.Footer className="mt-4">
                                        <Button variant="secondary" onClick={onHide}> Cancelar</Button>
                                        <Button variant="primary" type="submit" disabled={!formik.isValid}> Guardar</Button>
                                    </Modal.Footer>
                           </Form>
                        </Modal.Body>

                    </Modal>
                </>
            )}
        </>
    )
    
}