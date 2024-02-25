import React from 'react'
import sweater from "src/assets/images/new-arrivals-img-1.png";
import bat from "src/assets/images/bat.png";
import shorts from "src/assets/images/shorts.png";
import rope from "src/assets/images/rope.png";
import ProductCard from '@/components/ProductCard';
import Icons from "@/components/Icons";
import download from 'src/assets/images/download.jpeg';
import download2 from 'src/assets/images/download (1).jpeg';
import download3 from 'src/assets/images/download (2).jpeg';
import download4 from 'src/assets/images/download (3).jpeg';
import download5 from 'src/assets/images/download (4).jpeg';
import Hoodie from 'src/assets/images/trending-section-hoddie.png';
import Cap from 'src/assets/images/trending-section-cap.png';
import Bag2 from 'src/assets/images/trending-section-bag.png';
import Umbrella from 'src/assets/images/trending-section-umbrela.png';

const Wishlist = () => {
  return  <div>
    <div className="row justify-content-start py-4">
                    <div className="col-md-8">
                        <div>
                            <h2 className="text-primary fw-bold m-0">Wish List</h2>
                        </div>
                    </div>
                </div>
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
}

export default Wishlist