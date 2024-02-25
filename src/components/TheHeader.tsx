import Link from "next/link";
import Icons from "./Icons";
import Logo from "src/assets/images/logo/logo.svg";
import { Fragment, useContext } from "react";
import { GlobalContext } from "@/context/Provider";

export default function TheHeader() {
  const {userInfo} = useContext(GlobalContext)
  return (
    <Fragment>
      <header className="sticky-top shadow">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link href={"/"}>
                <img src={Logo.src} alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav text-center gap-3 mx-auto d-flex align-items-center">
                  <Link className="nav-link fs-14" href="/men">Men</Link>
                  <Link className="nav-link fs-14" href="/women">Women</Link>
                  <Link className="nav-link fs-14" href="/beauty">Beauty</Link>
                  <Link className="nav-link fs-14" href="/sports">Sports</Link>
                  {/************** dropdown-1 *************/}
                  <div className="dropdown ">
                    <button className="border-0 bg-white text-secondary dropdown-toggle fs-14" data-bs-toggle="dropdown">
                      Explore
                    </button>
                    {/****************** dropdown-menu *****************/}
                    <ul className="dropdown-menu bg-light">
                      <li><Link className="dropdown-item" href="/">Home</Link></li>
                      <li><Link className="dropdown-item" href="/blogs">My Blogs</Link></li>
                      <li><Link className="dropdown-item" href="/checkout">Checkout Page</Link></li>
                      <li><Link className="dropdown-item" href="/heavyshoes">Product Page</Link></li>
                      <li><Link className="dropdown-item" href="/heavyhoddie">Product Page 2</Link></li>
                      <li><Link className="dropdown-item" href="/cart">Cart Page</Link></li>
                    </ul>
                  </div>
                  {/************** dropdown-2 *************/}
                  <div className="dropdown ">
                    <button className="border-0 bg-white text-secondary dropdown-toggle fs-14" data-bs-toggle="dropdown">
                      Others
                    </button>
                    {/****************** dropdown-menu *****************/}
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/about">About</Link></li>
                      <li><Link className="dropdown-item" href="/contact">Contact</Link></li>
                      <li><Link className="dropdown-item" href="/auth/login">Login</Link></li>
                      <li><Link className="dropdown-item" href="/auth/sign_up">Sign Up</Link></li>
                      <li><Link className="dropdown-item" href="/account">Account</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="header-icons d-flex gap-3 justify-content-md-end justify-content-center">
                  <button className="border-0 bg-white"><Icons.Search /></button>


                  {userInfo?.access_token ? <Fragment>
                  <Link className="text-decoration-none" href={'/account/profile'}>
                    <button className="border-0 bg-white"><Icons.User /></button>
                  </Link>
                  <Link className="text-decoration-none" href={'/cart'}>
                    <button className="border-0 bg-white"><Icons.Cart /></button>
                  </Link>
                  </Fragment> :  <><Link className="text-decoration-none" href={'/signup'}><button className="border-0 bg-info rounded-2 p-1 ">SIGN UP</button></Link>
                  <Link className="text-decoration-none" href={'/signin'}><button className="border-0 bg-outline-info rounded-2 p-1 ">SIGN IN</button></Link></>
                  }

                </div>
              </div>
            </div>
          </nav>
        </div>

      </header>
    </Fragment>

  )
}
