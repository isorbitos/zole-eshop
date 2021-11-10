import { Fragment } from "react";
import AboutShort from "../components/about/AboutShort";
import LatestProducts from "../components/products/LatestProducts";

const MainPage =()=>{
    return(
        <Fragment>
            <LatestProducts />
            <AboutShort />
        </Fragment>
    )
};

export default MainPage;