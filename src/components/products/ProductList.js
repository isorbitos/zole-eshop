import ProductListItem from "./ProductListitem";
import ProductPages from "./ProductPages";

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
  {
    id: "x4",
    name: "dilgele",
    price: 29.99,
  },
  {
    id: "x5",
    name: "raudonleis",
    price: 19.99,
  },
  {
    id: "x6",
    name: "ramunele",
    price: 14.99,
  },
];

const ProductList = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
        <div className="col-md-12">
            <div className="filters">
              <ul>
                  <li className="active" data-filter="*">All Products</li>
                  <li data-filter=".des">Featured</li>
                  <li data-filter=".dev">Flash Deals</li>
                  <li data-filter=".gra">Last Minute</li>
              </ul>
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
          <ProductPages />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
