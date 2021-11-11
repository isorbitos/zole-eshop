import { Link } from "react-router-dom"

const AboutTeam = () => {
  return (
    <div className="team-members">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our Team Members</h2>
            </div>
          </div>
          <div className="col-md-4">
              
          </div>
          <div className="col-md-4">
            <div className="team-member">
              <div className="thumb-container">
                <img src="assets/images/team_xx.jpg" alt="" />
                <div className="hover-effect">
                  <div className="hover-content">
                    <ul className="social-icons">
                      <li>
                        <Link to="/about">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-behance"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <h4>Žavinta Pašulėvič</h4>
                <span>CO-Founder</span>
                <p>
                  Nuostabi moteris, dviejų vaikų mama. Tuoj tuoj užkariaus pasaulį. Dar yra žolių ekspertė.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
