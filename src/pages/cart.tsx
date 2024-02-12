import Hoodie from '../assets/images/trending-section-hoddie.png';
import Cap from '../assets/images/trending-section-cap.png';
import Bag2 from '../assets/images/trending-section-bag.png';
import Icons from '@/components/Icons';
import sweater from "../assets/images/new-arrivals-img-1.png";
import Purse from '../assets/images/trending-section-purse.png';
import { ReactElement } from 'react';
import RootLayout from '@/layouts/RootLayout';
const Cart = () => {
    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h3 className="fw-bold text-primary">Shopping Cart</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/" className="text-black text-decoration-none">Homepage</a></li>
                                        <li className="breadcrumb-item"><a href="/" className="text-black text-decoration-none">Clothing Categories</a></li>
                                        <li className="breadcrumb-item active text-decoration-underline text-black" aria-current="page">Shopping Cart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top mt-4">
                        {/************* Right-Side ************/}
                        <div className="col-12 col-lg-6">
                            <div className="pt-5 p-3">
                                <div className="row mb-4">
                                    {/**************** Hoodie ***************/}
                                    <div className="col-md-3">
                                        <div className="discover-bg-blue text-center text-md-start mb-3 mb-md-0">
                                            <img src={Hoodie.src} alt="hoodie" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div>
                                            <div className="d-flex flex-column align-items-center h-100 flex-md-row justify-content-between align-items-center">
                                                <div className="title mb-1">
                                                    <p className="fw-semibold m-0">Rey Nylon Backpack</p>
                                                </div>
                                                <div className="counter-wrapper d-flex bg-white mb-2">
                                                    <button className="rounded-circle border-0">&#8722;</button>
                                                    <input type="text" defaultValue={"1"} className="bg-white" />
                                                    <button className="rounded-circle border-0">&#43;</button>
                                                </div>
                                                <div className='d-flex align-items-center gap-2 justify-content-center mb-2'>
                                                    <div>
                                                        <p className="text-green m-0">$74.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-center justify-content-md-start align-items-center mb-3">
                                                <div className="d-flex gap-1 align-items-center text-secondary">
                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Color />
                                                        <p className="fs-14 m-0">Black</p>
                                                    </div>

                                                    <p className='m-0'> | </p>

                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Size />
                                                        <p className="fs-14 m-0">2XL</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-secondary fs-14 m-0">In Stoke</p>
                                                <a href="" className="text-decoration-none text-blue fs-14">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='text-secondary' />
                                <div className="row mb-4">
                                    {/**************** bag ***************/}
                                    <div className="col-md-3">
                                        <div className="discover-bg-blue text-center text-md-start mb-3 mb-md-0">
                                            <img src={Bag2.src} alt="hoodie" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div>
                                            <div className="d-flex flex-column align-items-center h-100 flex-md-row justify-content-between align-items-center">
                                                <div className="title mb-1">
                                                    <p className="fw-semibold m-0">Round Buckle 1" Belt</p>
                                                </div>
                                                <div className="counter-wrapper d-flex bg-white mb-2">
                                                    <button className="rounded-circle border-0">&#8722;</button>
                                                    <input type="text" defaultValue={"1"} className="bg-white" />
                                                    <button className="rounded-circle border-0">&#43;</button>
                                                </div>
                                                <div className='d-flex align-items-center gap-2 justify-content-center mb-2'>
                                                    <div>
                                                        <p className="text-green m-0">$74.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-center justify-content-md-start align-items-center mb-3">
                                                <div className="d-flex gap-1 align-items-center text-secondary">
                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Color />
                                                        <p className="fs-14 m-0">Black</p>
                                                    </div>

                                                    <p className='m-0'> | </p>

                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Size />
                                                        <p className="fs-14 m-0">2XL</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-secondary fs-14 m-0">In Stoke</p>
                                                <a href="" className="text-decoration-none text-blue fs-14">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='text-secondary' />
                                <div className="row mb-4">
                                    {/**************** Cap ***************/}
                                    <div className="col-md-3">
                                        <div className="discover-bg-blue text-center text-md-start mb-3 mb-md-0">
                                            <img src={Cap.src} alt="hoodie" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div>
                                            <div className="d-flex flex-column align-items-center h-100 flex-md-row justify-content-between align-items-center">
                                                <div className="title mb-1">
                                                    <p className="fw-semibold m-0">Waffle Knit Beanie</p>
                                                </div>
                                                <div className="counter-wrapper d-flex bg-white mb-2">
                                                    <button className="rounded-circle border-0">&#8722;</button>
                                                    <input type="text" defaultValue={"1"} className="bg-white" />
                                                    <button className="rounded-circle border-0">&#43;</button>
                                                </div>
                                                <div className='d-flex align-items-center gap-2 justify-content-center mb-2'>
                                                    <div>
                                                        <p className="text-green m-0">$74.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-center justify-content-md-start align-items-center mb-3">
                                                <div className="d-flex gap-1 align-items-center text-secondary">
                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Color />
                                                        <p className="fs-14 m-0">Black</p>
                                                    </div>

                                                    <p className='m-0'> | </p>

                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Size />
                                                        <p className="fs-14 m-0">2XL</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-secondary fs-14 m-0">In Stoke</p>
                                                <a href="" className="text-decoration-none text-blue fs-14">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='text-secondary' />
                                <div className="row mb-4">
                                    {/**************** Purse ***************/}
                                    <div className="col-md-3">
                                        <div className="discover-bg-blue text-center text-md-start mb-3 mb-md-0">
                                            <img src={Purse.src} alt="hoodie" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div>
                                            <div className="d-flex flex-column align-items-center h-100 flex-md-row justify-content-between align-items-center">
                                                <div className="title mb-1">
                                                    <p className="fw-semibold m-0">Rey Nylon Backpack</p>
                                                </div>
                                                <div className="counter-wrapper d-flex bg-white mb-2">
                                                    <button className="rounded-circle border-0">&#8722;</button>
                                                    <input type="text" defaultValue={"1"} className="bg-white" />
                                                    <button className="rounded-circle border-0">&#43;</button>
                                                </div>
                                                <div className='d-flex align-items-center gap-2 justify-content-center mb-2'>
                                                    <div>
                                                        <p className="text-green m-0">$74.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-center justify-content-md-start align-items-center mb-3">
                                                <div className="d-flex gap-1 align-items-center text-secondary">
                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Color />
                                                        <p className="fs-14 m-0">Black</p>
                                                    </div>

                                                    <p className='m-0'> | </p>

                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Size />
                                                        <p className="fs-14 m-0">2XL</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-secondary fs-14 m-0">In Stoke</p>
                                                <a href="" className="text-decoration-none text-blue fs-14">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='text-secondary' />
                                <div className="row mb-4">
                                    {/**************** Sweater ***************/}
                                    <div className="col-md-3">
                                        <div className="discover-bg-blue text-center text-md-start mb-3 mb-md-0">
                                            <img src={sweater.src} alt="hoodie" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div>
                                            <div className="d-flex flex-column align-items-center h-100 flex-md-row justify-content-between align-items-center">
                                                <div className="title mb-1">
                                                    <p className="fw-semibold m-0">Leather Gloves</p>
                                                </div>
                                                <div className="counter-wrapper d-flex bg-white mb-2">
                                                    <button className="rounded-circle border-0">&#8722;</button>
                                                    <input type="text" defaultValue={"1"} className="bg-white" />
                                                    <button className="rounded-circle border-0">&#43;</button>
                                                </div>
                                                <div className='d-flex align-items-center gap-2 justify-content-center mb-2'>
                                                    <div>
                                                        <p className="text-green m-0">$74.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-center justify-content-md-start align-items-center mb-3">
                                                <div className="d-flex gap-1 align-items-center text-secondary">
                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Color />
                                                        <p className="fs-14 m-0">Black</p>
                                                    </div>

                                                    <p className='m-0'> | </p>

                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <Icons.Size />
                                                        <p className="fs-14 m-0">2XL</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-secondary fs-14 m-0">In Stoke</p>
                                                <a href="" className="text-decoration-none text-blue fs-14">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/************* Middle-part ************/}
                        <div className="col-1 p-0">
                            <div className="d-flex flex-column align-items-center h-100 pt-5">
                                <div className="divider-checkout h-100">

                                </div>
                            </div>
                        </div>
                        {/************* Left-Side ************/}
                        <div className="col-12 col-lg-5">
                            <div className='pt-4 sticky-top z-1'>
                                <div>
                                    <h5 className='text-primary fw-bold'>Order Summary</h5>
                                </div>
                                <div className="d-flex justify-content-between mt-5">
                                    <ul className="list-unstyled d-flex flex-column gap-3 w-100">
                                        <div className='d-flex justify-content-between w-100'>
                                            <li className="text-secondary">Subtotal</li>
                                            <li className="fw-semibold">$249.00</li>
                                        </div>
                                        <hr className='m-0' />
                                        <div className='d-flex justify-content-between'>
                                            <li className="text-secondary">Shipping estimate</li>
                                            <li className="fw-semibold">$5.00</li>
                                        </div>
                                        <hr className='m-0' />
                                        <div className='d-flex justify-content-between'>
                                            <li className="text-secondary">Tax estimate</li>
                                            <li className="fw-semibold">$24.00</li>
                                        </div>
                                        <hr className='m-0' />
                                        <div className='d-flex justify-content-between'>
                                            <li className="fw-semibold">Order total</li>
                                            <li className="fw-semibold">$276.00</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-primary rounded-pill fs-6 w-100">Checkout</button>
                                    <div className="d-flex gap-2 align-items-center mt-3 justify-content-center">
                                        <Icons.Alert />
                                        <p className="m-0 text-secondary">Learn More <a href={''} className="text-black">Taxes</a> and <a href="" className="text-black"> Shipping </a>information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Cart.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
export default Cart