import { Link } from "react-router-dom";

const AboutShort = ()=>{
    return(
        <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Apie Žolės Fėją</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Ieškot for the best productų?</h4>
                <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p>
                <ul className="featured-list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur an adipisicing elit</li>
                  <li>It aquecorporis nulla aspernatur</li>
                  <li>Corporis, omnis doloremque</li>
                  <li>Non cum id reprehenderit</li>
                </ul>
                <Link className="filled-button" to="/about">Daugiau...</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="assets/images/feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default AboutShort;