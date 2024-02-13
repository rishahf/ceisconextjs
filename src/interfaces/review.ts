
export default interface MyReviewProductDetails {
    _id: string,
    name: string,
    discount_price: number,
    average_rating: number,
    images: Array<string>


}
export default interface MyReviewList {
    created_at: string,
    description: string,
    images: Array<string>
    product_id: MyReviewProductDetails,
    ratings: number,
    seller_id?: string,
    language:string
    langProps:any
    title: string,
    user_id?: {
        name: string
        profile_pic: string
        _id: string
    },
    _id: string
    deleteReview: Function
    RevLoading: boolean
    dataLoading: boolean
    openModal: Function
    closeModal: Function
    review_id: any

}