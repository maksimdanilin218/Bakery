import "./Product.css"
import ProductCard from "./ProductCard/ProductCard.jsx"


export default function Product(){
    return (
        <div className="ProductContainer">
            <h1> Top Product</h1>
            <div className="cardContainer">
                <ProductCard />
            </div>
        </div>
    )
} 