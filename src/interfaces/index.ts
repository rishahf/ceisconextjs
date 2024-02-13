import { ProductFilter } from './Products'

export interface ApisListResponse {
    data: {
        data: Array<any>,
        total_count: number
    },
    message?: string,
    success?: boolean
}
export interface BreadcrumbInterface {
    name: string,
    value: string,
    url: string
}
export interface WishlistList {
    _id: string,
    product_id: ProductFilter,
    user_id: string,
    created_at: string
    in_cart: boolean
}
export interface CardGlobleState {
    data: {
        data: Array<CartGlobleObject>,
        total_count: number,

    },
    isAvaliableForSale: boolean

}

export interface CartGlobleObject {
    _id: string,
    user_id: string,
    product_id: ProductFilter,
    product_highlights: [
        { content: string }
    ],
    product_services: [
        { content: string }
    ],
    langProps: any
    available_quantity: number
    quantity: number,
    updated_at: string,
    created_at: string,
    wishlist: boolean
    index: number
    moveToWishList: Function
    removeFromCart: Function
    updateCart: Function
    loading: boolean
    loadingWishList: boolean,
    loadingRemove: boolean,
    cartQuantity: number,
    setCartQuantity: any
    priceCheckout: Function
    initialiseCart: Function
    language: string
    isAvaliableForSale:boolean
}
export interface AddressGlobleState {
    data: {
        data: Array<GlobleAddressObject>,
        total_count: number
    }
}

export interface GlobleAddressObject {
    address_type: string
    apartment_number: string
    city: string
    company: string
    country: string
    country_code: string
    language: string
    created_at: string
    full_address: string
    is_default: boolean
    is_deleted: boolean
    name: string
    phone_no: number
    pin_code: string
    shippo_user_address_id: string
    state: string
    user_id: string
    _id: string
    location: {
        coordinates: Array<any>
    }
    handleDefault: Function
    handleDelete: Function
    selectAddress: Function
    openModal: Function
    closeModal: Function
    delLoading: any
    langProps: any
}
export interface CardListing {
    _id: string
    brand: string
    exp_month: number
    exp_year: number
    last4: number
    selectCard: Function
    handleDelete: Function
    router: any
    cardLaoding: boolean
    closeModal: Function
    openModal: Function
}
export interface faqListing {
    answer: string
    created_at: string
    updated_at: string
    is_disliked: boolean
    is_liked: boolean
    product_id: string
    question: string
    total_dislikes: number
    total_likes: number
    seller_id: {
        name: string
    }
    _id: string
    onChangeFav: Function
}
export interface CouponData {
    "_id": string,
    "name": string,
    "code": string,
    "description": string,
    "type": string,
    "sub_type": string,
    "start_date": string,
    "end_date": string,
    "price": number,
    "percentage": number,
    "max_discount": number,
    "is_available": boolean,
    "is_deleted": boolean,
    "for_homepage": boolean,
    "applicable_for": string,
    "product_ids": Array<string>,
    "added_by": string,
    "seller_id": string,
    "updated_at": string,
    "created_at": string,
    langProps: any
    showCopy: boolean,
    color: string,
    is_coupon_used: boolean
    language: string
}
export interface couponAvailable {
    coupon_discount: number
    response: {
        "_id": string,
        "name": string,
        "code": string,
        "description": string,
        "type": string,
        "sub_type": string,
        "start_date": string,
        "end_date": string,
        "price": number,
        "percentage": number,
        "max_discount": number,
        "is_available": boolean,
        "is_deleted": boolean,
        "for_homepage": boolean,
        "applicable_for": string,
        "product_ids": Array<string>,
        "added_by": string,
        "seller_id": string,
        "updated_at": string,
        "created_at": string,
    }
}
export interface PriceDetails {
    discount: number
    price: number
    total_price: number
    langProps: any
}
export interface NotificationListing {
    read_notifications: Array<NotificationData>
    unread_count: number
    unread_notifications: Array<NotificationData>
}
export interface NotificationData {
    clear_for_user: boolean
    created_at: string
    message: string
    orderProduct_id: string
    order_id: string
    read_by_user: string
    title: string
    type: string
    user_id: string
    _id: string
    images: Array<string>
}