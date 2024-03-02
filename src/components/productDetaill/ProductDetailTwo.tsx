import Hoddieimg from 'src/assets/images/hoddie-img.webp';
import Hoddiefabric from 'src/assets/images/hoddie-fabric.webp';
import Hoddieneck from 'src/assets/images/hoddie-neck.webp';
import Hoddieback from 'src/assets/images/hoodie-back-side.webp';
import Icons from 'src/components/Icons';
import download from 'src/assets/images/download.jpeg';
import download2 from 'src/assets/images/download (1).jpeg';
import download3 from 'src/assets/images/download (2).jpeg';
import download4 from 'src/assets/images/download (3).jpeg';
import download5 from 'src/assets/images/download (4).jpeg';
import Reviewimg1 from 'src/assets/images/review-img-1.png';
import Reviewimg2 from 'src/assets/images/good-news-section-img3.png';
import Reviewimg3 from 'src/assets/images/review-img-2.png';
import Reviewimg4 from 'src/assets/images/review-img-3.png';
import ProductCard from 'src/components/ProductCard';
import sweater from "src/assets/images/new-arrivals-img-1.png";
import bat from "src/assets/images/bat.png";
import shorts from "src/assets/images/shorts.png";
import rope from "src/assets/images/rope.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { ReactElement } from 'react';
import RootLayout from 'src/layouts/RootLayout';
const ProductDetailTwo = () => {
    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="row gy-3 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="hoddie-img">
                                <img src={Hoddieimg.src} alt="hoodie" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="hoddie-img">
                                <img src={Hoddieback.src} alt="hoodie" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="row gy-4">
                                <div className="col-md-6 col-lg-12">
                                    <div className="hoddie-fabric">
                                        <img src={Hoddiefabric.src} alt="hoodie" className="img-fluid rounded-4" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className="hoddie-fabric">
                                        <img src={Hoddieneck.src} alt="hoodie" className="img-fluid rounded-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discription ****************/}
            <section className='py-4'>
                <div className="container">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-12 col-md-6 col-lg-7 col-xl-8">
                            <div className='left-side'>
                                <div className='section-heaing'>
                                    <h2 className='text-primary fw-semibold'>Heavy Weight Hoodie</h2>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <Icons.Starsmall />
                                        <p className='fs-14 m-0'> 4.9 · 142 reviews · New in</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <button className='border-0 btn-outline-secondary d-flex gap-2 align-items-center'>
                                            <Icons.Share />
                                            <span>Share</span>
                                        </button>
                                        <button className='border-0 btn-outline-secondary d-flex gap-2 align-items-center'>
                                            <Icons.Heart />
                                            <span>Save</span>
                                        </button>
                                    </div>
                                </div>
                                {/* accordion */}
                                <div className='pt-4'>
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    Discription
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                                <div className="accordion-body text-secondary fs-14">
                                                    Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    Fabric + Care
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                                <ul className="accordion-body text-secondary fs-14 px-5">
                                                    <li>Made from a sheer Belgian power micromesh.</li>
                                                    <li className='pt-2'>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                                                    <li className='pt-2'>Adjustable hook & eye closure and straps</li>
                                                    <li className='pt-2'>Hand wash in cold water, dry flat</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                    How It Fits
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                                <div className="accordion-body text-secondary fs-14">
                                                    Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                                    FAQ
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                                <ul className="accordion-body text-secondary px-5 m-0 fs-14 ">
                                                    <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.
                                                    </li>
                                                    <li className='pt-2'>Please note, packs must be returned in full. We do not accept partial returns of packs.
                                                    </li>
                                                    <li className='pt-2'>Want to know our full returns policies? Here you go.
                                                    </li>
                                                    <li className='pt-2'>Want more info about shipping, materials or care instructions? Here!</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* product Detail *****/}
                            <div className="row pt-4">
                                <div className="col-md-8">
                                    <div className='heading'>
                                        <h3>Product Detail</h3>
                                    </div>
                                    <div className='content'>
                                        <p>The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.</p>
                                        <p>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                                        <ul>
                                            <li className='pb-2'>Regular fit, mid-weight t-shirt</li>
                                            <li className='pb-2'>Natural color, 100% premium combed organic cotton</li>
                                            <li className='pb-2'>Quality cotton grown without the use of herbicides or pesticides - GOTS certified</li>
                                            <li className='pb-2'>Soft touch water based printed in the USA</li>
                                        </ul>
                                    </div>
                                    relative         </div>
                                {/* Shipping Process ***********/}
                                <div className='row gy-4'>
                                    <div className='col-md-6'>
                                        <div className='discover-bg-pink p-3 rounded-3'>
                                            <Icons.Shipping />
                                            <h6 className='m-0 pb-1 fw-semibold pt-2'>Free Shipping</h6>
                                            <p className='text-secondary fs-14'>On orders over $50.00</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='discover-bg-yellow p-3 rounded-3'>
                                            <Icons.Replace />
                                            <h6 className='m-0 pb-1 fw-semibold pt-2'>Very easy to return</h6>
                                            <p className='text-secondary fs-14'>Just phone number.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='discover-bg-blue p-3 rounded-3'>
                                            <Icons.Browser />
                                            <h6 className='m-0 pb-1 fw-semibold pt-2'>Nationwide Delivery</h6>
                                            <p className='text-secondary fs-14'>Fast delivery nationwide.</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='discover-bg-pink p-3 rounded-3'>
                                            <Icons.Refund />
                                            <h6 className='m-0 pb-1 fw-semibold pt-2'>Refunds policy</h6>
                                            <p className='text-secondary fs-14'>60 days return for any reason</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <div className='sticky-top'>
                                <div className="card p-3 rounded-4 ">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='card-title'>
                                            <h4 className='m-0 text-primary fw-semibold'>$108.00</h4>
                                        </div>
                                        <div className='d-flex align-items-center gap-1'>
                                            <Icons.Star />
                                            <span className='text-black fs-14 text-secondary'>4.9 · 142 Reviews</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-3'>
                                            <p className='m-0 fs-14'> Color:
                                                <span className='fw-semibold'> Black</span>
                                            </p>
                                        </div>
                                        {/* Choose Fabric ***********/}
                                        <div className='pb-3 d-flex gap-3'>
                                            <button type='button' className='btn-dark  btn-fabric  border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
                                                <img src={download.src} alt="download" className='w-100' />
                                            </button>
                                            <button type='button' className='btn-dark btn-fabric border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
                                                <img src={download2.src} alt="download" className='w-100' />
                                            </button>
                                            <button type='button' className='btn-dark btn-fabric border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
                                                <img src={download3.src} alt="download" className='w-100' />
                                            </button>
                                            <button type='button' className='btn-dark btn-fabric border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
                                                <img src={download4.src} alt="download" className='w-100' />
                                            </button>
                                            <button type='button' className='btn-dark btn-fabric border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
                                                <img src={download5.src} alt="download " className='w-100' />
                                            </button>
                                        </div>
                                        {/* Choose Size *******/}
                                        <div>
                                            <div className='d-flex justify-content-between align-items-center py-2'>
                                                <p className='m-0'>Size: XL</p>
                                                <a href="" className='text-decoration-none fs-14 text-blue'>See Sizing Chart</a>
                                            </div>
                                            <div className='size-chart flex-row d-flex gap-2 flex-wrap'>
                                                <button className='btn-outline-primary active'>XS</button>
                                                <button className='btn-outline-primary'>S</button>
                                                <button className='btn-outline-primary'>M</button>
                                                <button className='btn-outline-primary'>L</button>
                                                <button className='btn-outline-primary'>XL</button>
                                                <button className='btn-outline-primary' disabled>2XL</button>
                                                <button className='btn-outline-primary' disabled>3XL</button>
                                            </div>
                                            <div className='d-flex align-items-center gap-3 pt-4  flex-row'>
                                                <div className='counter-wrapper  d-flex gap-1 justify-content-center rounded-pill p-3'>
                                                    <button className='p-0 border-0'>&#45;</button>
                                                    <input defaultValue={3} type="text" />
                                                    <button className='p-0 border-0'>&#43;</button>
                                                </div>
                                                <div className='w-100'>
                                                    <button className='btn btn-primary justify-content-center p-3 d-flex align-items-center gap-1 rounded-pill fs-6 w-100'>
                                                        <Icons.Cart />
                                                        <span>Add To Cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between pt-4'>
                                                <div>
                                                    <p className='text-secondary m-0 pb-2'>$108.00 x 1</p>
                                                    <p className='text-secondary m-0 pb-2'>Tax Estimate</p>
                                                </div>
                                                <div>
                                                    <p className='text-secondary m-0 pb-2'>$108.00</p>
                                                    <p className='text-secondary m-0 pb-2'>$0</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='d-flex justify-content-between'>
                                                <p className='fw-semibold m-0'>Total</p>
                                                <p className='m-0'>$108.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Reviews ****************/}
            <section className='py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading d-flex align-items-center gap-2">
                                <Icons.Starlite />
                                <span className='fs-4 fw-bold text-primary'>4,87 · 142 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className='row gy-4 mt-4'>
                        {/* part-1 */}
                        <div className="col-md-6">
                            <div className='me-md-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='review-img-wrapper'>
                                            <img src={Reviewimg1.src} alt="review" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h6 className='m-0 fs-14'>Cody Fisher</h6>
                                            <p className='m-0 fs-12 text-secondary'>May 20, 2021</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                    </div>
                                </div>
                                <div className='description pt-2'>
                                    <p className='text-secondary m-0'>Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
                                </div>
                            </div>
                        </div>
                        {/* part-2 */}
                        <div className="col-md-6">
                            <div className='ms-md-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='review-img-wrapper'>
                                            <img src={Reviewimg2.src} alt="review" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h6 className='m-0 fs-14'>Stiven Hokinhs</h6>
                                            <p className='m-0 fs-12 text-secondary'>December 22, 2021</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icons.Star />768
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                    </div>

                                </div>
                                <div className='description pt-2'>
                                    <p className='text-secondary m-0'>I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. If you're unsure which hoodie to pick.</p>
                                </div>
                            </div>
                        </div>
                        {/* part-3 */}
                        <div className="col-md-6">
                            <div className='me-md-3'>
                                <div className='d-flex align-items-center justify-content-between pb-2'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='review-img-wrapper'>
                                            <img src={Reviewimg3.src} alt="review" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h6 className='m-0 fs-14'>Gropishta keo</h6>
                                            <p className='m-0 fs-12 text-secondary'>August 15, 2022</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                    </div>

                                </div>
                                <p className='text-secondary m-0'>The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. Now that it's colder, my husband wears his all the time. I wear hoodies all the time.</p>
                            </div>
                        </div>
                        {/* part-4 */}
                        <div className="col-md-6">
                            <div className='ms-md-3'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='review-img-wrapper'>
                                            <img src={Reviewimg4.src} alt="review" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h6 className='m-0 fs-14'>Dahon Stiven</h6>
                                            <p className='m-0 fs-12 text-secondary'>December 12, 2022</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                        <Icons.Star />
                                    </div>
                                </div>
                                <p className='text-secondary m-0'>Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed. The material is super soft and comfortable and the sweatshirt also has a good weight to it..</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='mt-3 text-center text-md-start'>
                                <button className=' btn btn-outline-secondary rounded-pill '>Show me all 142 reviews</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-4'>
                <div className="container">
                    <div className="row p-3">
                        <div className="col-12">
                            <div className="section-title pb-3 text-center text-md-start">
                                <h3 className='text-primary fw-bold'>Customers also purchased</h3>
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
                                {/* Card-1 ***********/}
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
                </div>
            </section>
        </>
    )
}
export default ProductDetailTwo