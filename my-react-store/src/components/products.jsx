import "./products.css";
import QuantityPicker from "./quantityPicker";

function Products() {
    return (
        <div className="products">
            <h2>Products Component</h2>
            <img src="https://picsum.photos/200"></img>
            <QuantityPicker />
        </div>
    )
}
export default Products;