import React from 'react'
import PostCard from './PostCard/PostCard';
// import {useSelector} from 'react-redux';

export default function PostArchive(props) {

    const {posts} = props

    return (
        <div className='row mt-5'>
            {posts.map(post => <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
            />)}
        </div>
    )
}