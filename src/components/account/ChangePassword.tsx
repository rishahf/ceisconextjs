import React, { ReactElement } from 'react'

const Changepassword = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="py-4 text-xl-start text-sm-center">
                        <h3 className="text-primary fw-bold">Update Your Password</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-xl-start justify-content-md-center">
                <div className="col-md-6">
                    <div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Current Password</label>
                                <input type="password" className="form-control rounded-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                <input type="password" className="form-control rounded-4" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control rounded-4" id="exampleInputPassword1" />
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary rounded-pill fs-6" >Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Changepassword