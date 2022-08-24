import React from 'react'
import { useSelector } from 'react-redux'

import ProductCard from './product-card'

const Products = () => {
    const productList = useSelector((s) => s.products.list)
    return (
        <div className="flex flex-wrap">
            {
                productList.map((prod) => <ProductCard key={prod.id} product={prod} />)
            }
        </div>
    )
}

export default React.memo(Products)
