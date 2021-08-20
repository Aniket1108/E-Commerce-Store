import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsData } from './ProductsData'

const SingleProduct = () => {

    const { id } = useParams();

    return (
        <div className="SingleProduct">
            {ProductsData.filter(card => card.id === id).map((card) => {
                return (
                    <div className="card" key={card.id}>
                        <img src={card.img} alt={card.name} />
                        <div className="info">
                            <h2>{card.name} <br/> <label className="label">{card.availability}</label> </h2>
                            <p className="price">{card.price} Rs</p>
                            <p>{card.description}</p>
                            <div>
                                <button className="cart">Add to Cart</button>
                                <button className="buy">Buy Now</button>
                            </div>
                            <div className="review">
                                <h3>Reviews</h3>
                                <p>{card.review}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct
