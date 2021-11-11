import { Fragment } from "react";
import ContactUs from "../components/contacts/ContacUs";
import Location from "../components/contacts/Location";

const ContacPage =()=>{
    return(
        <Fragment>
            <Location />
            <ContactUs />
        </Fragment>
    )
};

export default ContacPage;