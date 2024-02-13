
export interface ApiListResponse {
  data: {
    total_count: number,
    data: Array<any>
  }
}
export interface DetailsOfList {
  _id: string,
  subcategory_id: {
    _id: string,
    name: string
  },
  category_id: {
    _id: string,
    name: string
  },
  brand_id: string,
  title: string,
  sub_title: string,
  price: string,
  image: string,
  is_removed: boolean,
  product_col?: string
  langProps:any
}

export interface ProductFilter {
  _id: string,
  name: string,
  description: string,
  brand_id: {
    _id: string,
    name: string
  },
  product_highlights: Array<any>
  subcategory_id: {
    _id: string,
    name: string
  },
  sub_subcategory_id: {
    _id: string,
    name: string
  },
  category_id:{
    design_type:number
  }

  images: Array<any>,
  quantity: number,
  product_type: string,
  price: number,
  discount_percantage: number,
  discount: number,
  discount_price: number,
  sold: boolean,
  added_by: {
    _id: string,
    name: string
  },
  is_blocked: boolean,
  is_deleted: boolean,
  wishlist: boolean,
  total_reviews: number,
  total_ratings_count: number,
  average_rating: number,
  created_at: string,
  __v: string,
  heartClick: (product_id: string, wishlist: boolean) => void
}
export interface Product533Data {
  price: String,
  title: String,
  image: String,
  subcategory_id: {
    _id: string,
    name: string
  },
  category_id: {
    _id: string,
    name: string
  },

}
export interface Product241_241Data {
  _id: string,
  image: string,
  title: string,
  price: number,
  category_id: {
    _id: string,
    name: string
  },
  subcategory_id: {
    _id: string,
    name: string
  },
  language:string
  langProps:any
}

export interface Product241_241Data {
  _id: string,
  image: string,
  title: string,
  price: number,
  category_id: {
    _id: string,
    name: string
  },
  subcategory_id: {
    _id: string,
    name: string
  },
}
export interface Product241_241_4xData {
  _id: string,
  image: string,
  title: string,
  price: number,
  category_id: {
    _id: string,
    name: string
  },
  subcategory_id: {
    _id: string,
    name: string
  },
  sub_subcategory_id: {
    _id: string,
    name: string
  },
  brand_id: {
    _id: string,
    name: string
  },
}
export interface Product241_241_4xData {
  _id: string,
  image: string,
  style_for_id: {
    _id: string,
    name: string
  },
}
interface productdetails {
  _id: string
  product_id: string
  key: string
  value: string
  created_at: string
  unique_number: number
}
interface product_services {
  _id: string
  product_id: string
  content: string
}
interface product_highlights {
  _id: string
  product_id: string
  content: string
}
export interface OrderDetails {

  _id: string
  order_id: string
  invoice_id:string
  tax_no:string
  product_order_id: string
  orderId: string
  user_id: string
  language:string
  langProps:any
  name:string
  tax_percantage: number
  tax_amount: number
  address_id: {
    name: string
    user_id: string
    country_code: string
    phone_no: number
    company: string
    country: string
    state: string
    city: string
    pin_code: string
    apartment_number: string
    full_address: string
    shippo_user_address_id: string
    address_type: string
    is_default: boolean
    is_deleted: boolean
    created_at: string
  },
  seller_id: {
    country_code: string
    phone_no: number
    company: string
    country: string
    state: string
    city: string
    pin_code: string
    apartment_number: string
    full_address: string
  },
  
