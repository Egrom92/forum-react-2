import React from 'react'
import './Comment.css'
import Rating from '../Rating/Rating';


export default function Comment(props) {
    const {content, rating, onInc, onDec} = props



    return (
        <div className="Comment card">
            <div className="card-header">
                Comment author name
                <Rating
                    rating={rating}
                    onInc={()=>onInc()}
                    onDec={()=>onDec()}
                />
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{content}</p>
                </blockquote>
            </div>
        </div>
    )
}