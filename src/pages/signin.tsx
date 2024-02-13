import { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";

const SignIn = () => {
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold">Sign In</h3>
                    </div>
                </div>
                <form className="text-start pt-4">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
                        <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            <span className="m-0 fw-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="form-control  p-2" id="exampleInputPassword1" />
                    </div>
                    <div>
                        <div className="mb-3 form-check d-flex justify-content-between flex-column flex-sm-row ">
                            <div>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <div>
                                <a href="/password/forgot" className="text-decoration-none text-green border-0 fs-6 p-0">Forgot Password?
                                </a>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fs-6">Login</button>
                    <p className="text-center pt-3">
                        <span>Don't have an account?</span>
                        <Link href="/signup" className="text-green border-0 text-decoration-none">Sign Up</Link>
                    </p>
                </form>
            </div>
        </Fragment>
    )
}

SignIn.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default SignIn