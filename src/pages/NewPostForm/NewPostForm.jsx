import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux';
import {add} from '../../store/posts'

export default function NewPostForm(props) {


    const dispatch = useDispatch()

    const [count, setCount] = useState(0);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onAdd = useCallback(()=> {
        console.log('test')
        dispatch(add({title, content}))
        setTitle('')
        setContent('')
    }, [title, content])



    // const onAdd = () => {
    //     console.log('test')
    //     dispatch(add({title, content}))
    //     setTitle('')
    //     setContent('')
    // }

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Title</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="postTitle" placeholder="Your new best title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postText" className="form-label">Content</label>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)}  className="form-control" id="postText" rows="5"/>
                </div>
                <button onClick={() => onAdd() } type="button" className="mt-1 btn btn-outline-secondary">Send</button>
            </div>
            <h2>{count}</h2>
            <button onClick={clickHandler}>+</button>
        </div>
    )
}