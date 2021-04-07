const Header = () => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase anas">
            Anas Alhariri
            <br />
            {/* <span style={{ fontSize: "4rem" }}>(Max)</span> */}
            <span className="max">(Max)</span>
          </h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Software, Full-Stack Web and Mobile Application Developer
          </h2>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            <span className="perfection text-uppercase"> Perfection </span>
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
