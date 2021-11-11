import { Fragment } from "react";
import AboutShort from "../components/about/AboutShort";
import LatestProducts from "../components/products/LatestProducts";
import LinkToProducts from "../components/products/LinkToProducts";

const MainPage =()=>{
    return(
        <Fragment>
            <LatestProducts />
            <AboutShort />
            <LinkToProducts />
        </Fragment>
    )
};

export default MainPage;