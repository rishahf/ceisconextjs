import Icons from "./Icons";
import Logo from "src/assets/images/logo/logo.svg"
import Link from "next/link";
export default function TheFooter() {
    return (
        <footer className="py-4 border-top">
            <div className="container">
                <div className="row row-cols-2 row-cols-md-5  justify-content-center justify-content-md-between gy-4">
                    <div className="col">
                        <div className="d-flex  flex-column justify-content-center">
                            <div className="mb-2 text-center">
                                <img src={Logo.src} alt="logo" className="img-fluid logo-wrapper" />
                            </div>
                            <div className="d-flex flex-column gap-2 list-unstyled m-0 align-items-center">
                                <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                                    <li>
                                        <a href="https:\\www.facebook.com" className="d-flex gap-2 align-items-center text-decoration-none">
                                            <Icons.Facebook />
                                            <span className="fs-14 text-secondary footer-content-wrapper">
                                                Facebook
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https:\\www.youtube.com" className="d-flex gap-2 align-items-center text-decoration-none">
                                            <Icons.Youtube />
                                            <span className="fs-14 text-secondary footer-content-wrapper">
                                                Youtube
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https:\\www.telegram.com" className="d-flex gap-2 align-items-center text-decoration-none">
                                            <Icons.Telegram />
                                            <span className="fs-14 text-secondary footer-content-wrapper">
                                                Telegram
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https:\\www.twitter.com" className="d-flex gap-2 align-items-center text-decoration-none">
                                            <Icons.Twitter />
                                            <span className="fs-14 text-secondary footer-content-wrapper">
                                                Twitter
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h6 className="fw-bold m-0 mb-2 text-center text-md-start">Quick Links</h6>
                        <div className="d-flex flex-column align-items-center align-items-center align-items-md-start">
                            <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                                <li><Link href="/" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Home</Link></li>
                                <li><Link href="/about" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">About</Link></li>
                                <li><Link href="/contact" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Contact</Link></li>
                                <li><Link href="/blogs" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Blogs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h6 className="fw-bold m-0 mb-2 text-center text-md-start">Getting Started</h6>
                        <div className="d-flex flex-column align-items-center align-items-md-start">
                            <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                                <li><Link href="/auth/login" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Login</Link></li>
                                <li><Link href="/auth/sign_up" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h6 className="fw-bold m-0 mb-2 text-center text-md-start"> Explore</h6>
                        <div className="d-flex flex-column align-items-center align-items-md-start">
                            <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                                <li><Link href="/men" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Men</Link></li>
                                <li><Link href="/women" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Women</Link></li>
                                <li><Link href="/beauty" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Beauty</Link></li>
                                <li><Link href="/sports" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Sports</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h6 className="fw-bold m-0 mb-2">Other</h6>
                        <div className="d-flex flex-column align-items-center align-items-md-start">
                            <ul className="d-flex flex-column gap-2 list-unstyled m-0">
                                <li><Link href="/social-pages/privacy-policy" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Privacy Policy</Link></li>
                                <li><Link href="/social-pages/term-condition" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Term and Conditions</Link></li>
                                <li><Link href="/social-pages/refund-policy" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Refund Policy</Link></li>
                                <li><Link href="/social-pages/cancel-order-policy" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Cancel Order Policy</Link></li>
                                <li><Link href="/social-pages/exchange-order-policy" className="text-decoration-none text-secondary fs-14 footer-content-wrapper">Exchange Order Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}