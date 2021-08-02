import React from 'react'
import './CommentForm.css'

export default function CommentForm(props) {
    return (
        <div className="row mt-5">
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="Your new best title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postText" className="form-label">Content</label>
                    <textarea className="form-control" id="postText" rows="5"></textarea>
                </div>
                <button type="button" className="mt-1 btn btn-outline-secondary">Send</button>
            </div>
        </div>
    )
}