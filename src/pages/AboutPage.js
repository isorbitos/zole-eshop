import { Fragment } from "react";
import AboutCompany from "../components/about/AboutCompany";
import AboutPartners from "../components/about/AboutPartners";
import AboutTeam from "../components/about/AboutTem";

const AboutPage =()=>{
    return(
        <Fragment>
            <AboutCompany />
            <AboutTeam />
            <AboutPartners />
        </Fragment>
    )
};

export default AboutPage;