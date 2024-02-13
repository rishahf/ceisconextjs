import Icons from "@/components/Icons"
import Google from 'src/assets/icons/search.png';
import { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
const ResetPassword = () => {
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Reset Password</h3>
                        <p className="m-0 mb-4">Enter the email address or mobile number associated with your account.</p>
                    </div>
                </div>
                <form className="text-start">
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">New Password</label>
                        <input type="password" className="form-control p-2" placeholder="Enter Email or Mobile Number" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Confirm Password</label>
                        <input type="password" className="form-control p-2" placeholder="Enter Your Password" />
                    </div>
                    <Link href={'/signin'}>
                        <button type="submit" className="btn btn-primary w-100 fs-6">Continue</button>
                    </Link> 
                </form>
            </div>
        </Fragment>
    )
}

ResetPassword.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default ResetPassword