import TheFooter from "@/components/TheFooter"
import TheHeader from "@/components/TheHeader"
import { Fragment } from "react"

const RootLayout = (props: any) => {
    return (
        <Fragment>
            <div className="h-100 d-flex flex-column">
                <TheHeader />
                <main>
                    {props.children}
                </main>
                <div className="mt-auto">
                    <TheFooter />
                </div>
            </div>
        </Fragment>
    )
}

export default RootLayout