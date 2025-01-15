import React from 'react'
import "./index.css"

const Todos = (props) => {

  return (
    <li className="list-item">
      <div>
        <strong>Task:</strong> {props.item.input}
      </div>
      <div>
        <strong>Due:</strong> {props.item.date}
      </div>
      <span className="icons">
        <button
          className="dlt-btn"
          onClick={() => props.deleteItem(props.index)}
        >
          -
        </button>
      </span>
    </li>

  )
}

export default Todos





