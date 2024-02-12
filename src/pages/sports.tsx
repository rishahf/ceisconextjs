import Head from 'next/head'
import RootLayout from '@/layouts/RootLayout'
import { ReactElement } from 'react'
import logo from "../assets/images/logo/logo.svg";
import Bag2 from "../assets/images/trending-section-bag.png";
import download from '../assets/images/download.jpeg';
import download2 from '../assets/images/download (1).jpeg';
import download3 from '../assets/images/download (2).jpeg';
import download4 from '../assets/images/download (3).jpeg';
import download5 from '../assets/images/download (4).jpeg';
import Icons from '@/components/Icons';
import Minibag from '../assets/images/trending-section-mini-bag.png';
import Umbrella from '../assets/images/trending-section-umbrela.png';
import sweater from "../assets/images/new-arrivals-img-1.png";
import ProductCard from '@/components/ProductCard';
import Purse from '../assets/images/trending-section-purse.png';
import Hoodie from '../assets/images/trending-section-hoddie.png';
import Cap from '../assets/images/trending-section-cap.png';
import shorts from "../assets/images/shorts.png";
import Purse1 from '../assets/images/choose-by-expert-purse.png';
import Purse2 from '../assets/images/choose-by-expert-purse2.png';
import Purse3 from '../assets/images/choose-by-expert-purse3.png';
import Purse4 from '../assets/images/choose-by-expert-purse4.png'
import Jacket1 from '../assets/images/choose-by-expert-jacket.png';
import Jacket2 from '../assets/images/choose-by-expert-jacket2.png';
import Jacket3 from '../assets/images/choose-by-expert-jacket3.png';
import Jacket4 from '../assets/images/choose-by-expert-jacket4.png';
import moneyimg from "../assets/images/earn-money.png";
import Boots from '../assets/images/choose-by-expert-shooes.png';
import Boots2 from '../assets/images/choose-by-expert-shooes2.png';
import Boots3 from '../assets/images/choose-by-expert-shooes3.png';
import Boots4 from '../assets/images/choose-by-expert-shooes4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Sports = () => {
    return (
        <>
            <Head>
                <title>Ciseco | Sports</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main>
                <section className='py-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className='fw-bold'>Sports Collaction</h1>
                                <p className='text-secondary'>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h6 className='fw-bold'>Categories</h6>
                                <div className='flex-column gap-3 d-flex'>
                                    <div className='d-flex gap-2 '>
                                        <input type="checkbox" id='BagPacks' />
                                        <label htmlFor='BagPacks'>Bagpacks</label>
                                    </div>
                                    <div className='d-flex gap-2 '>
                                        <input type="checkbox" id='Travel-Bags' />
                                        <label htmlFor='Travel-Bags'>Travel Bags</label>
                                    </div>
                                    <div className='d-flex gap-2 '>
                                        <input type="checkbox" id='Laptop-Sleeves' />
                                        <label htmlFor='Laptop-Sleeves'>Laptop Sleeves</label>
                                    </div>
                                    <div className='d-flex gap-2 '>
                                        <input type="checkbox" id='Organization' />
                                        <label htmlFor='Organization'>Organization</label>
                                    </div>
                                    <div className='d-flex gap-2 '>
                                        <input type="checkbox" id='Accessories' />
                                        <label htmlFor='Accessories'>Accessories</label>
                                    </div>
                                    <hr />
                                    <div>
                                        <h6 className='fw-bold'>Color</h6>
                                        <div className='flex-column gap-2 d-flex'>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='White' />
                                                <label htmlFor='White'>White</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='Beige' />
                                                <label htmlFor='Beige'>Beige</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='Blue' />
                                                <label htmlFor='Blue'>Blue</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='Brown' />
                                                <label htmlFor='Brown'>Brown</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='Green' />
                                                <label htmlFor='Green'>Green</label>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className='fw-bold'>Sizes</h6>
                                        <div className='flex-column gap-2 d-flex'>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='XS' />
                                                <label htmlFor='XS'>XS</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='s' />
                                                <label htmlFor='s'>S</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='m' />
                                                <label htmlFor='m'>M</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='l' />
                                                <label htmlFor='l'>L</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='XL' />
                                                <label htmlFor='XL'>XL</label>
                                            </div>
                                            <div className='d-flex gap-2 '>
                                                <input type="checkbox" id='XXL' />
                                                <label htmlFor='XXL'>XXL</label>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <h5 className='m-0 pb-1'>On Sale !</h5>
                                            <p className='m-0'>Product Currently</p>
                                        </div>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>
                                    </div>
                                    <hr />
                                    <h6 className='fw-bold'>Sort Order</h6>
                                    <div className='flex-column gap-1 d-flex pb-3'>
                                        <div className='d-flex gap-2 '>
                                            <input type="radio" name="A" value="a" id="radio1" />
                                            <label htmlFor='radio1'>Most Popular</label>
                                        </div>
                                        <div className='d-flex gap-2 '>
                                            <input type="radio" name="A" value="a" id="radio2" />
                                            <label htmlFor='radio2'>Best Rating</label>
                                        </div>
                                        <div className='d-flex gap-2 '>
                                            <input type="radio" name="A" value="a" id="radio3" />
                                            <label htmlFor='radio3'>New List</label>
                                        </div>
                                        <div className='d-flex gap-2 '>
                                            <input type="radio" name="A" value="a" id="radio4" />
                                            <label htmlFor='radio4'>Price Low - High</label>
                                        </div>
                                        <div className='d-flex gap-2 '>
                                            <input type="radio" name="A" value="a" id="radio5" />
                                            <label htmlFor='radio5'>Price High - Low</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-lg-4" id='arrivals'>
                                        <div className='text-center'>
                                            {/* Card-1 ***********/}
                                            <ProductCard
                                                outerimg={Hoodie.src}
                                                innerimg1={download.src}
                                                innerimg2={download2.src}
                                                innerimg3={download3.src}
                                                innerimg4={download4.src}
                                                innerimg5={download5.src}
                                                title="Leather Gloves"
                                                subtitle="Perfect Mint Green"
                                                price="$82.00"
                                                review="4.7 (35 Reviews)"
                                                starticon={<Icons.Star />}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4" id='arrivals'>
                                        <div className='text-center'>
                                            {/* Card-2 ***********/}
                                            <ProductCard
                                                outerimg={Bag2.src}
                                                innerimg1={download.src}
                                                innerimg2={download2.src}
                                                innerimg3={download3.src}
                                                innerimg4={download4.src}
                                                innerimg5={download5.src}
                                                title="Leather Gloves"
                                                subtitle="Perfect Mint Green"
                                                price="$82.00"
                                                review="4.7 (35 Reviews)"
                                                starticon={<Icons.Star />}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4" id='arrivals'>
                                        <div className='text-center'>
                                            {/* Card-3 ***********/}
                                            <ProductCard
                                                outerimg={Cap.src}
                                                innerimg1={download.src}
                                                innerimg2={download2.src}
                                                innerimg3={download3.src}
                                                innerimg4={download4.src}
                                                innerimg5={download5.src}
                                                title="Leather Gloves"
                                                subtitle="Perfect Mint Green"
                                                price="$82.00"
                                                review="4.7 (35 Reviews)"
                                                starticon={<Icons.Star />}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4" id='arrivals'>
                                        <div className='text-center'>
                                            {/* Card-3 ***********/}
                                            <ProductCard
                                                outerimg={Purse.src}
                                                innerimg1={download.src}
                                                innerimg2={download2.src}
                                                innerimg3={download3.src}
                                                innerimg4={download4.src}
                                                innerimg5={download5.src}
                                                title="Leather Gloves"
                                                subtitle="Perfect Mint Green"
                                                price="$82.00"
                                                review="4.7 (35 Reviews)"
                                                starticon={<Icons.Star />}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4" id='arrivals'>
                                        <div className='text-center'>
                                            {/* Card-3 ***********/}
                                            <ProductCard
                                                outerimg={sweater.src}
                                                innerimg1={download.src}
                                                innerimg2={download2.src}
                                                innerimg3={download3.src}
                                                innerimg4={download4.src}
                                                innerimg5={download5.src}
                                                title="Leather Gloves"
                                                subtitle="Perfect Mint Green"
                                                price="$82.00"
                                                review="4.7 (35 Reviews)"
                                                starticon={<Icons.Star />}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4" id='arrivals'>
                                        <div className='text-center'>
                                            {/* Card-3 ***********/}
                                            <ProductCard
                                                outerimg={Umbrella.src}
                                                innerimg1={download.src}
                                                innerimg2={download2.src}
                                                innerimg3={download3.src}
                                                innerimg4={download4.src}
                                                innerimg5={download5.src}
                                                title="Leather Gloves"
                                                subtitle="Perfect Mint Green"
                                                price="$82.00"
                                                review="4.7 (35 Reviews)"
                                                starticon={<Icons.Star />}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className='py-4'>
                    <div className="container">
                        <div className="row">
                            <Swiper
                                spaceBetween={20}
                                modules={[Pagination]}
                                className="mySwiper"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    {/* Card-1 */}
                                    <div className="our-expert-img-wrapper choosen-bg-color rounded-3 text-center">
                                        <img src={Jacket1.src} alt="sweater" className='img-fluid' />
                                    </div>
                                    <div className='row pt-2'>
                                        {/* inner-card-1 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Jacket2.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* inner-card-2 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Jacket3.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* inner-card-3 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Jacket4.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-3">
                                        <div className="col-md-6">
                                            <p className='m-0 fw-bold'> Bomber Jacket</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='text-end'>
                                                <span className='fs-14 text-green fw-bold'>$42.00</span>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='text-secondary align-items-center d-flex gap-1 fs-14'>
                                                <span>Orange |</span>
                                                <Icons.Star />
                                                <span className='text-secondary fs-14'>4.9 (245 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* Card-2 */}
                                    <div className="our-expert-img-wrapper text-center choosen-bg-color rounded-3">
                                        <img src={Purse1.src} alt="sweater" className='img-fluid' />
                                    </div>
                                    <div className='row pt-2'>
                                        {/* inner-card-1 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color  rounded-3'>
                                                <img src={Purse2.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* inner-card-2 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Purse3.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* inner-card-3 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Purse4.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-3">
                                        <div className="col-md-6">
                                            <p className='m-0 fw-bold'> Bomber Jacket</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='text-end'>
                                                <span className='fs-14 text-green fw-bold'>$42.00</span>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='text-secondary align-items-center d-flex gap-1 fs-14'>
                                                <span>Orange |</span>
                                                <Icons.Star />
                                                <span className='text-secondary fs-14'>4.9 (245 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* Card-3 */}
                                    <div className="our-expert-img-wrapper text-center choosen-bg-color rounded-3">
                                        <img src={Boots.src} alt="sweater" className='img-fluid' />
                                    </div>
                                    <div className='row pt-2'>
                                        {/* inner-card-1 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Boots2.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* inner-card-2 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Boots3.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* inner-card-3 */}
                                        <div className="col-4">
                                            <div className='choosen-bg-color rounded-3'>
                                                <img src={Boots4.src} alt="sweater" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-3">
                                        <div className="col-md-6">
                                            <p className='m-0 fw-bold'> Bomber Jacket</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='text-end'>
                                                <span className='fs-14 text-green fw-bold'>$42.00</span>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='text-secondary align-items-center d-flex gap-1 fs-14'>
                                                <span>Orange |</span>
                                                <Icons.Star />
                                                <span className='text-secondary fs-14'>4.9 (245 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='choosen-bg-color rounded-3 h-410 align-items-center text-center justify-content-center d-flex'>
                                        <div className='justify-content-center'>
                                            <h5 className='m-0 fw-bold align-items-center'>
                                                <span>More Items</span>
                                                <Icons.Rigtharrow />
                                            </h5>
                                            <p className='m-0 fs-14'>Show Me More</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
                <hr />
                {/* Earn Money *****************/}
                <section className='py-4'>
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
                                        <div className='d-flex gap-3 flex-column flex-md-row text-center text-md-start pb-3'>
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
            </main>
        </>
    )
}


Sports.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default Sports