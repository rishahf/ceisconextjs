import React, { Fragment, ReactElement } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { GlobalContext } from "@/context/Provider";
import { destroyCookie, setCookie } from "nookies";
import { useRouter } from "next/router";
import henceforthValidations from "@/utils/henceforthValidations";
import { COOKIES_USER_ACCESS_TOKEN } from "@/context/actionTypes";
import henceforthApi from "@/utils/henceforthApi";
import { Spinner } from "@/components/common/BootstrapCompo";
const SignUp = () => {


    const router = useRouter()
    const { setUserInfo, loginWithFacebook, initLoginWithGoogle, requestNotification } = React.useContext(GlobalContext)
    const [eye, setEye] = React.useState(false);
    const [show, setshow] = React.useState(true)
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [isEmailError, setEmailError] = React.useState("")
    const [isPasswordError, setPasswordError] = React.useState("")
    const [isPhoneError, setPhoneError] = React.useState("")
    const [isNameError, setNameError] = React.useState("")
    const [state, setState] = React.useState<any>({
        phoneNo: ""
    })
    const PHONE_SLICE = (state?.value?.dialCode?.length);
    const phone_number = (state?.phoneNo?.slice(PHONE_SLICE, state?.phoneNo?.length));
    const showPassword = () => {
        setEye(true)
        setshow(false)
    }

    const hidePassword = () => {
        setEye(false)
        setshow(true)
    }

    const onSignUp = async (e: any) => {
        e.preventDefault()
        if (!name && !email && !password) {
            setNameError("Name is required")
            setEmailError("Email is required")
            setPasswordError("Password is required")
            return
        }
        if (!name.trim()) {
            return setNameError("Name is required")

        }

        if (!email.trim()) {
            return setEmailError("Email is required")

        }
        // if (phone_number && phone_number?.length <= 9 || phone_number?.length >= 12) {
        //     return setPhoneError(props?.please_enter_valid_number)

        // }

        if (!password.trim()) {
            return setPasswordError("Password is required")

        }
        if (password.length < 8) {
            return setPasswordError("Password must be at least 8 characters")

        }
        if (!henceforthValidations.strongPassword(password)) {
            return setPasswordError("Password must contain special characters")
        }
        let notificationToken = await requestNotification();

        const items = {
            name,
            email,
            password: password,
            language: "ENGLISH",
        }
        if (phone_number) {
            items['phone_no'] = phone_number;
        }
        if (state?.value?.dialCode) {
            items['country_code'] = state?.value?.dialCode;
        }
        if (notificationToken) {
            items["fcm_token"] = notificationToken;
        }
        try {
            destroyCookie(this, COOKIES_USER_ACCESS_TOKEN, {
                maxAge: 0,
                path: "/",
            });
            setLoading(true)
            const apiRes = await henceforthApi.Auth.signUp(items)
            const data = apiRes?.data
            const accessToken = data?.access_token
            if (accessToken) {
                setCookie(this, COOKIES_USER_ACCESS_TOKEN, accessToken);
            }
            setUserInfo(data)
            router.replace('/verify/email')
        } catch (error: any) {
            alert(error?.response?.body?.error_description)
            setLoading(false)
        }
    }
    const checkEmailValidation = () => {
        setEmailError("")
    }
    const checkNameValidation = () => {
        setNameError("")
    }
    const checkPasswordValidation = () => {
        setPasswordError("")
    }
    const checkPhoneError = () => {
        setPhoneError("")
    }


    React.useEffect(() => { initLoginWithGoogle('signupGoogleButton') }, [])
    React.useEffect(checkNameValidation, [name])
    React.useEffect(checkEmailValidation, [email])
    React.useEffect(checkPasswordValidation, [password])
    React.useEffect(checkPhoneError, [state?.phoneNo])



    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold">Sign Up</h3>
                    </div>

                </div>
                <form className="text-start pt-4" onSubmit={onSignUp}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Name</label>
                        <input type="text" className={`form-control p-2 ${isNameError ? 'is-invalid' : ''}`} id="validationServer01" placeholder={`Enter name`} value={name} onChange={(e) => setName(e.target.value)} />
                        <div className={isNameError ? "invalid-feedback" : ""}>
                            {isNameError}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email Address</label>
                        <input type="email" name="email" className={`form-control p-2 ${isEmailError ? 'is-invalid' : ''}`} placeholder={`Enter email address`} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className={isEmailError ? 'invalid-feedback' : ''}>
                            {isEmailError}
                        </div>                    </div>
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
                    <button type="submit" className="btn btn-primary w-100 fs-6" disabled={loading}>{loading ? <Spinner /> : "SIGN UP"}</button>
                    <p className="text-center pt-3">
                        <span>Already have an account?</span>
                        <Link href="/signin" className="text-green border-0 text-decoration-none">Login</Link>
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