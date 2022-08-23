import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className="flex justify-center p4 bg-gray-600">
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.image}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
        </div>
    )
}

export default React.memo(ProductCard)
