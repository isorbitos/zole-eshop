import { Link } from "react-router-dom";

const LinkToProducts =()=>{
    return(
        <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>Creative &amp; Unique <em>Žolės</em> Produktai</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                  </div>
                  <div className="col-md-4">
                    <Link className="filled-button" to="/products" >Įsigyk</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default LinkToProducts;