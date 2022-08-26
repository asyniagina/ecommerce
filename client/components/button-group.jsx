import React from 'react'

const ButtonGroup = () => {
    return (
        <div className="inline-flex shadow-sm rounded-md" role="group">
            <button type="button" className="rounded-1-1g border border-gray-200 bg-white text-sm font-medium">
                Profile
            </button>
            <button type="button" className="border-t border-b border-gray-200 bg-white text-sm font-medium">
                Settings
            </button>
            <button type="button" className="rounded-r-md border border-gray-200 bg-white text-sm font-medium">
                Messages
            </button>
        </div>
    )
}

export default React.memo(ButtonGroup)
