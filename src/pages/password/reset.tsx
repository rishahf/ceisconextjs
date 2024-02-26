import Icons from "@/components/Icons"
import Google from 'src/assets/icons/search.png';
import React, { Fragment, ReactElement, useRef, useState } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import henceforthApi from "@/utils/henceforthApi";
import { GlobalContext } from "@/context/Provider";
import { useRouter } from "next/router";
import { Spinner } from "@/components/common/BootstrapCompo";
var countdownTimer = null as any;

const ResetPassword = (props: any) => {
    const router = useRouter()
    const { unique_code, email } = router.query
    const { userInfo, handleError, NotificationToast } = React.useContext(GlobalContext)
    const [loading, setLoading] = useState(false)
    const [otpLoading, setOptLoading] = useState(false)
    const [otpError, setOtpError] = useState("")
    const [timerCount, setTimerCount] = useState(0)

    const [otp, setOtp] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: ""
    })
    henceforthApi.setToken(userInfo?.access_token)


    let inputRef = useRef<any>(null)
    let inputRef1 = useRef<any>(null)
    let inputRef2 = useRef<any>(null)
    let inputRef3 = useRef<any>(null)
    const CodemobileChange = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        setOtp({
            ...otp,
            [name]: value
        })
    }
    const onClick = (value: any) => {
        if (value) {
            inputRef1.current.focus()
        }
        else {
            inputRef.current.focus()
        }
    }
    const onClick1 = (value: any) => {
        if (value) {
            inputRef2.current.focus()
        }
        else {
            inputRef.current.focus()
        }
    }
    const onClick2 = (value: any) => {
        if (value) {
            inputRef3.current.focus()
        }
        else (inputRef1.current.focus())
    }
    const onClick3 = (value: any) => {
        if (value) {
            inputRef3.current.focus();
        }
        else {
            inputRef2.current.focus();
        }
    }

    const handleVerifyOtp = async (e: any) => {
        e.preventDefault();
        const { input1, input2, input3, input4 } = otp
        const data = {
            unique_code: unique_code,
            otp: `${input1}${input2}${input3}${input4}`,
            language: "ENGLISH",
        }
        try {
            setLoading(true)
            let apiRes = await henceforthApi.Auth.verifyOtp(data)
            setLoading(false)
            NotificationToast.success(apiRes?.data)
            router.replace({ pathname: '/password/set', query: { unique_code: apiRes?.data?.unique_code } })
        } catch (error: any) {
            NotificationToast.error(error.response.body.error_description)
            setOtpError(error.response.body.error_description)
            setLoading(false)
        }
    }
    const initialiseInterval = () => {
        var _second = 30
        function timer() {
            if (_second < 1) {
                clearInterval(countdownTimer);
                countdownTimer = null
                return;
            } else {
                _second -= 1
            }
            setTimerCount(_second)
        }
        countdownTimer = setInterval(() => timer(), 1000);
    }
    const resendOtp = async () => {
        if (otpLoading) {
            return
        }
        const items = {
            unique_code,
            language: "ENGLISH",
        }
        try {
            setOptLoading(true)
            const apiRes = await henceforthApi.Auth.resendOtpForForgotPassword(items)
            NotificationToast.success(apiRes?.message)
            initialiseInterval()

        } catch (error: any) {
            handleError(error)
        } finally {
            setOptLoading(false)
        }
    }
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-1">Reset Password</h3>
                        <p>Enter 4 digit code that you received on your Email</p>
                        <div className="mb-0">
                            {/* <Link className="text-success d-flex align-items-center gap-1" href={''}> */}
                            <span className="text-primary">
                                {router.query?.email}</span>
                            {/* <Icons.Edit /></Link> */}
                        </div>
                        <form className="text-start auth-form-wrapper" onSubmit={handleVerifyOtp}>
                            <div className="mb-4 d-flex gap-3 reset-otp-wrapper">
                                <input type="text" ref={inputRef} autoFocus className={`form-control ${otpError ? "is-invalid " : ""} `} onChange={(e) => { onClick(e.target.value); CodemobileChange(e) }} name="input1" value={otp.input1} required maxLength={1} />
                                <input ref={inputRef1} type="text" className={`form-control ${otpError ? "is-invalid " : ""} `} maxLength={1} onChange={(e) => { onClick1(e.target.value); CodemobileChange(e) }} name="input2" value={otp.input2} required />
                                <input ref={inputRef2} type="text" className={`form-control ${otpError ? "is-invalid " : ""} `} maxLength={1} onChange={(e) => { onClick2(e.target.value); CodemobileChange(e) }} name="input3" value={otp.input3} required />
                                <input ref={inputRef3} type="text" className={`form-control ${otpError ? "is-invalid " : ""} `} maxLength={1} onChange={(e) => { onClick3(e.target.value); CodemobileChange(e) }} name="input4" value={otp.input4} required />
                                <div className={otpError ? "invalid-feedback d-block text-center" : ""}>
                                    {otpError}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fs-6" disabled={loading}>{loading ? <Spinner /> : 'Submit'}</button>
                            {timerCount ?
                                <p className="pt-3">
                                    <span>Resend code in :</span>
                                    <span className="text-success border-0 ms-1">{timerCount}s</span>
                                </p> : <p className="pt-3">
                                    <span role="button" onClick={resendOtp}>Resend code</span>
                                </p>}
                        </form>
                    </div>
                </div>

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