import { data } from "./Data";
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
    let [products, SetProducts] = useState(data);
    let [newProduct, setNewProduct] = useState({ name: '', price: '' });
    function handleSort() {
        let sortProducts = [...products.sort((a, b) => a.price - b.price)]
        SetProducts(sortProducts)
    }

    function handleDelete(id) {
        let filteredProducts = products.filter((product) => student.id !== id);
        SetProducts(filteredProducts);
    }

    function handleSubmit(e) {
        e.preventefault()
        newProduct.id=uuidv4();
        SetProducts([...products,newProduct]);
      setNewProduct({name:'', price:''})

    }
    function handleAdd(e) {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }


    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="name" onChange={(e) => handleAdd(e)} type="text" value={newProduct.name} placeholder='product name' />
                <input name="price" onChange={(e) => handleAdd(e)} type="number" value={newProduct.price} placeholder='product price' />
                <button type='submit'>Add product</button>
            </form>
            <button onClick={handleSort}>Sort by price</button>

            <ul>
                {data && data.map((product) => {
                    return <li key={product.id}>{product.name} | {product.price}
                        <button onClick={handleDelete}>delete</button>
                    </li>
                })}
            </ul>

            <button>Clear All</button>
        </>
    )
}
export default Products