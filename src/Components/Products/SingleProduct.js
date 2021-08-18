import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsData } from './ProductsData'

const SingleProduct = () => {

    const { id } = useParams();
    
    return (
        <div>
            {ProductsData.filter(card => card.id === id).map((card) => {
                return(
                    <div key={card.id}>
                        <h2>{card.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleProduct
