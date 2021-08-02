import React from 'react'
import './Rating.css'

export default function Rating(props) {
    return (
        <div className="Rating btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary"><i className="fas fa-arrow-up"/></button>
            <input type="text" readOnly className="btn btn-outline-primary" value='6'/>
            <button type="button" className="btn btn-outline-primary"><i className="fas fa-arrow-down"/></button>
        </div>
    )
}