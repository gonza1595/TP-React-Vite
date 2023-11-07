import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function ProductTable() {

    //const para inicializar un producto por defecto y evitar el "undefined"
// vayamos a crear un producto nuevo

const initializableNewProduct = (): Product => {
    return {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
    };
};
//Producto seleccionado que se va a pasar como prop al modal
const [product, setProduct] = useState<Product>(initializableNewProduct);

// const para manejar el estado del modal
const [showModal, setShowModal] = useState(false);
const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
const [title, setTitle] = useState("");

//Logica del modal
const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setProduct(prod);
    setShowModal(true);
};

    
    //Variable que contiene los datos recibidos por la API
    const [products, setProducts] = useState<Product[]>([]);
    
    //Variable que muestra el componente Loader
    const [isLoading, setIsLoading] = useState(true);
    
    //Este hook se va a ejecutar cada que se renderice el componente o refresh data cambie de estado
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        }
        fetchProducts();
    }, [])
    
    return (
        <div className="container">
            <Button className="mt-4 mb-3" onClick={() => handleClick("Nuevo Producto", initializableNewProduct(),
                ModalType.CREATE)}> Nuevo producto</Button>
            {isLoading ? <Loader /> : (
                <Table hover>
                    <thead>
                        <tr className="text-center">
                            <th> Titulo </th>
                            <th> Precio </th>
                            <th> Descripcion </th>
                            <th> Categoria </th>
                            <th> Imagen </th>
                            <th> Editar </th>
                            <th> Eliminar </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr className="text-center align-middle">
                                <td>{product.title }</td>
                                <td>{product.price }</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td> <img src={product.image} alt={product.title}
                                    style={{ width: "50px" }} /></td>
                                <td><EditButton onClick={() => handleClick("Editar Producto", product, ModalType.UPDATE)} /></td>
                                <td><DeleteButton onClick={() => handleClick("Borrar Producto", product, ModalType.DELETE)} /></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {showModal && (
                <ProductModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={title}
                    modalType={modalType}
                    prod={product}
                    products={setProducts}
                />
            )}
        </div>
    )
}