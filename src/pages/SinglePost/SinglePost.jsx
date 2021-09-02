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

    const post = useSelector(state => state.posts.list).find(el => el.id === postID)
    const allComments = useSelector(state => state.comments.list)
    const postComments = allComments.filter(comment => comment.postID === postID)

    const dispatch = useDispatch()

    postComments.sort((a, b) => a.rating < b.rating ? 1 : -1);

    const {title, content} = post

    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className='comments'>
                {postComments.map((c, i) => <Comment
                    key={c.id}
                    onInc={()=>dispatch(increaseRating(c.id))}
                    onDec={()=>dispatch(decreaseRating(c.id))}
                    {...c}
                    onRemove={(id) => { dispatch(remove(id)) }}/>
                    )}
            </div>
            <CommentForm onAdd={(content) => { dispatch(add({postID, content})) }}/>
        </>
    )
}