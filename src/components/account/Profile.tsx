import Accountimg from "@/assets/images/accound-img.png";
import Icons from "@/components/Icons";
import React, { ReactElement, useContext, useState } from "react";
import RootLayout from "@/layouts/RootLayout";
import AccountLayout from "@/components/common/AccountLayout";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context/Provider";
import henceforthApi from "@/utils/henceforthApi";
import { Spinner } from "../common/BootstrapCompo";
const AccountProfile = (props:any) => {
    console.log(props,'props,,,,profile');

    const router = useRouter()
    const { userInfo, setUserInfo } = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)
    const [state, setState] = React.useState<any>(userInfo)
    const [phoneNo, setPhoneNo] = useState<any>({
        phone: "",
    })
    const [imgLoader, setImgLoader] = useState(false)
    henceforthApi.setToken(userInfo?.access_token)
    const PHONE_SLICE = (phoneNo?.value?.dialCode?.length);
    const phone_number = (phoneNo?.phone?.slice(PHONE_SLICE, phoneNo?.phone?.length));
    const handleFile = async (e: any) => {
        let file = e.target.files[0]
        try {
            setImgLoader(true);
            const fileRes = await henceforthApi.Common.uploadFile('file', file)
            const profile_pic = fileRes.data.file_name
            setState({
                ...state,
                profile_pic
            });
        } catch (error: any) {
            alert(error?.response?.body?.error_description)

        } finally {
            setImgLoader(false);
        }

    };
    const editProfile = async (e: any) => {
        e.preventDefault()
        const { name, phone_no,profile_pic, email,about,date_of_birth, gender } = state;
        let items = {
            name,
            country_code: phoneNo?.value?.dialCode,
            phone_no: Number(phone_number),
            date_of_birth: Number(date_of_birth),
            email,
            profile_pic,
            about,
            gender,
            language:"ENGLISH",
        };
        if (!name.trim()) {
            return alert("Please enter name")
        }
        if (!email.trim()) {
            return alert("Please enter email")
        }
        // if (phone_number && phone_number.length <= 9 || phone_number.length >= 12) {
        //     return alert("Please enter valid phone number")

        // }
        try {
            setLoading(true)
            let apiRes = await henceforthApi.Auth.editProfile(items)
            setUserInfo(apiRes.data)
        } catch (error: any) {
            alert(error?.response?.body?.error_description)
        }finally{
            setLoading(false)

        }
    }



    const handleInput = (e: any) => {
        console.log(e,'e....');
        
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state,
            [name]: value,
        });
    };
    
    return <div>
        <div className="row ">
            <div className="col-md-12">
                <div className="heading text-center">
                    <h2 className="text-primary fw-semibold">Account infomation</h2>
                </div>
            </div>
        </div>
        <div className="row mt-5 justify-content-center d-flex">
            <div className="col-lg-2">
                <div className="d-flex justify-content-center justify-content-lg-start">
                    <div className="account-img-wrapper">
                        <img src={state?.profile_pic ? henceforthApi.FILES.imageOriginal(state?.profile_pic) : Accountimg.src} alt='accountimg' className="img-fluid" />
                        <div className="choose-file">
                            <button type="button" className="text-center">
                                <Icons.Image />
                                <p className="text-white fs-12">Change Image</p>
                                <input type="file" onChange={handleFile}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <form onSubmit={editProfile}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label mb-1 fw-medium">Name</label>
                        <input type="text" placeholder={`Enter name`} className="form-control" disabled={loading} name="name" value={state.name} onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Email</label>
                        <div className="input-group mb-3 w-100">
                            <span className="input-group-text" id="basic-addon1"><Icons.Email /></span>
                            <input type="email" disabled={loading || userInfo?.email_verified} placeholder={`Enter email`} className="form-control" name="email" value={state.email} onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Date Of Birth</label>
                        <div className="input-group mb-3 w-100">
                            <span className="input-group-text" id="basic-addon1"><Icons.Celender /></span>
                            <input type="date" onChange={(e) => handleInput(e)} name="date_of_birth" className="form-control " placeholder="Select Date of birth" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Address</label>
                        <div className="input-group mb-3 w-100">
                            <span className="input-group-text" id="basic-addon1"><Icons.Address /></span>
                            <input type="text" className="form-control " aria-label="Username" aria-describedby="basic-addon1" defaultValue={'New york, USA'} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Gender</label>
                        <select className="form-select" aria-label="Default select example" defaultValue={`${state?.gender ?? "Male"}`}  disabled={loading} name="gender" value={state.gender} onChange={(e) => handleInput(e)}>
                            <option  value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Phone Number</label>
                        <div className="input-group mb-3 w-100">
                            <span className="input-group-text" id="basic-addon1"><Icons.Mobile /></span>
                            <input type="text" className="form-control " justify-content-centeraria-label="Username" aria-describedby="basic-addon1" defaultValue={'003 888 232'} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="floatingTextarea2" className="mb-1 fw-medium">About You</label>
                        <div className="form-floating">
                            <textarea className="form-control" id="floatingTextarea2" style={{ height: 150 }} disabled={loading} name="about" value={state.about} onChange={(e) => handleInput(e)}></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary fs-6 rounded-pill w-25" disabled={loading}>{loading ? <Spinner/> : "Update Account"}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}


export default AccountProfile