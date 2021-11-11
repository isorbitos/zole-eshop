import { Link } from "react-router-dom";

const Location =()=>{
    return(

        <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div className="col-md-8">

              <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152.154022650469!2d25.253793052836475!3d54.72179619877905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd914280666fd7%3A0x4d7261323c94927e!2sS.%20Stanevi%C4%8Diaus%20g.%204%2C%20Vilnius%2007129!5e0!3m2!1slt!2slt!4v1636634173964!5m2!1slt!2slt" width="100%" height="330px" style={{border:'0'}} allowFullScreen="" loading="lazy" title="location"></iframe>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content">
                <h4>Mūsų buveinė</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                <ul className="social-icons">
                  <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                  <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                  <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
                  <li><Link to="/"><i className="fa fa-behance"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
};

export default Location;