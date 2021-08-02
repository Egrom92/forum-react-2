import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {add} from '../../store/posts'

export default function NewPostForm(props) {


    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const changeTitleHandler = e => {
        setTitle(e.target.value)
    }
    const changeContentHandler = e => {
        setContent(e.target.value)
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Title</label>
                    <input value={title} onChange={changeTitleHandler} type="text" className="form-control" id="postTitle" placeholder="Your new best title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postText" className="form-label">Content</label>
                    <textarea value={content} onChange={changeContentHandler}  className="form-control" id="postText" rows="5"/>
                </div>
                <button onClick={() => dispatch(add({title, content}))} type="button" className="mt-1 btn btn-outline-secondary">Send</button>
            </div>
        </div>
    )
}