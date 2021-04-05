const Contact = () => {
  return (
    // <!-- Contact-->
    <section className="contact-section bg-black" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  Brampton, Ontario, Canada
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="#!">Eng.Anas.Alhariri@PhoenixMates.ca</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">+1 (647) 770-2446</div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center">
          <a className="mx-2" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="mx-2" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="mx-2" href="#!">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
