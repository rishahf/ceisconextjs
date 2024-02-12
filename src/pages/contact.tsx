import Icons from "@/components/Icons"
import logo from '../assets/images/logo/logo.svg';
import moneyimg from '@/assets/images/earn-money.png';
import { ReactElement } from "react";
import RootLayout from "@/layouts/RootLayout";
const Contact = () => {
    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading text-center mb-5">
                                <h1 className="fw-semibold">Contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-md-6">
                            <div className="pb-2">
                                <h6>&#128506;&#65039; ADDRESS</h6>
                                <p className="text-secondary">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="pb-2">
                                <h6>&#128140; Email</h6>
                                <p className="text-secondary">nc.example@example.com</p>
                            </div>
                            <div className="pb-2">
                                <h6>&#9742;&#65039;Phone</h6>
                                <p className="text-secondary">000-123-456-7890</p>
                            </div>
                            <div>
                                <h6 className="pb-1">&#127759;SOCIALS</h6>
                                <div className="d-flex flex-row gap-2">
                                    <Icons.Facebook />
                                    <Icons.Twitter />
                                    <Icons.Youtube />
                                    <Icons.Telegram />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="d-flex flex-column gap-2">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Full Name</label>
                                    <input type="email" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example Doe" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Email Address</label>
                                    <input type="email" className="rounded-3 form-control" id="exampleInputPassword1" placeholder="example@gmail.com" />
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control rounded-4" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 150 }} ></textarea>
                                    <label htmlFor="floatingTextarea2" className="fw-semibold">Message</label>
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-primary rounded-pill fs-6">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <section className="py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className='text-center text-md-start pt-3'>
                                <a href='/' className="logo">
                                    <img src={logo.src} alt="logo" className='logo-wrapper img-fluid' />
                                </a>
                                {/* Left-side */}
                                <div className='content pt-3'>
                                    <h2 className='fw-bold text-primary'>Earn free money with Ciseco</h2>
                                    <p className='text-secondary py-3'>With Ciseco you will get freeship & savings combo...</p>
                                    <div className='d-flex gap-3 flex-column flex-lg-row text-center text-md-start pb-3'>
                                        <div>
                                            <button className='btn btn-primary rounded-pill btn-lg'>Savings combo</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-success rounded-pill btn-lg'>Discover more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-1">
                            <img src={moneyimg.src} alt="moneyimg" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default Contact