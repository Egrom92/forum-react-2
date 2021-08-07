import React from 'react'
import './rating.css'

export default function Rating(props) {
    const {rating, onInc, onDec} = props
    return (
        <div className="Rating btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={onInc} type="button" className="btn btn-outline-primary"><i className="fas fa-arrow-up"/></button>
            <input type="text" readOnly className="btn btn-outline-primary" value={rating}/>
            <button onClick={onDec} type="button" className="btn btn-outline-primary"><i className="fas fa-arrow-down"/></button>
        </div>
    )
}