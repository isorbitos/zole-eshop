import { Fragment } from "react"
import Footer from "./Footer"
import MainCarousel from "./MainCarousel"
import NavBar from "./NavBar"

const Layout = (props) =>{
    return(
        <Fragment>
            <NavBar />
            <MainCarousel />
            <main>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout