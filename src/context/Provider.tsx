import React, { createContext, ReactNode, SetStateAction, useState } from 'react'
import { ApiListResponse as ProductApiList } from 'src/interfaces/Products';
import ceiscoApi from '@/utils/ceiscoApi';
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { COOKIES_LANGUAGE, COOKIES_USER_ACCESS_TOKEN, ERROR_UNAUTHORIZED, MODULE_PROFILE_SIDEBAR } from './actionTypes';
import { AddressGlobleState, ApisListResponse, CardGlobleState, CouponData } from 'src/interfaces';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getFirebaseMessageToken } from 'src/utils/firebase';
import { ConfigProvider, Button, theme } from 'antd';
import ceiscoEnums from '@/utils/ceiscoEnums';
import { initLngWithoutAuth } from '@/utils/ceiscoLanguage';
import { notification, Space, message } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error' | {'title':"", "desc":""};

type Function = () => Promise<void | string>;
type LoginFunction = (id: string) => void;
type ToastFunction = (msg: any) => void;

interface UserInfo {
    access_token?: string,
    _id?: string,
    profile_pic?: string,
    name?: string,
    email?: string,
    phone_verified?: string,
    phone_no?: string,
    country_code?: string,
    email_verified?: boolean,
    lang: string
}
interface CommonContextType {
    loading: boolean;
    coupon: any,
    setCoupon: any,
    requestNotification: Function,
    initialiseCart: Function,
    initialiseAddress: Function,
    setLoading: React.Dispatch<SetStateAction<boolean>>;
    globleCarts: CardGlobleState,
    setGlobleCarts: React.Dispatch<SetStateAction<any>>,
    setLat: React.Dispatch<SetStateAction<any>>,
    setLng: React.Dispatch<SetStateAction<any>>,
    lat: string,
    lng: string,
    globleAddresses: AddressGlobleState,
    setGlobleAddresses: React.Dispatch<SetStateAction<any>>,
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<SetStateAction<any>>;
    setLanguage: React.Dispatch<SetStateAction<any>>;
    language: any,
    deals_of_the_day: ProductApiList,
    home_banner_1: any,
    couponHome: CouponData,
    fashion_deals: ProductApiList,
    loginWithFacebook: Function,
    initLoginWithGoogle: LoginFunction,
    setCouponEnable: React.Dispatch<SetStateAction<boolean>>,
    couponEnable: boolean,
    profileKeys: any
    headerKeys: any
    homeKey: any
    footerKey: any
    loginKey: any
    handleError:LoginFunction
    NotificationToast: {
        error: ToastFunction,
        info: ToastFunction,
        success: ToastFunction,
        warn: ToastFunction
    }
}

