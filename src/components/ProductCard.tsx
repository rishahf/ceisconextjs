import Link from "next/link"

const ProductCard = (props: any) => {
  return (

    <div className="card border-0 product-card-wrapper">
      <div className="card-img product-card position-relative bg-primary text-center">
        <img src={props.outerimg} alt="sweater" className='img-fluid' />
        <div className='product-cart-wrapper pb-3 justify-content-center flex-sm-column flex-xl-row'>
          <button className='btn btn-sm btn-primary rounded-3 border-0 fs-6 text-white shadow'>Add To Bag</button>
          <button className='btn btn-sm btn-light shadow'>Quick View</button>
        </div>
        <div className='product-size-wrapper pb-3'>
          <div className="d-flex gap-2 justify-content-center">
            <button className='btn-light shadow'>XS</button>
            <button className='btn-light shadow'>S</button>
            <button className='btn-light shadow'>M</button>
            <button className='btn-light shadow'>L</button>
            <button className='btn-light shadow'>XL</button>
          </div>
        </div>
      </div>
      <div className="card-content text-center text-md-start">
        <div className='py-2 d-flex gap-2 justify-content-center'>
          <button type='button' className='btn-dark border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
            <img src={props.innerimg1} alt="download" className='w-100' />
          </button>
          <button type='button' className='btn-dark border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
            <img src={props.innerimg2} alt="download" className='w-100' />
          </button>
          <button type='button' className='btn-dark border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
            <img src={props.innerimg3} alt="download" className='w-100' />
          </button>
          <button type='button' className='btn-dark border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
            <img src={props.innerimg4} alt="download" className='w-100' />
          </button>
          <button type='button' className='btn-dark border-0 rounded-pill' onClick={(e) => e.stopPropagation()}>
            <img src={props.innerimg5} alt="download " className='w-100' />
          </button>
        </div>
        <div className='py-2 d-flex gap-2 justify-content-center'>
          <button className='choose-color bg-purple'></button>
          <button className='choose-color bg-yellow'></button>
          <button className='choose-color bg-orange'></button>
          <button className='choose-color bg-blue'></button>
          <button className='choose-color bg-green'></button>
        </div>
        <Link href={'/heavyshoes'} className="text-decoration-none text-black">
          <h6 className='m-0 pb-1'>{props.title}</h6>
          <p className='text-secondary m-0 fs-14'>{props.subtitle}</p>
          <div className='d-flex justify-content-between align-items-center pt-2'>
            <div className='fs-14 text-green fw-bold'>{props.price}</div>
            <div className='d-flex gap-1 align-items-center'>
              {props.starticon}
              <span className='text-secondary fs-12'>{props.review}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>


  )
}
export default ProductCard