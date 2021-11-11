import { Link } from "react-router-dom"

const ProductPages = () => {
  return (
    <div className="col-md-12">
    <ul className="pages">
      <li><Link to="/products">1</Link></li>
      <li className="active"><Link to="/products">2</Link></li>
      <li><Link to="/products">3</Link></li>
      <li><Link to="/products">4</Link></li>
      <li><Link to="/products"><i className="fa fa-angle-double-right"></i></Link></li>
    </ul>
  </div>
  )
};

export default ProductPages;
