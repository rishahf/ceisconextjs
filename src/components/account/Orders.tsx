import React, { ReactElement } from 'react'
import Hoodie from 'src/assets/images/trending-section-hoddie.png';
import Cap from 'src/assets/images/trending-section-cap.png';
import Bag2 from 'src/assets/images/trending-section-bag.png';

const Orders = () => {
    return (
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
    )
}

export default Orders