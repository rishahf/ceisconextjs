import Accountimg from "@/assets/images/accound-img.png";
import sweater from "src/assets/images/new-arrivals-img-1.png";
import bat from "src/assets/images/bat.png";
import shorts from "src/assets/images/shorts.png";
import rope from "src/assets/images/rope.png";
import ProductCard from 'src/components/ProductCard';
import Icons from "@/components/Icons";
import Link from "next/link";
import download from 'src/assets/images/download.jpeg';
import download2 from 'src/assets/images/download (1).jpeg';
import download3 from 'src/assets/images/download (2).jpeg';
import download4 from 'src/assets/images/download (3).jpeg';
import download5 from 'src/assets/images/download (4).jpeg';
import Hoodie from 'src/assets/images/trending-section-hoddie.png';
import Cap from 'src/assets/images/trending-section-cap.png';
import Bag2 from 'src/assets/images/trending-section-bag.png';
import Umbrella from 'src/assets/images/trending-section-umbrela.png';
import { ReactElement } from "react";
import RootLayout from "@/layouts/RootLayout";
import AccountLayout from "@/components/common/AccountLayout";
const Account = () => {
    return <div className="tab-pane fade show active pt-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
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
                        <img src={Accountimg.src} alt='accountimg' className="img-fluid" />
                        <div className="choose-file">
                            <button type="button" className="text-center">
                                <Icons.Image />
                                <p className="text-white fs-12">Change Image</p>
                                <input type="file" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label mb-1 fw-medium">Full Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={'Enrico Cole'} />
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Email</label>
                        <div className="input-group mb-3 w-100">
                            <span className="input-group-text" id="basic-addon1"><Icons.Email /></span>
                            <input type="text" className="form-control " placeholder="example@gmail.com" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1 fw-medium">Date Of Birth</label>
                        <div className="input-group mb-3 w-100">
                            <span className="input-group-text" id="basic-addon1"><Icons.Celender /></span>
                            <input type="date" className="form-control " placeholder="example@gmail.com" aria-label="Username" aria-describedby="basic-addon1" />
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
                        <select className="form-select" aria-label="Default select example">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
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
                            <textarea className="form-control" id="floatingTextarea2" style={{ height: 150 }} value={'...'}></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary fs-6 rounded-pill">Update Account</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

Account.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            <AccountLayout>
            {page}
            </AccountLayout>
        </RootLayout>
    )
}

export default Account