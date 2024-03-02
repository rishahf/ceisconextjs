import Icons from "@/components/Icons"
import Google from 'src/assets/icons/search.png';
import React, { Fragment, ReactElement, useRef, useState } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context/Provider";
import ceiscoApi from "@/utils/ceiscoApi";
import ceiscoValidations from "@/utils/ceiscoValidations";
import { Spinner } from "@/components/common/BootstrapCompo";

var countdownTimer = null as any;

const ResetOtpEmail = () => {
    const router = useRouter()
    const { userInfo, setUserInfo, language } = React.useContext(GlobalContext)
    const [timerCount, setTimerCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [otpError, setOtpError] = useState("")
    const [otp, setOtp] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: ""
    })
    ceiscoApi.setToken(userInfo?.access_token)

    let inputRef = useRef<any>(null)
    let inputRef1 = useRef<any>(null)
    let inputRef2 = useRef<any>(null)
    let inputRef3 = useRef<any>(null)
    const CodemobileChange = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        if (ceiscoValidations.NumberValidation(value)) {
            setOtp({
                ...otp,
                [name]: value
            })
        }
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
            // setComplete(false)
        }
    }

    const verifyOtp = async (e: any) => {
        e.preventDefault()
        const { input1, input2, input3, input4 } = otp
        const data = {
            otp: `${input1}${input2}${input3}${input4}`,
            language,
        }

        try {
            setLoading(true)
            let apiRes = await ceiscoApi.Auth.emailVerification(data)
            setUserInfo(apiRes?.data)
            // toast.success(apiRes?.data)
            router.replace(`${userInfo?.phone_no && !userInfo.phone_verified ? "/verify/phone" : "/"}`)
        } catch (error: any) {
            var errormsg = error.response.body.error_description
            setOtpError(errormsg)
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
        const items = {
            email: userInfo?.email,
            language,
        }
        try {
            let apiRes = await ceiscoApi.Auth.resendOtp(items)
            // toast.success(apiRes?.data)
            initialiseInterval()

        } catch (error: any) {
            alert(error)
            var errormsg = error.response.body.error_description
            setOtpError(errormsg)
        }
    }

    const checkOtpValidation = () => {
        setOtpError("")
    }
    React.useEffect(checkOtpValidation, [otp])
    return (
        <Fragment>
            {/************ Right Side ***********/}
            <div className="p-4 p-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary fw-bold m-0 mb-3">Please Verify Your Email Id</h3>
                        <p>Enter 4 digit code that you received on your Email</p>
                        <div className="mb-2">
                            {/* <Link className="text-success d-flex align-items-center gap-1" href={''}> */}
                                <span className="text-primary">{userInfo?.email}</span>
                                {/* <Icons.Edit /></Link> */}
                        </div>
                        <form className="text-start auth-form-wrapper" onSubmit={verifyOtp}>
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

ResetOtpEmail.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default ResetOtpEmail