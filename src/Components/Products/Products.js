import React from 'react'
import { Link } from "react-router-dom"
import { ProductsData } from './ProductsData'
import "./products.scss"
import Navbar from "../Home/Navbar"
const Products = () => {
    return (
    <>
    <Navbar />
        <div className="Products">
            <div className="title">Products</div>
            <div className="singleproduct">
                {ProductsData.map((product) => {
                    return (
                        <div className="card" key={product.id}>
                            <img className="img" src={product.img} alt={product.name} />
                            <Link to={`/product/${product.id}`} >
                                <h2>{product.name}</h2> </Link>
                            <p>Price - {product.price} rs</p>
                            <button>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
    )
}

export default Products
