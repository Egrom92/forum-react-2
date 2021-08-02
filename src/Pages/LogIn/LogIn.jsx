import React from 'react'

export default function LogIn(props) {
    return (
        <form className='row justify-content-center mt-5'>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Account</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn btn-outline-secondary">Submit</button>
            </div>
        </form>
    )
}