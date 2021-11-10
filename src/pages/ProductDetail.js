import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ()=>{

    const params = useParams()

    return(
        <Fragment>
            <h1>Info apie produkta!!!</h1>
            <p>{params.productId}</p>
        </Fragment>
    )
};

export default ProductDetail;