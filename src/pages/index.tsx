import React, { ReactElement, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Head from 'next/head';
import Icons from 'src/components/Icons';
import Hero from 'src/assets/images/hero.png';
import Hero2 from 'src/assets/images/hero-2.png';
import Hero3 from 'src/assets/images/hero-3.png'
import TheHeader from 'src/components/TheHeader';
import discover1 from "@/assets/images/discover-img-1.png";
import discover2 from "src/assets/images/discover-img-2.png";
import discover3 from "src/assets/images/discover-img-3.png";
import discover4 from "src/assets/images/discover-img-4.png";
import sweater from "src/assets/images/new-arrivals-img-1.png";
import SectionHeading from 'src/components/SectionHeading';
import download from 'src/assets/images/download.jpeg';
import download2 from 'src/assets/images/download (1).jpeg';
import download3 from 'src/assets/images/download (2).jpeg';
import download4 from 'src/assets/images/download (3).jpeg';
import download5 from 'src/assets/images/download (4).jpeg';
import bat from "src/assets/images/bat.png";
import shorts from "src/assets/images/shorts.png";
import rope from "src/assets/images/rope.png";
import shoping1 from "src/assets/images/shoping-1.png";
import shoping2 from "src/assets/images/shoping-2.png";
import shoping3 from "src/assets/images/shoping-3.png";
import shoping4 from "src/assets/images/shoping-4.png";
import logo from "src/assets/images/logo/logo.svg";
import Blanket from "src/assets/images/blanket.png";
import Shoes from "src/assets/images/shoes.png";
import Bag from "src/assets/images/bag.png";
import moneyimg from "src/assets/images/earn-money.png";
import Coat from "src/assets/images/coat.png";
import tshirt from "src/assets/images/t-shirt.png";
import Jacket from "src/assets/images/jaket.png";
import Link from 'next/link';
import TheFooter from 'src/components/TheFooter';
import ProductCard from 'src/components/ProductCard';
import ExploreCard from 'src/components/ExploreCard';
import Hoodie from 'src/assets/images/trending-section-hoddie.png';
import Cap from 'src/assets/images/trending-section-cap.png';
import Purse from 'src/assets/images/trending-section-purse.png';
import Minibag from 'src/assets/images/trending-section-mini-bag.png';
import Umbrella from 'src/assets/images/trending-section-umbrela.png';
import Bag2 from 'src/assets/images/trending-section-bag.png';
import Kidsoffer from 'src/assets/images/kids offer-hero-img.png';
import Boots from 'src/assets/images/choose-by-expert-shooes.png';
import Boots2 from 'src/assets/images/choose-by-expert-shooes2.png';
import Boots3 from 'src/assets/images/choose-by-expert-shooes3.png';
import Boots4 from 'src/assets/images/choose-by-expert-shooes4.png';
import Jacket1 from 'src/assets/images/choose-by-expert-jacket.png';
import Jacket2 from 'src/assets/images/choose-by-expert-jacket2.png';
import Jacket3 from 'src/assets/images/choose-by-expert-jacket3.png';
import Jacket4 from 'src/assets/images/choose-by-expert-jacket4.png';
import Purse1 from 'src/assets/images/choose-by-expert-purse.png';
import Purse2 from 'src/assets/images/choose-by-expert-purse2.png';
import Purse3 from 'src/assets/images/choose-by-expert-purse3.png';
import Purse4 from 'src/assets/images/choose-by-expert-purse4.png';
import Travelkits from 'src/assets/images/Shop-by-department-img1.png';
import Beautyproduct from 'src/assets/images/Shop-by-department-img2.png';
import Footballplayer from 'src/assets/images/Shop-by-department-img3.png';
import pets from 'src/assets/images/Shop-by-department-img4.png';
import specialoffers from 'src/assets/images/special offers.png';
import Radio from 'src/assets/images/latest-news-section-img-1.jpeg';
import Plates from 'src/assets/images/The-latest-news-section-img-3.jpeg'
import Tree from 'src/assets/images/The-latest-news-section-img-2.jpeg'
import Tee from 'src/assets/images/The-latest-news-section-img-4.jpeg'
import Client from 'src/assets/images/latest-news-section-mini-img-1.jpeg';
import Client2 from 'src/assets/images/latest-news-section-mini-img-2.jpeg';
import Client3 from 'src/assets/images/latest-news-section-mini-img-3.jpeg';
import Facebook from 'src/assets/icons/facebook (3).png';
import Twitter from 'src/assets/icons/twitter.png';
import Linkedin from 'src/assets/icons/linkedin.png';
import Instagram from 'src/assets/icons/instagram.png';
import goodnewsimg1 from 'src/assets/images/good-news-section-img1.png';
import goodnewsimg2 from 'src/assets/images/good-news-section-img2.png';
import goodnewsimg3 from 'src/assets/images/good-news-section-img3.png';
import goodnewsimg4 from 'src/assets/images/good-news-section-img4.png';
import goodnewsimg5 from 'src/assets/images/good-news-section-img5.png';
import RootLayout from 'src/layouts/RootLayout';
const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Cisco</title>
        <meta name="Home" content="Cisco" />
      </Head>
      {/* Home-section */}
      <section className='py-4 bgprimary '>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {/* Slide-1 **********************************************/}
                <SwiperSlide>
                  <div className="row align-items-center">
                    <div className="col-md-6 order-2 order-md-1">
                      {/* Left-side */}
                      <div className='home-content text-center text-md-start'>
                        <h6 className='text-primary'>In this season, find the best &#128293;</h6>
                        <h1 className='text-primary fw-bolder'>Exclusive collection for everyone</h1>
                        <div className='py-3 d-flex justify-content-center justify-content-md-start'>
                          <button className='btn btn-primary rounded-pill d-flex gap-1 align-items-center btn-lg btn-md'>
                            <span>Explore Now</span>
                            <Icons.Searchbgwhite />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Right-side */}
                    <div className="col-md-6 order-1 order-md-1">
                      <div className='hero-img'>
                        <img src={Hero.src} alt="hero-img" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide-2 **********************************************/}
                <SwiperSlide>
                  <div className="row align-items-center">
                    <div className="col-md-6 order-2 order-md-1">
                      {/* Left-side */}
                      <div className='Home-content text-center text-md-start'>
                        <h6 className='text-primary'>In this season, find the best &#128293;</h6>
                        <h1 className='text-primary fw-bolder'>Exclusive collection for everyone</h1>
                        <div className='py-3 d-flex justify-content-center justify-content-md-start'>
                          <button className='btn btn-primary rounded-pill d-flex gap-1 align-items-center'>
                            <span>Explore Now</span>
                            <Icons.Searchbgwhite />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Right-side */}
                    <div className="col-md-6 order-1 order-md-1">
                      <div className='hero-img'>
                        <img src={Hero2.src} alt="hero-img" className='img-fluid' />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide-3 **********************************************/}
                <SwiperSlide>
                  <div className="row align-items-center">
                    <div className="col-md-6 order-2 order-md-1">
                      {/* Left-side */}
                      <div className='Home-content text-center text-md-start'>
                        <h6 className='text-primary'>In this season, find the best &#128293;</h6>
                        <h1 className='text-primary fw-bolder'>Exclusive collection for everyone</h1>
                        <div className='py-3 d-flex justify-content-center justify-content-md-start '>
                          <button className='btn btn-primary rounded-pill d-flex gap-1 align-items-center'>
                            <span>Explore Now</span>
                            <Icons.Searchbgwhite />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Right-side */}
                    <div className="col-md-6 order-1 order-md-1">
                      <div className='hero-img'>
                        <img src={Hero3.src} alt="hero-img" className='img-fluid w-100' />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Discover */}
      <section className='py-4'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionHeading darkTitle="Discover more. "
                lightTitle="Good things are waiting for you" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                slidesPerView={3.2}
                spaceBetween={30}
                className="mySwiper"
                breakpoints={{
                  320: {
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
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {/* Slide-1 **********************************************/}
                <SwiperSlide>
                  <Link href={"/product/424/424dfd"} className='text-decoration-none'>
                    {/* card-1 */}
                    <div className='h-100'>
                      <div className="d-flex discover-bg-yellow  discover-hover gap-3bg-yellow p-3 rounded-4 align-items-center">
                        <div>
                          <p className=' text-secondary text-nowrap m-0 pb-2'>Explore New Arrivals</p>
                          <h6 className='text-primary fw-bold'>Shop the latest from top brands</h6>
                          <button className=' mt-2 btn-secondary text-secondary rounded-pill shadow'>Show Me All</button>
                        </div>
                        <div className='product-img-wrapper'>
                          <img src={discover1.src} alt="Discoverimg1" className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <Link href={"/men"} className='text-decoration-none'>
                    <div className='h-100'>
                      <div className="d-flex gap-3 discover-hover discover-bg-pink  p-3 rounded-4 align-items-center">
                        <div>
                          <p className=' text-secondary text-nowrap m-0 pb-2'>Digital gift card</p>
                          <h6 className='text-primary fw-bold'>Give the gift of choice</h6>
                          <button className='mt-2 btn-secondary text-secondary rounded-pill shadow'>Show Me All</button>
                        </div>
                        <div className='product-img-wrapper'>
                          <img src={discover2.src} alt="Discoverimg1" className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={"/men"} className='text-decoration-none'>
                    <div className='h-100'>
                      <div className="d-flex discover-bg-blue discover-hover gap-3 p-3 rounded-4 align-items-center">
                        <div>
                          <p className=' text-secondary text-nowrap m-0 pb-2'>Sale Collation</p>
                          <h6 className='text-primary fw-bold'>Up to 80% off retail</h6>
                          <button className='mt-2 btn-secondary text-secondary rounded-pill shadow'>Show Me All</button>
                        </div>
                        <div className='product-img-wrapper'>
                          <img src={discover3.src} alt="Discoverimg1" className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={"/men"} className='text-decoration-none'>
                    <div className='h-100'>
                      <div className="d-flex gap-3 discover-bg-blue discover-hover p-3 rounded-4 align-items-center">
                        <div className="">
                          <p className=' text-secondary text-nowrap m-0 pb-2'>Sale Collation</p>
                          <h6 className='text-primary fw-bold'>Up to 80% off retail</h6>
                          <button className='mt-2 btn-secondary text-secondary rounded-pill shadow'>Show Me All</button>
                        </div>
                        <div className='product-img-wrapper'>
                          <img src={discover4.src} alt="Discoverimg1" className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals *************/}
      <section className='py-4 arrival-wrappeer'>
        <div className="container">
          <div className="row">
            <div className="section-title">
              <SectionHeading darkTitle="New Arrivals.  "
                lightTitle="REY backpacks & bags" />
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              {/* Card-1 ***********/}
              <ProductCard
                outerimg={sweater.src}
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
            </SwiperSlide>
            <SwiperSlide>
              {/* Card-2 ***********/}
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
            </SwiperSlide>
            <SwiperSlide>
              {/* Card-3 ***********/}
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
            </SwiperSlide>
            <SwiperSlide>
              {/* Card-4 ***********/}
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
            </SwiperSlide>
            <SwiperSlide>
              {/* Card-5 ***********/}
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <hr />
      {/* How to shop **********/}
      <section className='py-4 how-to-shop'>
        <div className="container">
          <div className="row">
            {/* card-1 */}
            <div className="col-md-3">
              <div className='card border-0'>
                <div className="card-img text-center">
                  <img src={shoping1.src} alt="shop" className='img-fluid shop-img-wrapper' />
                </div>
                <div className="card-content text-center">
                  <div className='pb-2'>
                    <span className='fs-12 step-wrapper rounded-pill'>Step 1</span>
                  </div>
                  <p className='fw-bold m-0 pb-3'>Filter & Discover</p>
                  <p className='fs-14'>Smart filtering and suggestions make it easy to find</p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="col-md-3">
              <div className='card border-0'>
                <div className="card-img text-center">
                  <img src={shoping2.src} alt="shop" className='img-fluid shop-img-wrapper' />
                </div>
                <div className="card-content text-center">
                  <div className='pb-2'>
                    <span className='fs-12 step-wrapper rounded-pill'>Step 2</span>
                  </div>
                  <p className='fw-bold m-0 pb-3'>Add to bag</p>
                  <p className='fs-14'>Easily select the correct items and add them to the cart</p>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="col-md-3">
              <div className='card border-0'>
                <div className="card-img text-center">
                  <img src={shoping3.src} alt="shop" className='img-fluid shop-img-wrapper' />
                </div>
                <div className="card-content text-center">
                  <div className='pb-2'>
                    <span className='fs-12 rounded-pill step-wrapper'>Step 3</span>
                  </div>
                  <p className='fw-bold m-0 pb-3'>Fast Shiping</p>
                  <p className='fs-14'>The carrier will confirm and ship quickly to you</p>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className="col-md-3">
              <div className='card border-0'>
                <div className="card-img text-center">
                  <img src={shoping4.src} alt="shop" className='img-fluid shop-img-wrapper' />
                </div>
                <div className="card-content text-center">
                  <div className='pb-2'>
                    <span className='fs-12 step-wrapper rounded-pill'>Step 4</span>
                  </div>
                  <p className='fw-bold m-0 pb-3'>Enjoy The Product</p>
                  <p className='fs-14'>Have fun and enjoy your 5-star quality products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Earn free money */}
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
      {/* Start Exploring **********/}
      <section className='py-4'>
        <div className='container'>
          <div className="section-heading text-center">
            <h2 className='text-primary fw-bold'>Start Exploring</h2>
          </div>
          {/* tabs */}
          <div className='tab justify-content-center align-items-center d-flex '>
            <ul className="nav nav-pills p-1 mb-3 flex-nowrap overflow-x-auto justify-content-md-between shadow pt-3 exploring-tabs  rounded-pill" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active d-flex gap-2 align-items-center rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span>Men</span>
                  <Icons.Venus />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link d-flex gap-2 align-items-center rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-women" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span>Women</span>
                  <Icons.Mars />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link d-flex gap-2 align-items-center rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-kids" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span>Kids</span>
                  <Icons.Kids />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link d-flex gap-2 align-items-center rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-sports" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span>Sports</span>
                  <Icons.Sports />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link d-flex gap-2 align-items-center rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-beauty" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span>Beauty</span>
                  <Icons.Beauty />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link d-flex gap-2 align-items-center rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-jewelry" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  <span>Jewelry</span>
                  <Icons.Jewelry />
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content pt-3" id="pills-tabContent">
            {/* tab-1 ***************************************/}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
              <div className="row gy-4">
                <div className='col-12'>

                </div>
                {/* card-1 */}
                <ExploreCard
                  bagimg={Bag.src}
                  products="202 Product"
                  heading="Bag"
                  ExploreIcon={<Icons.ExploreIcon />}
                />
                {/* card-2 */}
                <ExploreCard
                  bagimg={Shoes.src}
                  products="225 Product"
                  heading="Shoes"
                  ExploreIcon={<Icons.ExploreIcon2 />}
                />
                {/* card-3 */}
                <ExploreCard
                  bagimg={Blanket.src}
                  products="441 Product"
                  heading="Recyled Blanket"
                  ExploreIcon={<Icons.ExploreIcon3 />}
                />
                {/* card-4 */}
                <ExploreCard
                  bagimg={Coat.src}
                  products="255 Product"
                  heading="Coat"
                  ExploreIcon={<Icons.ExploreIcon4 />}
                />
                {/* card-5 */}
                <ExploreCard
                  bagimg={Jacket.src}
                  products="302 Product"
                  heading="Jacket"
                  ExploreIcon={<Icons.ExploreIcon5 />}
                />
                {/* card-6 */}
                <ExploreCard
                  bagimg={tshirt.src}
                  products="202 Product"
                  heading="T-Shirt"
                  ExploreIcon={<Icons.ExploreIcon6 />}
                />
              </div>
            </div>
            {/* tab-2 ***************************************/}
            <div className="tab-pane fade" id="pills-women" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
              <div className="row">
                {/* card-1 */}
                <ExploreCard
                  bagimg={Coat.src}
                  products="444 Product"
                  heading="Coat"
                  ExploreIcon={<Icons.ExploreIcon4 />}
                />
                {/* card-2 */}
                <ExploreCard
                  bagimg={tshirt.src}
                  products="357 Product"
                  heading="T-shirt"
                  ExploreIcon={<Icons.ExploreIcon2 />}
                />
                {/* card-3 */}
                <ExploreCard
                  bagimg={Jacket.src}
                  products="2475 Product"
                  heading="Jacket"
                  ExploreIcon={<Icons.ExploreIcon6 />}
                />
              </div>
            </div>
            {/* tab-3 ***************************************/}
            <div className="tab-pane fade" id="pills-kids" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
              <div className="row gy-4">
                {/* card-1 */}
                <ExploreCard
                  bagimg={Bag.src}
                  products="280 Product"
                  heading="Bag"
                  ExploreIcon={<Icons.ExploreIcon />}
                />
              </div>
            </div>
            {/* tab-4 ***************************************/}
            <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
              <div className="row gy-4">
                {/* card-1 */}
                <ExploreCard
                  bagimg={Bag.src}
                  products="784 Product"
                  heading="Bag"
                  ExploreIcon={<Icons.ExploreIcon />}
                />
                {/* card-2 */}
                <ExploreCard
                  bagimg={Shoes.src}
                  products="2484 Product"
                  heading="Shoes"
                  ExploreIcon={<Icons.ExploreIcon2 />}
                />
                {/* card-3 */}
                <ExploreCard
                  bagimg={Blanket.src}
                  products="20 Product"
                  heading="Recycled Blanket"
                  ExploreIcon={<Icons.ExploreIcon3 />}
                />
                {/* card-4 */}
                <ExploreCard
                  bagimg={Coat.src}
                  products="987 Product"
                  heading="Coat"
                  ExploreIcon={<Icons.ExploreIcon4 />}
                />
                {/* card-5 */}
                <ExploreCard
                  bagimg={tshirt.src}
                  products="264 Product"
                  heading="T-shirt"
                  ExploreIcon={<Icons.ExploreIcon5 />}
                />
                {/* card-6 */}
                <ExploreCard
                  bagimg={Jacket.src}
                  products="2 Product"
                  heading="Jacket"
                  ExploreIcon={<Icons.ExploreIcon6 />}
                />
              </div>
            </div>
            {/* tab-5 ***************************************/}
            <div className="tab-pane fade" id="pills-beauty" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
              <div className="row gy-4">
                {/* card-1 */}
                <ExploreCard
                  bagimg={Bag.src}
                  products="202 Product"
                  heading="Bag"
                  ExploreIcon={<Icons.ExploreIcon />}
                />
                {/* card-2 */}
                <ExploreCard
                  bagimg={Shoes.src}
                  products="287 Product"
                  heading="Shoes"
                  ExploreIcon={<Icons.ExploreIcon2 />}
                />
              </div>
            </div>
            {/* tab-6 ***************************************/}
            <div className="tab-pane fade" id="pills-jewelry" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
              <div className="row gy-4">
                {/* card-1 */}
                <ExploreCard
                  bagimg={Blanket.src}
                  products="2578 Product"
                  heading="Recycled Blanket"
                  ExploreIcon={<Icons.ExploreIcon5 />}
                />
                {/* card-2 */}
                <ExploreCard
                  bagimg={Coat.src}
                  products="354 Product"
                  heading="Coat"
                  ExploreIcon={<Icons.ExploreIcon2 />}
                />
                {/* card-3 */}
                <ExploreCard
                  bagimg={Bag.src}
                  products="2 Product"
                  heading="Bag"
                  ExploreIcon={<Icons.ExploreIcon6 />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* trending now */}
      <section className='py-4 trendeing-wrapper'>
        <div className="container">
          <div className="section-heading">
            <h2 className='fw-bold text-primary'>What's Trending Now</h2>
            <p className='text-secondary'>Discover the most trending products in Ciseco.</p>
          </div>
          <div className='overflow-x-auto'>
            <div className='d-flex align-items-center justify-content-center justify-content-md-between '>
              <div>
                <ul className="nav nav-pills align-items-center flex-nowrap justify-content-center justify-content-md-start mb-0 me-1 overflow-x" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#all-items" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Items</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Women</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Men</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-kid" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Kids</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-jewels" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Jewels</button>
                  </li>
                </ul>
              </div>
              <div>
                <button className='btn btn-primary d-flex gap-2 align-items-center'>
                  <Icons.Filter />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
          <hr />
          {/* Product-informaction-button *******************************************************/}
          <div className='d-flex gap-2 flex-nowrap overflow-x-auto pb-2'>
            <div>
              <button type="button" className="trending-button-wrapper btn-outline-secondary rounded-pill d-flex">
                <Icons.Dollar />
                <span className='text-nowrap'>1$-500$</span>
              </button>
            </div>
            <div>
              <button type="button" className="trending-button-wrapper btn-outline-secondary rounded-pill dropdown-toggle align-items-center gap-1 d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                <Icons.Celender />
                <span>Categories</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>Men</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>Women</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>Kids</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>Sports</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="trending-button-wrapper btn-outline-secondary rounded-pill dropdown-toggle align-items-center gap-1 d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                <Icons.Paint />
                <span>Colors</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>Black</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>Red</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>White</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="trending-button-wrapper btn-outline-secondary rounded-pill dropdown-toggle align-items-center gap-1 d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                <Icons.Size />
                <span>Sizes</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>S</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>M</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>L</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1 btn" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span>XL</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex gap-1 btn btn-link disabled" href="#">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <span className='text-decoration-line-through'>XXL</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {/* <button className='trending-button-wrapper  rounded-pill align-items-center'>
              
                <span>On Sale</span>
              </button> */}
              <button type="button" className="trending-button-wrapper btn-outline-secondary rounded-pill align-items-center gap-1 d-flex">
                <Icons.Discount />
                <span className='text-nowrap'>On Sale</span>
              </button>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            {/* Tab-1 ********************************************************/}
            <div className="tab-pane fade show active" id="all-items" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
              <div className="row gy-4 justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-4 ***********/}
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-5 ***********/}
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-6 ***********/}
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-7 ***********/}
                    <ProductCard
                      outerimg={Minibag.src}
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-8 ***********/}
                    <ProductCard
                      outerimg={shorts.src}
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
            {/* Tab-2 ********************************************************/}
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
              <div className="row">
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-1 ***********/}
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
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-2 ***********/}
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
              </div>
            </div>
            {/* Tab-3 ********************************************************/}
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
              <div className="row">
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-1 ***********/}
                    <ProductCard
                      outerimg={Minibag.src}
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
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-2 ***********/}
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
                <div className="col-6 col-md-3" id='arrivals'>
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
              </div>
            </div>
            {/* Tab-4 ********************************************************/}
            <div className="tab-pane fade" id="pills-kid" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
              <div className="row gy-4">
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-1 ***********/}
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
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-2 ***********/}
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
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-3 ***********/}
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
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-4 ***********/}
                    <ProductCard
                      outerimg={Minibag.src}
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
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-5 ***********/}
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
              </div>
            </div>
            {/* Tab-5 ********************************************************/}
            <div className="tab-pane fade" id="pills-jewels" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
              <div className="row">
                <div className="col-6 col-md-3" id='arrivals'>
                  <div className='text-center'>
                    {/* Card-1 ***********/}
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
              </div>
            </div>
            <div className='row pt-5'>
              <div className="col-md-12">
                <div className="mt-4 d-flex justify-content-center">
                  <button className="btn btn-primary d-flex align-items-center gap-2 rounded-pill fs-6">Show me more
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Speacial offer Section */}
      <section className='py-4'>
        <div className="container offer-bg-color py-4 rounded-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className='offer-img-wrapper'>
                <img src={Kidsoffer.src} alt="child" className='img-fluid' />
              </div>
            </div>
            <div className="col-md-6">
              <div className="logo">
                <Link href={"/"}>
                  <img src={logo.src} alt="logo" />
                </Link>
              </div>
              <div className="content pt-3">
                <h2 className='text-primary fw-bolder'>Special Offer In Kids Product</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...
                </p>
                <button className='btn btn-primary fs-6 rounded-pill'>Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choosen by our expert */}
      <section className='py-4'>
        <div className="container">
          <div className="section-heading pb-3">
            <h2 className='text-primary'>Choosen By Our Expert</h2>
          </div>
          <Swiper
            spaceBetween={20}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              575: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <Link href={'/heavyhoddie'} className='text-decoration-none'>
                <div>
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
                      <p className='m-0 fw-bold text-black'> Bomber Jacket</p>
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
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/heavyhoddie'} className='text-decoration-none'>
                <div>
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
                      <p className='m-0 fw-bold text-black'> Pet Toy</p>
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
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/heavyhoddie'} className='text-decoration-none'>
                <div>
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
                      <p className='m-0 fw-bold text-black'> Boots</p>
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
                </div>
              </Link>
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
      </section>
      {/* Shop By Department **************/}
      <section className='py-4 special-offer'>
        <div className="container">
          <div className="section-heading pb-3">
            <h2 className='text-primary'>Shop By Department</h2>
          </div>
          <Swiper
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{

              575: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className='choosen-bg-color text-center'>
                <img src={Travelkits.src} alt="sweater" className='img-fluid' />
              </div>
              <div className='content text-center pt-2'>
                <h6 className='m-0 fw-bold'>Travel Kits</h6>
                <p className='m-0 text-secondary fs-14'>20+ Category</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='choosen-bg-color text-center'>
                <img src={Beautyproduct.src} alt="sweater" className='img-fluid' />
              </div>
              <div className='content text-center pt-2'>
                <h6 className='m-0 fw-bold'>Beauty Product</h6>
                <p className='m-0 text-secondary fs-14'>10+ Category</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='choosen-bg-color text-center'>
                <img src={Footballplayer.src} alt="sweater" className='img-fluid' />
              </div>
              <div className='content text-center pt-2'>
                <h6 className='m-0 fw-bold'>Sports Kits</h6>
                <p className='m-0 text-secondary fs-14'>34+ Category</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='choosen-bg-color text-center'>
                <img src={pets.src} alt="sweater" className='img-fluid' />
              </div>
              <div className='content text-center pt-2'>
                <h6 className='m-0 fw-bold'>Pets Food</h6>
                <p className='m-0 text-secondary fs-14'>12+ Category</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='choosen-bg-color rounded-3 h-300 align-items-center text-center justify-content-center d-flex'>
                <div className='justify-content-center'>
                  <h5 className='m-0 fw-bold align-items-center'>
                    <span>More Collaction</span>
                    <Icons.Rigtharrow />
                  </h5>
                  <p className='m-0 fs-14'>Show Me More</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Special Offer */}
      <section className='py-4'>
        <div className="container choosen-bg-color px-4">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-md-6">
              <div className="content">
                <div>
                  <h2 className='text-primary fw-bold'>Don't Miss Out Special Offer</h2>
                  <p className='text-secondary'>Register to receive news about the latest, savings combos, discount codes...</p>
                </div>
                <div className='pb-4'>
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
      {/* Good things are waiting for you ***************************/}
      <section className='py-4'>
        <div className="container">
          <div className="section-heading">
            <SectionHeading darkTitle="Discover more. "
              lightTitle="Good things are waiting for you" />
          </div>
          <Swiper
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              575: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard
                outerimg={Purse.src}
                innerimg1={download.src}
                innerimg2={download2.src}
                innerimg3={download3.src}
                innerimg4={download4.src}
                innerimg5={download5.src}
                title="Leather Gloves"
                subtitle="Perfect Mint Green"
                price="$62.00"
                review="4.7 (35 Reviews)"
                starticon={<Icons.Star />}
              />
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                outerimg={Umbrella.src}
                innerimg1={download.src}
                innerimg2={download2.src}
                innerimg3={download3.src}
                innerimg4={download4.src}
                innerimg5={download5.src}
                title="Leather Gloves"
                subtitle="Perfect Mint Green"
                price="$30.00"
                review="4.7 (35 Reviews)"
                starticon={<Icons.Star />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                outerimg={Minibag.src}
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
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                outerimg={shorts.src}
                innerimg1={download.src}
                innerimg2={download2.src}
                innerimg3={download3.src}
                innerimg4={download4.src}
                innerimg5={download5.src}
                title="Leather Gloves"
                subtitle="Perfect Mint Green"
                price="$50.00"
                review="4.7 (35 Reviews)"
                starticon={<Icons.Star />}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* The latest news. From the Ciseco blog */}
      <section className='py-4'>
        <div className="container">
          <div className='row'>
            <div className="col-12">
              <div className="section-heading">
                <SectionHeading darkTitle="The latest news. "
                  lightTitle="From the Ciseco blog" />
              </div>
            </div>
          </div>
          <div className="row">
            {/* Lef-Side *************************/}
            <div className="col-md-6">
              <div className='latest-news-image-wrapper position-relative'>
                <img src={Radio.src} alt="radio" className='img-fluid latest-section-img-wrapper' />
                <div className='icons-hover '>
                  <div className='flex-column gap-2 d-flex'>
                    <div>
                      <a href=""><img src={Facebook.src} alt="facebook" className='img-fluid' /></a>
                    </div>
                    <div>
                      <a href=""><img src={Twitter.src} alt="facebook" className='img-fluid' />
                      </a>
                    </div>
                    <div>
                      <a href=""> <img src={Linkedin.src} alt="facebook" className='img-fluid' /></a>
                    </div>
                    <div>
                      <a href=""><img src={Instagram.src} alt="facebook" className='img-fluid' /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content pt-4'>
                <h4 className='text-primary fw-bold'>non sodales neque sodales ut etiam sit amet nisl purus</h4>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero perspiciatis ullam ea? Nihil accusamus similique debitis...</p>
                <div className='d-flex align-items-center gap-2'>
                  <img src={Client.src} alt="client" className='img-fluid client-img' />
                  <p className='fs-14 m-0'>Mike Orr <span className='text-secondary'>· May 20, 2021</span></p>
                </div>
              </div>
            </div>
            {/* Right-Side **************************/}
            <div className="col-md-6">
              <div className="row gy-5">
                {/* Part-1 ***************/}
                {/* Left-side */}
                <div className="col-md-8">
                  <div className='pb-4'>
                    <p className='fw-bold text-primary m-0'>Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt</p>
                    <p className='text-secondary fs-14 m-0 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem...</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 pt-3'>
                    <img src={Client2.src} alt="client" className='img-fluid client-img' />
                    <p className='fs-14 m-0'>Jameson Dick
                      <span className='text-secondary'>· May 20, 2021</span></p>
                  </div>
                </div>
                {/* Right-side */}
                <div className="col-md-4">
                  <div>
                    <img src={Tree.src} alt="tree" className='img-fluid img-edit' />
                  </div>
                </div>
                {/* Part-2 *******************/}
                {/* Left-side */}
                <div className="col-md-8">
                  <div className='pb-4'>
                    <p className='fw-bold text-primary m-0'>Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt</p>
                    <p className='text-secondary fs-14 m-0 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem...</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 pt-3'>
                    <img src={Client.src} alt="client" className='img-fluid client-img' />
                    <p className='fs-14 m-0'>Jameson Dick
                      <span className='text-secondary'>· May 20, 2021</span></p>
                  </div>
                </div>
                {/* Right-side */}
                <div className="col-md-4">
                  <div>
                    <img src={Plates.src} alt="tree" className='img-fluid img-edit' />
                  </div>
                </div>
                {/* Part-3 *******************/}
                {/* Left-side */}
                <div className="col-md-8">
                  <div className='pb-4'>
                    <p className='fw-bold text-primary m-0'>Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt</p>
                    <p className='text-secondary fs-14 m-0 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem...</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 pt-3'>
                    <img src={Client3.src} alt="client" className='img-fluid client-img' />
                    <p className='fs-14 m-0'>Jameson Dick
                      <span className='text-secondary'>· May 20, 2021</span></p>
                  </div>
                </div>
                {/* Right-side */}
                <div className="col-md-4">
                  <div>
                    <img src={Tee.src} alt="tree" className='img-fluid img-edit' />
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center pt-4'>
              <button className='btn btn-outline-secondary rounded-pill'>Show all blog artical</button>
            </div>
          </div>
        </div>
      </section>
      {/* Good news from far away *******/}
      <section className='py-4'>
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
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <RootLayout>
          {page}
      </RootLayout>
  )
}

export default Home
