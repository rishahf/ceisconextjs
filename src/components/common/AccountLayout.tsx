import React from 'react'

const AccountLayout = (props:any) => {
  return  <section className="py-4">
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

                          <button className="nav-link active pb-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Account Info</button>

                          <button className="nav-link pb-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Save List</button>

                          <button className="nav-link pb-3" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">My Order</button>

                          <button className="nav-link pb-3" id="nav-password-tab" data-bs-toggle="tab" data-bs-target="#nav-password" type="button" role="tab" aria-controls="nav-password" aria-selected="false">Change Password</button>

                          <button className="nav-link pb-3" id="nav-billing-tab" data-bs-toggle="tab" data-bs-target="#nav-billing" type="button" role="tab" aria-controls="nav-billing" aria-selected="false">Change Billing</button>

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