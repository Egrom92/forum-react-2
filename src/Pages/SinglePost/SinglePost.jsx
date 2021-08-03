import React from 'react'
import './SinglePost.css'
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {decreaseRating, increaseRating} from '../../store/comments';


export default function SinglePost(props) {


    const params = useParams();
    const orderId = parseInt(params.id);

    const allPosts = useSelector(state => state.posts.list)
    const allComments = useSelector(state => state.comments.list)
    const postComments = allComments.filter(comment => comment.postID === orderId)

    const dispatch = useDispatch()

    const post = allPosts.find(el => el.id === orderId)

    const {title, content} = post

    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className='comments'>
                {postComments.map((c, i) => <Comment
                    key={i}
                    onInc={()=>dispatch(increaseRating(c.id))}
                    onDec={()=>dispatch(decreaseRating(c.id))}
                    content={c.content}
                    rating={c.rating}/>
                    )}
            </div>
            <CommentForm/>
        </>
    )
}