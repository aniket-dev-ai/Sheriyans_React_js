import React from 'react'
import "./index.css";
function ItemDate(props) {
return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <span className="text-lg font-semibold text-gray-700">{props.date}</span>
            <span className="text-sm text-gray-500">{props.month}</span>
            <span className="text-sm text-gray-500">{props.year}</span>
    </div>
)
}

export default ItemDate