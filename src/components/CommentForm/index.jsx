import React, {useState} from 'react'
import './commentForm.css'

export default function Index(props) {
    const {onAdd} = props;

    const [content, setContent] = useState('')

    const contentHandler = e => {
        setContent(e.target.value)
    }

    return (
        <div className="row mt-5">
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="postText" className="form-label"><h3>Comment</h3></label>
                    <textarea onChange={contentHandler} value={content} className="form-control" id="postText" rows="5"/>
                </div>
                <button onClick={() => content && onAdd(content)} type="button" className="mt-1 btn btn-outline-secondary">Send</button>
            </div>
        </div>
    )
}