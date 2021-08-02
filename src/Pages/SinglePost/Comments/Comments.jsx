import React from 'react'
import Comment from '../Comment/Comment';
import './Comments.css'

export default function Comments(props) {
    return (
        <div className='Comments'>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    )
}