import React from 'react'
import './singlePost.css'
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {decreaseRating, increaseRating, add, remove} from '../../store/comments';


export default function SinglePost(props) {


    const params = useParams();
    const postID = parseInt(params.id);

    const allPosts = useSelector(state => state.posts.list)
    const allComments = useSelector(state => state.comments.list)
    const postComments = allComments.filter(comment => comment.postID === postID)

    const dispatch = useDispatch()

    const post = allPosts.find(el => el.id === postID)

    postComments.sort((a, b) => a.rating < b.rating ? 1 : -1);

    const onAddNewComment = (content) => {
        dispatch(add({postID, content}))
    }
    const onRemoveComment = (id) => {
        dispatch(remove(id))
    }

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
                    rating={c.rating}
                    onRemove={()=>onRemoveComment(c.id)}/>
                    )}
            </div>
            <CommentForm onAdd={onAddNewComment}/>
        </>
    )
}