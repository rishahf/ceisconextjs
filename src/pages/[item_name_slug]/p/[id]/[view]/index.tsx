import ProductDetailOne from '@/components/productDetaill/ProductDetailOne'
import ProductDetailTwo from '@/components/productDetaill/ProductDetailTwo'
import RootLayout from '@/layouts/RootLayout'
import { useRouter } from 'next/router'
import React, { Fragment, ReactElement } from 'react'

const ItemDetails = () => {
    const router = useRouter()
  return <Fragment>
    {Number(router.query.view) === 1 ? <ProductDetailOne/> : <ProductDetailTwo/>}
  </Fragment>
}
ItemDetails.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
export default ItemDetails