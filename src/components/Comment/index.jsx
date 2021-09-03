import React from 'react'
import './comment.css'
import {Rating} from '../';


export default function Index(props) {
    const {content, rating, onInc, onDec, onRemove} = props;


    return (
        <>
            <div className="Comment card">
                <div className="card-header">
                    <div className="authorName">Comment author name</div>

                    <button type="button" className="btn btn-outline-secondary btn-card-action ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-trash"/>
                    </button>

                    <Rating
                        rating={rating}
                        onInc={() => onInc()}
                        onDec={() => onDec()}
                    />
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{content}</p>
                    </blockquote>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Yo man</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="bi bi-x-lg"/>
                            </button>
                        </div>
                        <div className="modal-body">
                            Want to delete a comment?
                        </div>
                        <div className="modal-footer">
                            <button onClick={onRemove} type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Yes</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}