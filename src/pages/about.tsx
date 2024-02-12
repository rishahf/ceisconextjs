import { Fragment, ReactElement } from "react"
import Hero from '../assets/images/about-section-hero-img.png';
import Founderimg1 from '../assets/images/founder-img-1.avif';
import Founderimg2 from '../assets/images/founder-img-2.avif';
import Founderimg3 from '../assets/images/founder-img-3.avif';
import Founderimg4 from '../assets/images/founder-img-4.avif';
import goodnewsimg1 from '../assets/images/good-news-section-img1.png';
import goodnewsimg2 from '../assets/images/good-news-section-img2.png';
import goodnewsimg3 from '../assets/images/good-news-section-img3.png';
import goodnewsimg4 from '../assets/images/good-news-section-img4.png';
import goodnewsimg5 from '../assets/images/good-news-section-img5.png';
import specialoffers from '../assets/images/special offers.png';
import Icons from '@/components/Icons';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import RootLayout from "@/layouts/RootLayout";
const About = () => {
    return (
        <Fragment>
            <section className="d-flex align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row align-items-center gy-3">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="section-heading text-center text-md-start">
                                <h1 className="pb-2 fw-bold"> &#x1F44B; About Us.</h1>
                                <p className="text-secondary">We&#39;re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-1">
                            <img src={Hero.src} alt="hero img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Founder *********/}
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center text-md-start">
                                <h2 className="fw-semibold">🏖️ Foundeer</h2>
                                <p className="text-secondary">Were&#39; impartial and independent, and every day we create distinctive, world-class programmes and content</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-start justify-content-md-center">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <img src={Founderimg1.src} alt="founder" className="img-fluid founder-img-wrapper" />
                            <div className="pt-2 text-center text-lg-start">
                                <h5 className="m-0">Niamh O'Shea</h5>
                                <p className="text-secondary m-0 fs-14">Co-founder and Chief Executive</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <img src={Founderimg2.src} alt="founder" className="img-fluid founder-img-wrapper" />
                            <div className="pt-2 text-center text-lg-start">
                                <h5 className="m-0">Danien Jame</h5>
                                <p className="text-secondary m-0 fs-14">Co-founder and Chief Executive</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <img src={Founderimg3.src} alt="founder" className="img-fluid founder-img-wrapper" />
                            <div className="pt-2 text-center text-lg-start">
                                <h5 className="m-0">Orla Dwyer</h5>
                                <p className="text-secondary m-0 fs-14">Co-founder, Chairman</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <img src={Founderimg4.src} alt="founder" className="img-fluid founder-img-wrapper" />
                            <div className="pt-2 text-center text-lg-start">
                                <h5 className="m-0">Dara Frazier</h5>
                                <p className="text-secondary m-0 fs-14">Co-Founder, Chief Strategy Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Good News *********/}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='section-heading text-center pb-4'>
                                <h2>Good news from far away &#129351;</h2>
                                <p className='text-secondary'>Let's see what people think of Ciseco</p>
                            </div>
                            <div className='d-flex justify-content-around align-items-center pb-5'>
                                <div>
                                    <img src={goodnewsimg1.src} alt="image-1" className='img-fluid' />
                                </div>

                                <div>
                                    <img src={goodnewsimg2.src} alt="image-1" className='img-fluid' />
                                </div>

                                <div>
                                    <img src={goodnewsimg3.src} alt="image-1" className='img-fluid' />
                                </div>
                            </div>
                            <div className='swiper text-center d-flex'>
                                <Swiper className="mySwiper">
                                    <SwiperSlide className='justify-content-center d-flex'>
                                        <Icons.Quoteleft />
                                        <div className="col-md-6">
                                            <h4>Great quality products, affordable prices, fast and friendly delivery. I very recommend.</h4>
                                            <h4 className='fw-bold'>Tiana Abie</h4>
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                        </div>
                                        <Icons.Quoteright />
                                    </SwiperSlide>
                                    <SwiperSlide className='justify-content-center d-flex'>
                                        <Icons.Quoteleft />
                                        <div className="col-md-6">
                                            <h4>Great quality products, affordable prices, fast and friendly delivery. I very recommend.</h4>
                                            <h4 className='fw-bold'>Lennie Swiffan</h4>
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                        </div>
                                        <Icons.Quoteright />
                                    </SwiperSlide>
                                    <SwiperSlide className='justify-content-center d-flex'>
                                        <Icons.Quoteleft />
                                        <div className="col-md-6">
                                            <h4>Great quality products, affordable prices, fast and friendly delivery. I very recommend.</h4>
                                            <h4 className='fw-bold'>Berta Emili</h4>
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                            <Icons.Star />
                                        </div>
                                        <Icons.Quoteright />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <img src={goodnewsimg4.src} alt="img" className='img-fluid' />
                                </div>
                                <div>
                                    <img src={goodnewsimg5.src} alt="img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fast fact **********/}
            <section className="py-4">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 p-0">
                            <div className="heading text-center text-md-start">
                                <h2 className="fw-semibold">&#128640; Fast Fect</h2>
                                <p className="text-secondary">Were&#39; impartial and independent, and every day we create distinctive, world-class programmes and content</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-4 p-0">
                            <div className="me-md-2 text-center text-md-start">
                                <h3 className="fw-bold">10 million</h3>
                                <p className="text-secondary">Articles have been public around the world (as of Sept. 30, 2021)</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="mx-md-2 text-center text-md-start">
                                <h3 className="fw-bold">100,000</h3>
                                <p className="text-secondary">Registered users account (as of Sept. 30, 2021)</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ms-md-2 text-center text-md-start">
                                <h3 className="fw-bold">220+</h3>
                                <p className="text-secondary">Countries and regions have our presence (as of Sept. 30, 2021)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-4'>
                <div className="container choosen-bg-color px-4">
                    <div className="row align-items-center">
                        {/* Left Side */}
                        <div className="col-md-6">
                            <div className="content">
                                <div className="p-2 text-center text-md-start">
                                    <h2 className='text-primary fw-bold'>Don't Miss Out Special Offer</h2>
                                    <p className='text-secondary'>Register to receive news about the latest, savings combos, discount codes...</p>
                                </div>
                                <div className='pb-4 '>
                                    <p className='m-0 d-flex align-items-center gap-2'>
                                        <span className='fs-12 special-offer-step-section'>01</span>
                                        <span>Savings combos</span>
                                    </p>
                                    <p className='m-0 d-flex align-items-center gap-2 pt-3'>
                                        <span className='fs-12 special-offer-step-section2'>02</span>
                                        <span>Freeship</span>
                                    </p>
                                    <p className='m-0 d-flex align-items-center gap-2 pt-3'>
                                        <span className='fs-12 special-offer-step-section3'>03</span>
                                        <span>Premium magazines</span>
                                    </p>
                                </div>
                                <div className="input-group mb-3 border bg-white rounded-pill p-1">
                                    <input type="text" className="form-control border-0 rounded-pill" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-dark bg-black rounded-circle p-2" type="button" id="button-addon2"><Icons.Rigtharrowwhite /></button>
                                </div>
                            </div>
                        </div>
                        {/* Right-Side */}
                        <div className="col-md-6">
                            <img src={specialoffers.src} alt="specialoffers" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default About