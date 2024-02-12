
import { Fragment } from "react"
import Logo from '@/assets/images/logo/logo.svg';
import Link from "next/link";
const AuthLayout = (props: any) => {
    return (
        <Fragment>
            <section className="vh-100">
                <div className="container-fluid h-100 p-0">
                    <div className="row justify-content-between gx-0 h-100">
                        {/************ Left Side ***********/}
                        <div className="col-md-6">
                            <div className="h-100 login-bg-img d-flex align-items-center position-relative">
                                <div className="container">
                                    <div className="logo">
                                        <Link href={'/'}>
                                            <img src={Logo.src} alt="logo" className="img-fluid auth-logo" />
                                        </Link>
                                    </div>
                                    <div className="position-relative z-1 p-4 p-md-5">
                                        <h2 className="text-white fw-bold">Welcome Back!</h2>
                                        <p className="text-white">We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/************ Right Side ***********/}
                        <div className="col-md-6 align-self-center">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AuthLayout