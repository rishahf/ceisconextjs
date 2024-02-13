import { OrderDetails as ProductOrderDetails } from './Products'
export interface OrderDetails {
    data: ProductOrderDetails,
    message: string,
    success: boolean,
    langProps:any
}
interface productDetails {
    _id: string
    name: string
    description: string,
    images: Array<string>
}
interface priceDetail {
    discount: number
    price: number
    total_price: number
}