import './../utils/firebase'
import "bootstrap/dist/css/bootstrap.min.css";
import 'nprogress/nprogress.css'
import 'src/styles/globals.scss'
import type { AppProps } from 'next/app'
import GlobalProvider from 'src/context/Provider';
import Head from 'next/head';
import Script from 'next/script';
import { ReactNode } from 'react';
import { NextPage } from 'next';
import ceiscoApi, { API_ROOT } from '@/utils/ceiscoApi';
import { ApiListResponse as ProductApiList } from 'src/interfaces/Products';
import { parseCookies, setCookie } from "nookies"
import { COOKIES_COUPON_CODE, COOKIES_LANGUAGE, COOKIES_USER_ACCESS_TOKEN, MODULE_FOOTER, MODULE_HEADER, MODULE_HOME, MODULE_PROFILE_SIDEBAR, MODULE_SIGNIN } from 'src/context/actionTypes';
import NProgress from 'nprogress';
import ProductProvider from 'src/context/ProductProvider';
import { CouponData } from 'src/interfaces';
import { Router } from 'next/router';
import { initLngWithoutAuth } from '@/utils/ceiscoLanguage';
import ceiscoEnums from '@/utils/ceiscoEnums';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode, headerKeys: any) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
  discover_more: ProductApiList;
  fashion_deals: ProductApiList;
  user_info: any;
  home_banner_1: any;
  coupon_enable: boolean;
  couponHome: CouponData
  lang: string,
  mainKey: { data: {} }
  profileKeys: {}
  headerKeys: {}
  footerKey: {}
  homeKey: {}
  loginKey: {}
};
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


const MyApp = ({ Component, pageProps, ...props }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode, headerKeys: any) => page);

  return <GlobalProvider {...props}>
    <Head>
      <title>
        Ceisco | E-commerce platform
      </title>
      {props?.lang == ceiscoEnums.Language.ARABIC ?
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css" rel="stylesheet" /> :
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
      }
      {/* <link rel="icon" href="./favicon.ico" /> */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="India&apos;s largets e-commerce platform" />

    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
    <Script src="https://apis.google.com/js/platform.js?onload=init" async defer></Script>
    <Script id="my-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    <Script id="my-script" strategy="lazyOnload">
      {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
    <Script id="my-script" type="text/javascript"
      src='https://crmplus.zoho.com/crm/javascript/zcga.js'> </Script>
    <Script async defer src="https://connect.facebook.net/en_US/sdk.js"></Script>
    <ProductProvider {...props}>

      {getLayout(
        <Component {...pageProps} />, props
      )}
    </ProductProvider>
  </GlobalProvider >

}
MyApp.getInitialProps = async (context: any) => {
  const mainKey = await ceiscoApi.Lang.getKeyId()
  const profileId = mainKey?.data?.find(res => `lang_${res?.name}` == MODULE_PROFILE_SIDEBAR)
  const headerId = mainKey?.data?.find(res => `lang_${res?.name}` == MODULE_HEADER)
  const footerId = mainKey?.data?.find(res => `lang_${res?.name}` == MODULE_FOOTER)
  const homeId = mainKey?.data?.find(res => `lang_${res?.name}` == MODULE_HOME)
  const loginId = mainKey?.data?.find(res => `lang_${res?.name}` == MODULE_SIGNIN)
  const lang = parseCookies(context.ctx)[COOKIES_LANGUAGE]
  const langCookie = lang ? lang : "ENGLISH"
  const discoverRes = await fetch(`${API_ROOT}Homepage/user/best_on_ecom?limit=6&pagination=0&language=${'ENGLISH'}`)
  const discover_more = await discoverRes.json()
  const fashionRes = await fetch(`${API_ROOT}Homepage/user/fashion_deals?limit=6&pagination=0&language=${'ENGLISH'}`)
  const fashion_deals = await fashionRes.json()
  const home_banner = await fetch(`${API_ROOT}Homepage/user/banner?language=${'ENGLISH'}&position=TOP`)
  const home_banner_1 = await home_banner?.json()

  const homePromotionCoupon = await ceiscoApi.Coupons.home()
  const couponHome = homePromotionCoupon?.data
  const profileKeys = await initLngWithoutAuth(String(profileId?._id), String(langCookie))
  const headerKeys = await initLngWithoutAuth(String(headerId?._id), String(langCookie))
  const footerKey = await initLngWithoutAuth(String(footerId?._id), String(langCookie))
  const homeKey = await initLngWithoutAuth(String(homeId?._id), String(langCookie))
  const loginKey = await initLngWithoutAuth(String(loginId?._id), String(langCookie))
  try {
    const mainKey = await ceiscoApi.Lang.getKeyId()
    const discoverRes = await fetch(`${API_ROOT}Homepage/user/best_on_ecom?limit=6&pagination=0&language=${'ENGLISH'}`)
    const discover_more = await discoverRes.json()
    const fashionRes = await fetch(`${API_ROOT}Homepage/user/fashion_deals?limit=6&pagination=0&language=${'ENGLISH'}`)
    const fashion_deals = await fashionRes.json()
    const home_banner = await fetch(`${API_ROOT}Homepage/user/banner?language=${'ENGLISH'}&position=TOP`)
    const home_banner_1 = await home_banner?.json()
    const homePromotionCoupon = await ceiscoApi.Coupons.home()
    const couponHome = homePromotionCoupon?.data
    const accessToken = parseCookies(context.ctx)[COOKIES_USER_ACCESS_TOKEN]
    const coupon_enable = parseCookies(context.ctx)[COOKIES_COUPON_CODE]
    if (accessToken) {
      ceiscoApi.setToken(accessToken)
      let apiRes = await ceiscoApi.Auth.profile()
      const user_info = apiRes.data
      return { discover_more, fashion_deals, user_info, home_banner_1, couponHome, lang, coupon_enable: coupon_enable == "true", mainKey, profileKeys, headerKeys, footerKey, homeKey, loginKey }
    }
    return { discover_more, fashion_deals, user_info: null, home_banner_1, couponHome, lang, coupon_enable: coupon_enable == "true", mainKey, profileKeys, headerKeys, footerKey, homeKey, loginKey }

  } catch (error: any) {
    return { discover_more, fashion_deals, home_banner_1, couponHome, user_info: null, coupon_enable: false, profileKeys, headerKeys, footerKey, mainKey, profileId, headerId, footerId, homeKey, loginKey }
  }

}

export default MyApp
