import React from 'react'

const Header = ({ caption }) => {
    return (
        <div className="flex justify-center p4 bg-gray-600">
            <div className="flex font-semibold text-gray-200">{ caption }</div>
        </div>
    )
}

export default React.memo(Header)