export const GlobalContext = createContext({} as CommonContextType);
export const downloadFile = (file_path: String) => {
    var a: any = document.createElement('a') as HTMLElement;
    a.href = file_path;
    a.target = "_blank";
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
export const MetamaskResource = {
    icon: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg',
    name: 'Metamask',
    title: 'Connect with metamask'
}
export const WalletConnectResource = {
    icon: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg',
    name: 'WalletConnect',
    title: 'Connect with walletConnect'
}
type GlobleContextProviderProps = {
    children: ReactNode;
    deals_of_the_day: ApisListResponse,
    fashion_deals: ProductApiList
    user_info: UserInfo,
    home_banner_1: any,
    coupon_enable: boolean,
    couponHome: CouponData,
    lang: string,
    mainKey: { data: {} }
    profileKeys: {}
    headerKeys: {}
    footerKey: {}
    homeKey: {}
    loginKey: {}
}

function GlobalProvider(props: GlobleContextProviderProps) {
    Array.isArray(props.mainKey?.data) && props.mainKey.data?.map((res: any) => {
        if (props?.lang) {
            setCookie(null, `lang_${res.name}`, res._id, {
                path: "/",
            });
        } else {
            setCookie(null, COOKIES_LANGUAGE, 'ENGLISH', {
                path: "/",
            });
            setCookie(null, `lang_${res.name}`, res._id, {
                path: "/",
            });
        }

    })

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [coupon, setCoupon] = React.useState('')
    const [lat, setLat] = React.useState("")
    const [lng, setLng] = React.useState("")
    const [globleCarts, setGlobleCarts] = React.useState({} as CardGlobleState)
    const [globleAddresses, setGlobleAddresses] = React.useState({} as AddressGlobleState)
    const [notificationApi,contextHolder] = notification.useNotification();
    const [messageApi,contextHolderMsg] = message.useMessage();
    const [userInfo, setUserInfo] = useState(props.user_info)
    const [couponEnable, setCouponEnable] = useState(props.coupon_enable)
    const [language, setLanguage] = useState(props?.lang ? props?.lang : "ENGLISH")
    ceiscoApi.language(language)
    ceiscoApi.setToken(userInfo?.access_token ? userInfo?.access_token : "")
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const handleError = (error: any) => NotificationToast.error((typeof error?.response?.body?.error_description === "string") ? error?.response?.body?.error_description : JSON.stringify(error?.response?.body?.error_description))
    const loginWithSocial = async (social_type: string, social_token: string) => {
        let notificationToken = await requestNotification();
        if (social_token)
            try {
                const items = {
                    social_type,
                    social_token,
                    language: 'ENGLISH'
                }
                if (notificationToken) {
                    items["fcm_token"] = notificationToken;
                }
                let apiRes = await ceiscoApi.Auth.socialLogin(items)
                const data = apiRes?.data
                const accessToken = data?.access_token
                if (accessToken) {
                    setCookie(null, COOKIES_USER_ACCESS_TOKEN, accessToken);
                }
                setUserInfo(data)
                router.replace('/')
            } catch (error:any) {
                handleError(error)
            }
    }

    const loadGoogleMapScript = (callback: any) => {
        if (typeof (window as any).google === 'object' && typeof (window as any).google.maps === 'object') {
            callback();
        } else {
            const googleMapScript = document.createElement("script");
            googleMapScript.src = `https://accounts.google.com/gsi/client`;
            window.document.body.appendChild(googleMapScript);
            googleMapScript.addEventListener("load", callback);
        }
    }

    const loginWithGoogle = async (response: any) => {
        await loginWithSocial("GOOGLE", response.credential)
    }

    const initLoginWithGoogle = (id: string) => {
        loadGoogleMapScript(() => {
            const google = (window as any).google
            google?.accounts?.id?.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_LIVE_LOGIN_KEY as string,
                callback: loginWithGoogle,
                cancel_on_tap_outside: false
            });
            google?.accounts?.id?.renderButton(
                document.getElementById(id),
                { theme: "outline", size: "large", type: 'standard', }  // customization attributes
            );
            // google.accounts.id.prompt()
        })
    }
    const loginWithFacebook = async () => {
        const win = window as any
        win.FB.login((response: any) => {
            loginWithSocial("FACEBOOK", response?.authResponse?.accessToken)
        });
    }
    const initLoginWithFacebook = () => {
        const win = window as any
        win.fbAsyncInit = () => {
            (window as any).FB?.init({
                appId: process.env.NEXT_PUBLIC_FACEBOOK_LOGIN_APP_ID,
                cookie: true,
                xfbml: true,
                version: process.env.NEXT_PUBLIC_FACEBOOK_LOGIN_VERSION
            });
        }
    }
    const initialiseCart = async () => {
        if (globleCarts.data?.total_count === 0) {
            setLoading(true)
        }
        try {
            let apiRes = await ceiscoApi.Cart.getCart(0, 20)
            let isAvaliable = apiRes?.data?.data?.find((res:any) => res.product_id?.is_deleted)
            setGlobleCarts({
                ...globleCarts,
                ...apiRes,
                isAvaliableForSale:isAvaliable !== undefined ? false : true
            })
        } catch (error: any) {

        } finally {
            setLoading(false)
        }
    }
    const initialiseAddress = async () => {
        setLoading(true)
        try {
            let apiRes = await ceiscoApi.Address.get()
            setGlobleAddresses(apiRes)
        } catch (error: any) {
            if (error.response.body.error == ERROR_UNAUTHORIZED) {
                destroyCookie(null, COOKIES_USER_ACCESS_TOKEN, {
                    maxAge: 0,
                    path: "/",
                });
                router.replace(`/signin`)
            } else {
                let error_description = error?.response?.body?.error_description
                if (typeof error_description === "string") {
                    NotificationToast.error(error_description)
                } else {
                    NotificationToast.error(JSON.stringify(error_description))
                }
            }
        } finally {
            setLoading(false)
        }
    }

    const initSupportChat = () => {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://embed.tawk.to/${process.env.TAWK_PROPERTY_ID}/1ghau2pg2`;
        window.document.body.appendChild(googleMapScript);
    }
    const initialiseAnalytics = () => {
        const analytics = getAnalytics();
        if (process.env.NODE_ENV === 'production') {
            logEvent(analytics, router.asPath);
            router.events.on('routeChangeComplete', logEvent);
            return () => {
                router.events.off('routeChangeComplete', logEvent);
            };
        }
    }

    const requestNotification = async () => {
        debugger
        if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification");
            return ""
        }
        else if (Notification.permission === "granted") {
            let { tokenId, error } = await getFirebaseMessageToken()

            if (error) {
                console.log("enableNotification error", error);
                return ""
            }
            return tokenId
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(async (permission) => {
                if (permission === "granted") {
                    let { tokenId, error } = await getFirebaseMessageToken()
                    if (error) {
                        console.log("enableNotification error", error);
                        return ""
                    }
                    return tokenId

                } else {
                    console.log("permission", permission);
                    return ""
                }
            });
        } else {
            return ""
        }
    }
   
    const error = (error: any) => {
        debugger
        let errorBody = error?.response?.body
        let error_description = errorBody?.error_description
        let message = error_description
        typeof message !== 'string' ?
        notificationApi['error']({
            message: message?.title,
            description: message?.desc,
        }) : messageApi.open({
            type: 'error',
            content: message,
        })
    }
    const warn = (msg:NotificationType) => {
        typeof msg !== 'string' ?
        notificationApi['warning']({
            message: msg?.title,
            description: msg?.desc,
        }) : messageApi.open({
            type: 'warning',
            content: msg,
        })
    }
    const success = (msg: NotificationType) => {
        typeof msg !== 'string' ?
            notificationApi['success']({
                message: msg?.title,
                description: msg?.desc,
            }) : messageApi.open({
                type: 'success',
                content: msg,
            })
    }
    const info = (msg:NotificationType) => {
        typeof msg !== 'string' ?
            notificationApi['info']({
                message: msg?.title,
                description: msg?.desc,
            }) : messageApi.open({
                type: 'info',
                content: msg,
            })
    }
    const NotificationToast = {
        success,
        error,
        warn,
        info,
    }
    React.useEffect(initLoginWithFacebook, [])
    React.useEffect(initSupportChat, [])
    React.useEffect(initialiseAnalytics, []);
    React.useEffect(() => {
        if (userInfo?.access_token && router.pathname !== "/signin") {
            initialiseCart()
        }
    }, [router.pathname, language]);
    React.useEffect(() => {
        if (userInfo?.access_token && router.pathname !== "/signin") {
            initialiseAddress()
        }
    }, [router.pathname, router.query._id, language]);
    React.useEffect(() => {
        setIsDarkMode(true)
        setTimeout(() => {
            setIsDarkMode(false)
        }, 50)
    }, [])

    return (
        <GlobalContext.Provider
            value={{ loading, setLoading,handleError, NotificationToast, globleCarts, setGlobleCarts, globleAddresses, setGlobleAddresses, coupon, setCoupon, userInfo, initialiseCart, initialiseAddress, setUserInfo, loginWithFacebook, initLoginWithGoogle, couponEnable, setCouponEnable, requestNotification, lat, lng, setLat, setLng, setLanguage, language, ...props }}>
            <ConfigProvider

                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                    components: {
                        // Slider: {
                        // colorPrimary: '#48B047',
                        // colorBorderSecondary:'#000000',
                        // colorFill:'#000000',
                        // colorFillSecondary:'#48B047',
                        // colorBorder:'#48B047',
                        // colorBorderBg:"#48B047",
                        // },
                    },
                }}
            >
                <div className='h-100 d-flex flex-column' dir={props?.lang == ceiscoEnums.Language.ARABIC ? 'rtl' : ''}>

                    {props.children}
                </div>
            </ConfigProvider>
            {contextHolder}
            {contextHolderMsg}
            <ToastContainer autoClose={2000} />

        </GlobalContext.Provider>
    )
}

export default GlobalProvider
