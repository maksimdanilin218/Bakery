import "./ProductCard.css"


const products = [
    {
        id: 1,
        title: "Whole Grain Brain",
        price: 40,
        img: "/img/Product/product1.png"
    },
    {
        id: 2,
        title: "Whole Grain Brain",
        price: 40,
        img: "/img/Product/product2.png"
    },
    {
        id: 3,
        title: "Whole Grain Brain",
        price: 40,
        img: "/img/Product/product3.png"
    },
    {
        id: 4,
        title: "Whole Grain Brain",
        price: 40,
        img: "/img/Product/product4.png"
    },
    {
        id: 5,
        title: "Whole Grain Brain",
        price: 40,
        img: "/img/Product/product5.png"
    },
    {
        id: 6,
        title: "Whole Grain Brain",
        price: 40,
        img: "/img/Product/product6.png"
    }
]





function ProductCard({ title, price, img }) {
    return (
        <div className="card">
            <img className="img" src={img} alt="title" />
            <p className="cardPrice">{price} $</p>
            <div className="cardInfo">
                <h3 className="cardName">{title}</h3>
                <button className="cardButton">Add</button>
            </div>
        </div>
    )
}

function ProductList() {
    return (
        <div className="products">
            {products.map((product) => (
                <ProductCard key={product.id} title={product.title} price={product.price} img={product.img} />
            ))}
        </div>
    )
}


export default ProductList