import { Fragment, useEffect, useState } from "react";
import AboutShort from "../components/about/AboutShort";
import MainCarousel from "../components/Layout/MainCarousel";
import LatestProducts from "../components/products/LatestProducts";
import LinkToProducts from "../components/products/LinkToProducts";

const MainPage =()=>{

    const [currentTime, setCurrentTime] = useState(1)

    useEffect(()=>{
        fetch("/time").then(res=>res.json()).then(data=>setCurrentTime(data.time))
    },[])

    return(
        <Fragment>
            <p>The time now is : {currentTime}</p>
            <LatestProducts />
            <AboutShort />
            <LinkToProducts />
        </Fragment>
    )
};

export default MainPage;