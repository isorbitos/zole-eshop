import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductListItem = (props) => {
  const { id, name, price } = props;

  return (
    <Fragment>
      <div className="col-md-4">
        <div className="product-item">
          <Link to={`/products/${id}`}>
            <img src="/assets/images/product_1.png" alt="" />
          </Link>
          <div className="down-content">
          <Link to={`/products/${id}`}>
              <h4>{name}</h4>
            </Link>
            <h6>${price}</h6>
            <p>
              Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
              nulla aspernatur.
            </p>
            <ul className="stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
            <span>Reviews (24)</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductListItem;
