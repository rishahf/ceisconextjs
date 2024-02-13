import Icons from "@/components/Icons"
import Google from 'src/assets/icons/search.png';
import { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
const ResetOtpNumber = () => {
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Please Verify Your Phone Number Id</h3>
                        <p>Enter 4 digit code that you received on your Phone Number</p>
                     <div className="mb-2">
                     <Link className="text-success" href={''}>987456123</Link>
                     </div>
                        <form className="text-start">
                            <div className="mb-4 d-flex gap-3 reset-otp-wrapper">
                                <input type="text" className="form-control p-2"/>
                                <input type="text" className="form-control p-2"/>
                                <input type="text" className="form-control p-2"/>
                                <input type="text" className="form-control p-2"/>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fs-6">Continue</button>
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

ResetOtpNumber.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default ResetOtpNumber