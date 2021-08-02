import React from 'react'
import './Comment.css'
import Rating from '../Rating/Rating';


export default function Comment(props) {
    return (
        <div className="Comment card">
            <div className="card-header">
                Post title
                <Rating/>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
            </div>
        </div>
    )
}