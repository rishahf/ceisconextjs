import Icons from "@/components/Icons"
import Google from '../assets/icons/search.png';
import { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
const SignUp = () => {
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold">Sign Up</h3>
                    </div>
    
                </div>
                <form className="text-start pt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Full Name</label>
                        <input type="text" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email Address</label>
                        <input type="email" placeholder="Enter Your Email" className="form-control  p-2" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control  p-2" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fs-6">Sign Up</button>
                    <p className="text-center pt-3">
                        <span>Already have an account?</span>
                        <Link href="/auth/login" className="text-green border-0 text-decoration-none">Login</Link>
                    </p>
                </form>
            </div>
        </Fragment>
    )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default SignUp