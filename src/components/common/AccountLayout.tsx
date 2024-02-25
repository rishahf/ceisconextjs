import { useRouter } from 'next/router'
import React from 'react'

const AccountLayout = (props: any) => {
    const router = useRouter()
    return <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading text-center text-md-start">
                        <h1 className="fw-semibold text-primary">Account</h1>
                        <p>
                            Enrico Cole,
                            <span className="text-secondary"> ciseco@gmail.com · Los Angeles, CA </span>
                        </p>
                    </div>
                    <hr className="text-secondary" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {/******************************* Tabs ******************************/}
                    <div>
                        <nav>
                            <div className="nav nav-tabs overflow-auto flex-nowrap text-nowrap" id="nav-tab" role="tablist">
                                <button className={`nav-link ${router.query.type == "profile" ? "active" : ""} pb-3`} onClick={() => router.push(`/account/profile`)} type="button" >My account</button>
                                <button className={`nav-link ${router.query.type == "wishlist" ? "active" : ""} pb-3`} onClick={() => router.push(`/account/wishlist`)} type="button" >Save List</button>
                                <button className={`nav-link ${router.query.type == "orders" ? "active" : ""} pb-3`} onClick={() => router.push(`/account/orders`)} type="button" >My order</button>
                                <button className={`nav-link ${router.query.type == "changepassword" ? "active" : ""} pb-3`} onClick={() => router.push(`/account/changepassword`)} type="button" >Change Password</button>
                                <button className={`nav-link ${router.query.type == "payment" ? "active" : ""} pb-3`} onClick={() => router.push(`/account/payment`)} type="button" >Change Billing</button>
                            </div>
                        </nav>
                        {/****************** tab content ******************/}
                        <div className="tab-content" id="nav-tabContent">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}

export default AccountLayout