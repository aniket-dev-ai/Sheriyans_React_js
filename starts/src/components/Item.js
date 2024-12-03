import React from 'react'
import "./index.css";
function Item(props) {
  return (
    <div>
        <ul className="list-none pl-5">
            <li className="py-2">{props.name}</li>
        </ul>
        {props.children}
    </div>
  )
}

export default Item