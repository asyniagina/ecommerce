import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col border rounded-md mt-2 p-2 h-60 w-40" title={product.description}>
            <div className="font-semibold">{product.title}</div>
            <div>
                <img className="object-cover h-40 w-full" src={product.image} alt={product.title}/>
            </div>
            <div>Price: <span>{product.price}</span></div>
        </div>
    )
}

export default React.memo(ProductCard)
