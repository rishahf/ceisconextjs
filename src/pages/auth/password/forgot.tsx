import Icons from "@/components/Icons"
import Google from '../assets/icons/search.png';
import { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
const ForgotPassword = () => {
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Forgot Password</h3>
                        <p className="m-0 mb-4">Enter the email address or mobile number associated with your account.</p>
                    </div>
                </div>
                <form className="text-start">
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email or Mobile Number</label>
                        <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email or Mobile Number" />
                    </div>
                    <Link href={'/auth/verify/email'}>
                        <button type="submit" className="btn btn-primary w-100 fs-6">Continue</button>
                    </Link>
                    <p className="text-center pt-3">
                        <span>Return to</span>
                        <Link href="/auth/login" className="text-green border-0 text-decoration-none">Log in</Link>
                    </p>
                </form>
            </div>
        </Fragment>
    )
}

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default ForgotPassword