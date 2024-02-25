import Changepassword from '@/components/account/ChangePassword'
import Orders from '@/components/account/Orders'
import Payment from '@/components/account/Payment'
import AccountProfile from '@/components/account/Profile'
import Wishlist from '@/components/account/WishList'
import AccountLayout from '@/components/common/AccountLayout'
import { GlobalContext } from '@/context/Provider'
import RootLayout from '@/layouts/RootLayout'
import { useRouter } from 'next/router'
import React, { ReactElement, useContext } from 'react'

const PageTypeUser = () => {
    const router = useRouter()
    const {userInfo} = useContext(GlobalContext)
    return <>
        {router.query.type == "profile" && <AccountProfile {...userInfo} />}
        {router.query.type == "wishlist" && <Wishlist />}
        {router.query.type == "orders" && <Orders />}
        {router.query.type == "changepassword" && <Changepassword />}
        {router.query.type == "payment" && <Payment />}
    </>
}

PageTypeUser.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            <AccountLayout>
                {page}
            </AccountLayout>
        </RootLayout>
    )
}
export default PageTypeUser