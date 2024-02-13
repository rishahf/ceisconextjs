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
const Account = () => {
    return (
        <>
            <section className="py-4">
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
                                    {/*********************** Tab-1 **********************/}
                                    <div className="tab-pane fade show active pt-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
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
                                    {/*********************** Tab-2 **********************/}
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                                        <div>
                                            <div className="row gy-4 justify-content-start justify-content-md-center">
                                                {/* Card-1 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={Hoodie.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title="Leather Gloves"
                                                        subtitle="Perfect Mint Green"
                                                        price="$42.00"
                                                        review="4.7 (35 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>
                                                {/* Card-2 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={Bag2.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>
                                                {/* Card-3 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={Cap.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>
                                                {/* Card-4 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={rope.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>
                                                {/* Card-5 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={sweater.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>

                                                {/* Card-6 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={bat.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>

                                                {/* Card-7 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={shorts.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>

                                                {/* Card-7 ***********/}
                                                <div className="col-sm-6 col-md-4 col-xl-3">
                                                    <ProductCard
                                                        outerimg={Umbrella.src}
                                                        innerimg1={download.src}
                                                        innerimg2={download2.src}
                                                        innerimg3={download3.src}
                                                        innerimg4={download4.src}
                                                        innerimg5={download5.src}
                                                        title=" Mangattan Toy WRT"
                                                        subtitle="New Design 2023"
                                                        price="$30.00"
                                                        review="4.4 (23 Reviews)"
                                                        starticon={<Icons.Star />}
                                                    />
                                                </div>
                                                <div className="mt-4 d-flex justify-content-center">
                                                    <button className="btn btn-outline-secondary d-flex align-items-center gap-2 rounded-pill">Show me more
                                                        <div className="spinner-border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/*********************** Tab-3 **********************/}
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                                        <div>
                                            <div className="row justify-content-center py-4">
                                                <div className="col-md-8">
                                                    <div>
                                                        <h2 className="text-primary fw-bold m-0">Order History</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center gy-4">
                                                <div className="col-md-8">
                                                    <div className="justify-content-center">
                                                        {/**************** Card-1 ***************/}
                                                        <div className="card">
                                                            <div className="card-head d-flex flex-column flex-sm-row justify-content-between align-items-center pb-3 border-bottom p-3">
                                                                <div className="mb-2 m-mb-md-0">
                                                                    <h6 className="fw-bold">#WU3746HGG12</h6>
                                                                    <p className="text-secondary fs-14 pt-2 m-0">Aug 8, 2023 ·
                                                                        <span className="text-blue"> Delivered</span>
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn-outline-secondary rounded-pill">View Order</button>
                                                                </div>
                                                            </div>
                                                            {/*************** Hoodie **************/}
                                                            <div className="row p-3 align-items-center">
                                                                <div className="col-sm-2 col-md-3">
                                                                    <div className="discover-bg-blue text-center">
                                                                        <img src={Hoodie.src} alt="hoodie" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-10 col-md-9">
                                                                    <div className="pt-3 p-pt-md-0">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="title pb-2">
                                                                                <p className="fw-semibold m-0">Rey Nylon Backpack</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-green m-0">$132.00</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="d-flex gap-1 align-items-center text-secondary">
                                                                                <p className="fs-14">Natural</p>
                                                                                <p> | </p>
                                                                                <p className="fs-14">XL</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-secondary">Qty 1</p>
                                                                            <a href="" className="text-decoration-none text-blue fs-14">Leave Review</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            {/*************** Bag **************/}
                                                            <div className="row p-3 align-items-center">
                                                                <div className="col-sm-2 col-md-3">
                                                                    <div className="discover-bg-blue text-center">
                                                                        <img src={Bag2.src} alt="hoodie" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-10 col-md-9">
                                                                    <div className="pt-3 p-pt-md-0">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="title pb-2">
                                                                                <p className="fw-semibold m-0">Round Buckle 1" Belt</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-green m-0">$132.00</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="d-flex gap-1 align-items-center text-secondary">
                                                                                <p className="fs-14">Natural</p>
                                                                                <p> | </p>
                                                                                <p className="fs-14">XL</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-secondary">Qty 1</p>
                                                                            <a href="" className="text-decoration-none text-blue fs-14">Leave Review</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            {/*************** Cap **************/}
                                                            <div className="row p-3 align-items-center">
                                                                <div className="col-sm-2 col-md-3">
                                                                    <div className="discover-bg-blue text-center">
                                                                        <img src={Cap.src} alt="hoodie" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-10 col-md-9">
                                                                    <div className="pt-3 p-pt-md-0">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="title pb-2">
                                                                                <p className="fw-semibold m-0">Waffle Knit Beanie</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-green m-0">$132.00</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="d-flex gap-1 align-items-center text-secondary">
                                                                                <p className="fs-14">Natural</p>
                                                                                <p> | </p>
                                                                                <p className="fs-14">XL</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-secondary">Qty 1</p>
                                                                            <a href="" className="text-decoration-none text-blue fs-14">Leave Review</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="justify-content-center">
                                                        {/**************** Card-2 ***************/}
                                                        <div className="card">
                                                            <div className="card-head flex-column flex-sm-row d-flex justify-content-between align-items-center pb-3 border-bottom p-3 ">
                                                                <div className="mb-2 m-mb-md-0">
                                                                    <h6 className="fw-bold">#WU3746HGG12</h6>
                                                                    <p className="text-secondary fs-14 pt-2 m-0">Aug 8, 2023 ·
                                                                        <span className="text-blue"> Delivered</span>
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <button className="btn btn-outline-secondary rounded-pill">View Order</button>
                                                                </div>
                                                            </div>
                                                            {/*************** Hoodie **************/}
                                                            <div className="row p-3 align-items-center">
                                                                <div className="col-sm-2 col-md-3">
                                                                    <div className="discover-bg-blue text-center">
                                                                        <img src={Hoodie.src} alt="hoodie" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-10 col-md-9">
                                                                    <div className="pt-3 p-pt-md-0">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="title pb-2">
                                                                                <p className="fw-semibold m-0">Rey Nylon Backpack</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-green m-0">$132.00</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="d-flex gap-1 align-items-center text-secondary">
                                                                                <p className="fs-14">Natural</p>
                                                                                <p> | </p>
                                                                                <p className="fs-14">XL</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-secondary">Qty 1</p>
                                                                            <a href="" className="text-decoration-none text-blue fs-14">Leave Review</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            {/*************** Bag **************/}
                                                            <div className="row p-3 align-items-center">
                                                                <div className="col-sm-2 col-md-3">
                                                                    <div className="discover-bg-blue text-center">
                                                                        <img src={Bag2.src} alt="hoodie" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-10 col-md-9">
                                                                    <div className="pt-3 p-pt-md-0">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="title pb-2">
                                                                                <p className="fw-semibold m-0">Round Buckle 1" Belt</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-green m-0">$132.00</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="d-flex gap-1 align-items-center text-secondary">
                                                                                <p className="fs-14">Natural</p>
                                                                                <p> | </p>
                                                                                <p className="fs-14">XL</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-secondary">Qty 1</p>
                                                                            <a href="" className="text-decoration-none text-blue fs-14">Leave Review</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            {/*************** Cap **************/}
                                                            <div className="row p-3 align-items-center">
                                                                <div className="col-sm-2 col-md-3">
                                                                    <div className="discover-bg-blue text-center">
                                                                        <img src={Cap.src} alt="hoodie" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-10 col-md-9">
                                                                    <div className="pt-3 p-pt-md-0">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="title pb-2">
                                                                                <p className="fw-semibold m-0">Waffle Knit Beanie</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-green m-0">$132.00</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="d-flex gap-1 align-items-center text-secondary">
                                                                                <p className="fs-14">Natural</p>
                                                                                <p> | </p>
                                                                                <p className="fs-14">XL</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p className="text-secondary">Qty 1</p>
                                                                            <a href="" className="text-decoration-none text-blue fs-14">Leave Review</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/************************* Tab-4 ************************/}
                                    <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab" tabIndex={0}>
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
                                                        <form>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Current Password</label>
                                                                <input type="password" className="form-control rounded-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                                                <input type="password" className="form-control rounded-4" id="exampleInputPassword1" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                                                <input type="password" className="form-control rounded-4" id="exampleInputPassword1" />
                                                            </div>
                                                            <div className="mt-4">
                                                                <button type="submit" className="btn btn-primary rounded-pill fs-6" >Update Password</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*********************** Tab-5 **********************/}
                                    <div className="tab-pane fade" id="nav-billing" role="tabpanel" aria-labelledby="nav-billing-tab" tabIndex={0}>
                                        <div>
                                            <div className="row justify-content-center justify-content-xl-start ">
                                                <div className="col-md-6">
                                                    <div>
                                                        <div className="section-heading py-4 text-center text-xl-start">
                                                            <h3 className="fw-bold text-primary">Payment & Payouts</h3>
                                                        </div>
                                                        <div className="description text-center text-xl-start">
                                                            <p>When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.</p>
                                                            <p>To get paid, you need to set up a payout method releases payouts about 24 hours after a guest scheduled time. The time it takes for the funds to appear in your account depends on your payout method.<a href="" className="text-black"> Learn more</a></p>
                                                        </div>
                                                        <div className="pt-3 text-center text-xl-start">
                                                            <button className="btn btn-primary rounded-pill fs-6">Add Payout Method</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

Account.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default Account