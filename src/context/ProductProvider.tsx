import React, { createContext, ReactNode, SetStateAction, useState } from 'react'
import ceiscoApi from '@/utils/ceiscoApi';
import { ApisListResponse } from 'src/interfaces';
import { GlobalContext } from './Provider';


interface CommonContextType {
    nested: ApisListResponse;
    nestedLoading: boolean

}
export const ProductContext = createContext({} as CommonContextType);

type GlobleContextProviderProps = {
    children: ReactNode;
}

function ProductProvider(props: GlobleContextProviderProps) {
    const [nested, setNested] = useState({} as ApisListResponse)
    const [nestedLoading, setNestedLoading] = React.useState(false)
    const { language } = React.useContext(GlobalContext)



    const initialiseCategory = async () => {
        setNestedLoading(true)
        try {
            const apiRes = await ceiscoApi.Common.nested()
            setNested(apiRes)
        } catch (error) {

        } finally {
            setNestedLoading(false)
        }
    }
    React.useEffect(() => { initialiseCategory() }, [language])


    return (
        <ProductContext.Provider
            value={{ nested, nestedLoading, ...props }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
