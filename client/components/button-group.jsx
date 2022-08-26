import React from 'react'

const ButtonGroup = () => {
    return (
        <div className="inline-flex shadow-sm rounded-md" role="group">
            <button type="button" className="rounded-1-1g border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                USD
            </button>
            <button type="button" className="border-t border-b border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                EUR
            </button>
            <button type="button" className="rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                CAD
            </button>
        </div>
    )
}

export default React.memo(ButtonGroup)
