import React from 'react'
import { NavLink } from "react-router-dom";

export default function PostCard(props) {

    const{title, content, id} = props

    const excerpt = content.substr(0, 100).trim()

    return (
        <div className='col-4'>
            <div className="card mt-4" style={{width: '100%'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{excerpt}...</p>
                    <NavLink to={"post/" + id} exact className="btn btn-secondary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}