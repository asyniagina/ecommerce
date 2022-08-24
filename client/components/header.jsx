import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ caption }) => {
    return (
        <div className="flex justify-center p4 bg-gray-600">
            <Link to="/">
                <div
                    className="flex font-semibold text-gray-200"
                    id="brand-name"
                    cursor="pointer"
                >
                    { caption }
                </div>
            </Link>
        </div>
    )
}

export default React.memo(Header)
