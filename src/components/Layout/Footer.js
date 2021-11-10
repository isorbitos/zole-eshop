const Footer = () => {

    const date = new Date();


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <p>
                Copyright &copy; {date.getFullYear()} ŽoliųFėja
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
