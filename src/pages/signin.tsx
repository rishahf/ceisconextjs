import React, { Fragment, ReactElement, useContext } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import henceforthApi from "@/utils/henceforthApi";
import { COOKIES_USER_ACCESS_TOKEN } from "@/context/actionTypes";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context/Provider";
import { destroyCookie, setCookie } from "nookies"
import { Spinner } from "@/components/common/BootstrapCompo";

const SignIn = () => {

    const router: any = useRouter()
    const { setUserInfo, loginWithFacebook, initLoginWithGoogle, requestNotification, NotificationToast, ...res } = useContext(GlobalContext)
    const [eye, setEye] = React.useState(false);
    const [show, setshow] = React.useState(true)
    const [isPasswordError, setPasswordError] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [rememberMe, setRememberMe] = React.useState(false)
    const [isEmailError, setEmailError] = React.useState("")

    const loginNow = async (accessToken: string, data: any) => {
        debugger
        setUserInfo(null)
        destroyCookie(this, COOKIES_USER_ACCESS_TOKEN, {
            maxAge: 0,
            path: "/",
        });
        if (accessToken) {
            if (rememberMe) {
                setCookie(this, COOKIES_USER_ACCESS_TOKEN, accessToken, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/",
                });
            } else {
                setCookie(this, COOKIES_USER_ACCESS_TOKEN, accessToken, {
                    path: "/",
                });
            }
            setUserInfo(data)
            if (router.asPath?.includes("redirect")) {
                router.replace(router?.query?.redirect)
            } else {
                router.replace('/')
            }
        }
    }

    const signIn = async (e: any) => {
        e.preventDefault();
        if (!email && !password) {
            setEmailError("Email is required")
            setPasswordError("Password is required")
            return
        }
        if (!email.trim()) {
            return setEmailError("Email is required")

        }
        if (!password.trim()) {
            return setPasswordError("Password is required")

        }
        let notificationToken = await requestNotification();
        const items = {
            email,
            password,
            language: "ENGLISH",
        }
        if (notificationToken) {
            items["fcm_token"] = notificationToken;
        }
        try {
            setLoading(true)
            const apiRes = await henceforthApi.Auth.login(items)
            const data = apiRes?.data
            const accessToken = data?.access_token
            await loginNow(accessToken, data)
        } catch (error: any) {
            NotificationToast.error(error)
            setLoading(false)
        }
    }
    const showPassword = () => {
        setEye(true)
        setshow(false)
    }

    const hidePassword = () => {
        setEye(false)
        setshow(true)
    }
    const checkEmailValidation = () => {
        setEmailError("")
    }
    const checkPasswordValidation = () => {
        setPasswordError("")
    }
    // const loginAsUser = async () => {
    //     try {
    //         if (props.user_key && props.access_token) {
    //             const items = {
    //                 _id: props.user_key,
    //                 language:"ENGLISH",
    //             }
    //             henceforthApi.setToken(props.access_token)
    //             const apiRes = await henceforthApi.Auth.loginAsUser(items)
    //             const data = apiRes?.data
    //             const accessToken = data?.access_token
    //             await loginNow(accessToken, data)
    //         }

    //     } catch (error) {

    //     }
    // }

    React.useEffect(() => { initLoginWithGoogle('signinGoogleButton') }, [])
    React.useEffect(checkEmailValidation, [email])
    React.useEffect(checkPasswordValidation, [password])

    // React.useEffect(() => {
    //     loginAsUser()
    // }, [props.user_key && props.access_token])


    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold">Sign In</h3>
                    </div>
                </div>
                <form className="text-start pt-4" onSubmit={signIn}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email Address</label>
                        <input type="email" name="email" className={`form-control p-2 ${isEmailError ? 'is-invalid' : ''}`} placeholder={`Enter email address`} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className={isEmailError ? 'invalid-feedback' : ''}>
                            {isEmailError}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Password</label>
                        <div className="input-group is-invalid">
                            <input type={show ? "password" : "text"} className={`form-control p-2 m-0 ${isPasswordError ? 'is-invalid' : ''}`} placeholder={`Enter password`} aria-label="Username" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className={`input-group-text m-0`} id="basic-addon1" style={{ cursor: 'pointer' }}>
                                {eye ?
                                    <i className="far fa-eye" onClick={hidePassword} ></i> : <i className="fas fa-eye-slash" onClick={showPassword}></i>
                                }
                            </span>
                        </div>
                        <div className={isPasswordError ? "invalid-feedback" : ""}>
                            {isPasswordError}
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 form-check d-flex justify-content-between flex-column flex-sm-row ">
                            <div>
                                <input className="form-check-input" disabled={loading} type="checkbox" name="rememberMe" id="flexCheckDefault" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <div>
                                <a href="/password/forgot" className="text-decoration-none text-green border-0 fs-6 p-0">Forgot Password?
                                </a>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fs-6" disabled={loading}>{ loading ? <Spinner/> : "Login"}</button>
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