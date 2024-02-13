import Icons from "@/components/Icons"
import Google from '../assets/icons/search.png';
import { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
const ResetOtpEmail = () => {
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Please Verify Your Email Id</h3>
                        <p>Enter 4 digit code that you received on your Email</p>
                     <div className="mb-2">
                     <Link className="text-success d-flex align-items-center gap-1" href={''}>
                        <span>johndoe@gmail.com</span>
                        <Icons.Edit/></Link>
                     </div>
                        <form className="text-start auth-form-wrapper">
                            <div className="mb-4 d-flex gap-3 reset-otp-wrapper">
                                <input type="text" className="form-control p-2 text-center"maxLength={1}/>
                                <input type="text" className="form-control p-2 text-center"maxLength={1}/>
                                <input type="text" className="form-control p-2 text-center"maxLength={1}/>
                                <input type="text" className="form-control p-2 text-center"maxLength={1}/>
                            </div>
                            <Link href='/auth/password/reset'>
                            <button type="submit" className="btn btn-primary w-100 fs-6">Submit</button>
                            </Link>
                            <p className="pt-3">
                                <span>Resend code in :</span>
                                <span className="text-success border-0 ms-1">00:30</span>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

ResetOtpEmail.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default ResetOtpEmail