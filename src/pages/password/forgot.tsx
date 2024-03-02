import Icons from "@/components/Icons"
import Google from 'src/assets/icons/search.png';
import { Fragment, ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { setCookie } from "nookies";
import { COOKIES_USER_RESET_EMAIL } from "@/context/actionTypes";
import ceiscoApi from "@/utils/ceiscoApi";
import { useRouter } from "next/router";
import { Spinner } from "@/components/common/BootstrapCompo";
const ForgotPassword = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [emailError, setEmailError] = useState("")

    const onSubmit = async (e: any) => {
        e.preventDefault()
        if (!email?.trim()) {
            return setEmailError("Enter email address")
        }
        if (!email.includes("@") || !email.includes(".")) {
            return setEmailError("Please enter a valid email address")
        }

        const items = {
            email,
            language: "ENGLISH",
        }

        try {
            setLoading(true)
            const apiRes = await ceiscoApi.Auth.resetPassword(items)
            setCookie(this, COOKIES_USER_RESET_EMAIL, email);
            router.replace({ pathname: '/password/reset', query: { unique_code: apiRes?.data?.unique_code, email } })
        } catch (error: any) {
            alert(error)
            setLoading(false)
        } finally {
        }
    }
    const checkEmailValidation = () => {
        setEmailError("")
    }
    useEffect(checkEmailValidation, [email])
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Forgot Password</h3>
                        <p className="m-0 mb-4">Enter the email address associated with your account.</p>
                    </div>
                </div>
                <form className="text-start" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email Address</label>
                        <input type="email" name="email" className={`form-control p-2 ${emailError ? 'is-invalid' : ''}`} placeholder={`Enter email address`} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className={emailError ? 'invalid-feedback' : ''}>
                            {emailError}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fs-6" disabled={loading}>{loading ? <Spinner /> : "Continue"}</button>
                    <p className="text-center pt-3">
                        <span>Return to</span>
                        <Link href="/signin" className="text-green border-0 text-decoration-none">Sign in</Link>
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