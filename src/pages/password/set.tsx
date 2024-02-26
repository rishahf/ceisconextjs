import { Spinner } from '@/components/common/BootstrapCompo'
import { GlobalContext } from '@/context/Provider'
import AuthLayout from '@/layouts/AuthLayout'
import henceforthApi from '@/utils/henceforthApi'
import henceforthValidations from '@/utils/henceforthValidations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, ReactElement, useState } from 'react'

const SetNewPassword = () => {

    const router = useRouter()
    const { unique_code } = router.query
    const { userInfo, language, NotificationToast } = React.useContext(GlobalContext)
    const [eye, setEye] = React.useState(true);
    const [eye1, setEye1] = React.useState(true);
    const [isPasswordError, setPasswordError] = useState("")
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [loading, setLoading] = useState(false)
    henceforthApi.setToken(userInfo?.access_token)

    const checkPassLenVal = () => {
        setPasswordError("")
    }
    const checkpassMatch = () => {
        setIsConfirmPasswordError("")
    }
    const handlePassword = async (e: any) => {
        e.preventDefault();
        if (!newPassword && !confirmPassword) {
            setIsConfirmPasswordError("Please enter confirm password")
            setPasswordError("Please enter new password")
            return
        }
        if (!newPassword.trim()) {
            return setPasswordError("Please enter new password")
        }
        if (!confirmPassword.trim()) {
            return setIsConfirmPasswordError("Please enter confirm password")
        }
        if (newPassword.length < 8) {
            setPasswordError("Password must be at least 8 characters")
            return
        }
        if (!henceforthValidations.strongPassword(newPassword)) {
            return setPasswordError("Password must contain at least one special character upper case characters lower case characters & numbers")
        }
        if (newPassword !== confirmPassword) {
            setIsConfirmPasswordError("Password not match")
            return
        }

        const data = {
            unique_code: unique_code,
            password: confirmPassword,
            language,
        }
        try {
            setLoading(true)
            let apiRes = await henceforthApi.Auth.forgotChangePassword(data)
            setLoading(false)
            NotificationToast.success(apiRes?.data?.message)
            router.replace('/signin')
        } catch (error: any) {
            NotificationToast.error(error.response.body.error_description)

        }
    }

    React.useEffect(checkPassLenVal, [newPassword])
    React.useEffect(checkpassMatch, [confirmPassword])
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Set New Password</h3>
                        {/* <p className="m-0 mb-4">Enter the email address or mobile number associated with your account.</p> */}
                    </div>
                </div>
                <form className="text-start" onSubmit={handlePassword}>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">New Password</label>
                        {/* <input type="password" className="form-control p-2" placeholder="Enter new password" /> */}
                        <div className="input-group is-invalid">
                            <input type={eye ? 'password' : 'text'} className={`form-control ${isPasswordError ? "is-invalid" : ""} `} placeholder="Enter new password" name="old_password" onChange={(e) => setNewPassword(e.target.value)} />
                            <span className="input-group-text m-0" id="basic-addon1" onClick={() => setEye(!eye)}>
                                {eye ?
                                    <i className="far fa-eye"></i> : <i className="fas fa-eye-slash"></i>
                                }
                            </span>
                        </div>
                        <div className={isPasswordError ? 'invalid-feedback' : ''}>
                            {isPasswordError}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">New Password</label>
                        {/* <input type="password" className="form-control p-2" placeholder="Enter new password" /> */}
                        <div className="input-group is-invalid">
                            <input type={eye1 ? 'password' : 'text'} className={`form-control ${isConfirmPasswordError ? "is-invalid" : ""} `} placeholder="Enter new password" name="new_password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <span className="input-group-text m-0" id="basic-addon1" onClick={() => setEye1(!eye1)}>
                                {eye1 ?
                                    <i className="far fa-eye"></i> : <i className="fas fa-eye-slash"></i>
                                }
                            </span>
                        </div>

                        <div className={isConfirmPasswordError ? "invalid-feedback d-block" : ""}>
                            {/* invalid-feedback */}
                            {isConfirmPasswordError}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Confirm Password</label>
                        <input type="password" className="form-control p-2" placeholder="Enter confirm password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fs-6" disabled={loading}>{loading ? <Spinner /> : "Continue"}</button>
                </form>
            </div>
        </Fragment>
    )
}
SetNewPassword.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}
export default SetNewPassword