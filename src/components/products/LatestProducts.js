import { Link } from "react-router-dom";
import ProductListItem from "./ProductListitem";

const DUMMY_LIST = [
  {
    id: "x1",
    name: "dilgele",
    price: 29.99,
  },
  {
    id: "x2",
    name: "raudonleis",
    price: 19.99,
  },
  {
    id: "x3",
    name: "ramunele",
    price: 14.99,
  },
];


const LatestProducts = () =>{
    return (
        <div className="latest-products">
          <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                  <h2>Latest Products</h2>
                  <Link to="/products">view all products <i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
              {DUMMY_LIST.map((product) => (
                <ProductListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      );
};

export default LatestProducts;