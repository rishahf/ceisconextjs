import { COOKIES_USER_ACCESS_TOKEN } from "src/context/actionTypes"
import { API_ROOT } from "./ceiscoApi"

export const initialiseLangData = async (cookies: any, id: string, lang: string) => {
    let rowData = {}
    if (cookies[COOKIES_USER_ACCESS_TOKEN]) {
        try {
            let apiRes = await fetch(`${API_ROOT}User/main-keys/${id}?language=${lang}`)
            let apiResJson = await apiRes.json()
            apiResJson?.data?.map((res: any) => {
                rowData = {
                    ...rowData,
                    [res.key]: res.value
                }

            })
            return { props: { ...rowData } }
        } catch (error) {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }
        }
    } else {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    }
}
export const initLngWithoutAuth = async (id: string, lang: string) => {
    let rowData = {}
        try {
            let apiRes = await fetch(`${API_ROOT}User/main-keys/${id}?language=${lang}`)
            let apiResJson = await apiRes.json()
            apiResJson?.data?.map((res: any) => {
                rowData = {
                    ...rowData,
                    [res.key]: res.value
                }

            })
            return { props: { ...rowData } }
        } catch (error) {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }
        }
}