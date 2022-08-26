import React from 'react'
import { Link } from 'react-router-dom'

import ButtonGroup from './button-group'

const Header = ({ caption }) => {
    return (
        <div className="flex justify-between p4 bg-gray-600">
            <ButtonGroup />
            <Link to="/">
                <div
                    className="flex font-semibold text-gray-200"
                    id="brand-name"
                    cursor="pointer"
                >
                    { caption }
                </div>
            </Link>
            <Link to="/cart" className="text-white">
                <div>Cart</div>
                <div>COUNT</div>
            </Link>
        </div>
    )
}

export default React.memo(Header)
