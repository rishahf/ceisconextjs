import { GlobalContext } from '@/context/Provider';
import henceforthApi from '@/utils/henceforthApi';
import React, { ReactElement, useContext } from 'react'
import { Spinner } from '../common/BootstrapCompo';
import { useRouter } from 'next/router';

const Changepassword = () => {

    const router = useRouter()
    const [eye1, setEye1] = React.useState(true);
    const [eye2, setEye2] = React.useState(true);
    const [eye3, setEye3] = React.useState(true);
    const { userInfo } = useContext(GlobalContext)
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [state, setState] = React.useState({
        old_password: "",
        new_password: "",
        language: "ENGLISH",
    });
    const [oldPasswordError, setOldPasswordError] = React.useState("")
    const [newPasswordError, setNewPasswordError] = React.useState("")
    const [confPasswordError, setConfPasswordError] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const handlePassword = async (e: any) => {
        e.preventDefault()
        const { old_password, new_password } = state;
        let items = {
            old_password: old_password,
            new_password: new_password,
            language: "ENGLISH",
        };
        if (!old_password && !new_password && !confirmPassword) {
            setOldPasswordError("Old password is required")
            setNewPasswordError("New password is required")
            setConfPasswordError("Confirm Password is required")
            return
        }
        if (!new_password.trim()) {
            return setNewPasswordError("New password is required")
        }
        if (!old_password.trim()) {
            return setOldPasswordError("Old password is required")
        }
        if (new_password.length <= 8) {
            return setNewPasswordError("New password should be at least 8 characters")
        }
        if (!confirmPassword.trim()) {
            return setConfPasswordError("Confirm Password is required")
        }
        try {
            if (confirmPassword === new_password) {
                setLoading(true)
                let apiRes = await henceforthApi.Auth.changePassword(items)
                setState({
                    old_password: "",
                    new_password: "",
                    language: "ENGLISH",
                })
                router.replace(`/account/profile`)
                setLoading(false)
                alert(apiRes?.message)
            }
            else {
                setConfPasswordError("Password not match")
            }

        } catch (error: any) {
            setLoading(false)
            alert(error?.response?.body?.error_description)
        } finally {

        }
    }
    const handleInput = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state,
            [name]: value,
        });
    };
    const checkPasswordValidation = () => {
        setConfPasswordError("")
    }
    const checkOldPasswordValidation = () => {
        setOldPasswordError("")
    }
    const checkNewPasswordValidation = () => {
        setNewPasswordError("")
    }
    React.useEffect(checkPasswordValidation, [confirmPassword])
    React.useEffect(checkOldPasswordValidation, [state.old_password])
    React.useEffect(checkNewPasswordValidation, [state.new_password])



    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="py-4 text-xl-start text-sm-center">
                        <h3 className="text-primary fw-bold">Update Your Password</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-xl-start justify-content-md-center">
                <div className="col-md-6">
                    <div>
                        <form onSubmit={handlePassword} autoComplete='off'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Current Password</label>
                                <div className={`input-group ${oldPasswordError ? "is-invalid" : ""} `}>
                                    <input type='text' autoComplete="off" className={`form-control rounded-4 ${oldPasswordError ? "is-invalid" : ""}`} placeholder={`Current password`} name="old_password" onChange={(e) => handleInput(e)} disabled={loading} />
                                    <div className={oldPasswordError ? "invalid-feedback" : ""}>
                                        {oldPasswordError}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                <div className="input-group is-invalid">
                                    <input type='password' autoComplete="off" className={`form-control rounded-4 ${newPasswordError ? "is-invalid" : ""}`} placeholder={`New password`} name="new_password" onChange={(e) => handleInput(e)} disabled={loading} />
                                    <div className={newPasswordError ? "invalid-feedback" : ""}>
                                        {newPasswordError}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <div className="input-group is-invalid">
                                    <input type='password' autoComplete="off" className={`form-control rounded-4 ${confPasswordError ? "is-invalid" : ""}`} placeholder={`Confirm password`} name="new_password" onChange={(e) => { setConfirmPassword(e.target.value) }} disabled={loading} value={confirmPassword} />
                                    <div className={confPasswordError ? "invalid-feedback" : ""}>
                                        {confPasswordError}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary rounded-pill fs-6 w-25" >{loading ? <Spinner /> : "Update Password"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Changepassword