  product_id: ProductSingle
  order_products: Array<OrderListing>
  card_id: string
  coupon_code: string
  coupon_discount: number
  delivery_price: number
  total_price: number
  tracking_link:string
  cancel_requested:string
  total_earnings: number
  price: number
  quantity: number
  payment_mode: string
  order_status: string
  delivery_status: string
  cancellation_reason: string
  delivery_date:string
  cancelled_at:string
  shipped_at:string
  updated_at: string
  created_at: string
  address: {
    _id: string,
    name: string,
    user_id: string,
    country_code: string,
    phone_no: number,
    company: string,
    country: string,
    state: string,
    city: string,
    pin_code: string,
    apartment_number: string,
    full_address: string,
    address_type: string
  }
  orderCancelRequest: Function
}
export interface orderList {
  product_id: ProductSingle
  order_products: Array<OrderListing>
  card_id: string
  coupon_code: string
  tax_amount: number
  coupon_discount: number
  delivery_price: number
  total_price: number
  total_earnings: number
  price: number
  payment_mode: string
  order_status: string
  delivery_status: string
  cancellation_reason: string
  updated_at: string
  created_at: string
}
export interface orderInvoice {

  "_id": string,
  "order_id": string,
  "product_order_id": string,
  "product_id": string,
  "user_id": string,
  "seller_id": string,
  "tax_no": string,
  "quantity": number,
  "price": number,
  "delivery_price": number,
  "coupon_discount": number,
  "total_price": number,
  "total_earnings": number,
  "admin_commision": number,
  "tax_percentage": number,
  "tax_amount": number,
  "order_status": string,
  "delivery_date": null,
  "tracking_link": null,
  "updated_at": string,
  "created_at": string,
  "__v": number,
  "products": {
    "_id": string,
    "name": string,
    "description": string
    "added_by": string,
    "images": [
      string,
      string
    ],
    "seller": {
      "_id": string,
      "name": string,
      "country_code": string,
      "phone_number": number,
      "image": string,
      "company": string,
      "country": null,
      "state": string,
      "pin_code": string,
      "full_address": string
    }
  },
  "invoice": {
    "_id": string,
    "invoice_id": string,
    "created_at": string
  }
}
export interface OrderListing {
  _id: string
  orderId:string
  order_id: string
  product_order_id: string
  user_id: string
  card_id: string
  coupon_code: string
  coupon_discount: number
  delivery_price: number
  price: number
  total_price: number
  tax_amount: number
  total_earnings: number
  payment_mode: string
  order_status: string
  delivery_status: string
  cancellation_reason: string
  updated_at: string
  created_at: string
  products?: ProductSingle
  product_id?: ProductSingle
  quantity?: number
  language:string
  langProps:any

}



export interface ProductDetails {
  _id: string
  name: string
  description: string
  product_type: string
  added_by: {
    _id: string
    name: string
  },
  parcel_id: string
  category_id: {
    _id: string
    name: string
  },
  subcategory_id: {
    _id: string
    name: string
  },
  sub_subcategory_id: {
    _id: string
    name: string
  } | null,
  brand_id: {
    _id: string
    name: string
  },
  images: Array<string>
  langProps:any
  quantity: number
  price: number
  discount_percantage: number
  discount: number
  discount_price: number
  total_reviews: number
  total_ratings: number
  average_rating: number
  one_star_ratings: number
  two_star_ratings: number
  three_star_ratings: number
  four_star_ratings: number
  five_star_ratings: number
  sold: boolean
  is_blocked: false
  is_deleted: false
  updated_at: string
  created_at: string
  in_cart: boolean
  productdetails: Array<productdetails>
  product_services: Array<product_services>
  product_highlights: Array<product_highlights>
  product_variations:Array<any>
  faqs_products: Array<faqProductDetails>
  ratings: Array<any>
  order_status: string
  onChangeFav: Function
  review: boolean
  language:string
  is_delivery_available:boolean
}
interface ProductSingle {
  description: string,
  prod_id:string
  images: Array<string>,
  name: string,
  _id: string,
  subcategories: {
    name: string
  },
  subcategory:{
    name:string
  }
  brand_id:{
    name:string
  }
  services:Array<any>
  categories:{
    name:string
  },
  product_services: [
    {
      content: string,
    },
  ]

}

interface faqProductDetails {
  answer: string
  created_at: string
  product_id: string
  question: string
  updated_at: string
  disliked_by_you: boolean
  dislikes_count: number
  liked_by_you: boolean
  likes_count: number
  _id: string
  onChangeFav: Function
}

