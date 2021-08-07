import React from 'react'
import {PostCard} from '../../components';
import {useSelector} from 'react-redux';

export default function PostArchive(props) {

    const posts = useSelector(state => state.posts.list)


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