import Products from "../components/products";
import "./catalog.css";

function Catalog() {
    return (
        <div className="catalog">
            <h2>Catalog Page</h2>
            <Products />
            <Products />
            <Products />
        </div>
    )
};
export default Catalog;