const Header = () => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">
            Anas Alhariri
            <br />
            <span style={{ fontSize: "4rem" }}>(Max)</span>
          </h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            A free, responsive, one page Bootstrap theme created by Start
            Bootstrap.
          </h2>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            -
            <img
              src="assets/img/infinity.png"
              style={{ width: "60px" }}
              alt="infinity"
            />{" "}
            +
            <img
              src="assets/img/infinity.png"
              style={{ width: "60px" }}
              alt="infinity"
            />{" "}
            = Perfiction
          </h2>
          <a className="btn btn-primary js-scroll-trigger" href="#about">
            Get to know me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
