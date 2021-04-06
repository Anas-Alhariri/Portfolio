import bgMasthead from "../assets/img/bg-masthead.jpg";
import demo1 from "../assets/img/demo-image-01.jpg";
import demo2 from "../assets/img/demo-image-02.jpg";
const Projects = () => {
  return (
    // <!-- Projects-->
    <section className="projects-section bg-light" id="projects">
      <div className="container">
        <h3 className="text-black text-center mb-5 pb-5">My Projects</h3>
        {/* <!-- Featured Project Row--> */}
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMasthead} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Social Media Dating Website</h4>
              <p className="text-black-50 mb-0">
                This project shows some of the objective skills related to
                creaing a Web API using C# (ASP.Net Core) and showing some of my
                skills in working with Angular 6 as my front-end user interface
                for my project. This project has a lot to it more than I can
                describe in few lines. Please, referre to my{" "}
                <a
                  style={{ fontWeight: "600" }}
                  href="https://github.com/Anas-Alhariri/DatingApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>{" "}
                Page to review the project if you want to.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Project One Row--> */}
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demo1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Content Management System CMS</h4>
                  <p className="mb-0 text-white-50">
                    This Project was build using ASP.NET Core 5, Angular 6 and
                    MSSQL for storing the data. The idea of this project, is
                    creating a sample website for a customer to edit, share and
                    publish what they want on their own website. This could be a
                    great example for a store online where the user has an Admin
                    account and Pane to have access to the content and pages and
                    edit and publishing them again without worring about links
                    and backend settings as all of these were set to act
                    dynamically upon changes through the API. As well, Angular
                    was used to take care of the routing and displaying the
                    content of the website dynamically and instently by getting
                    the updates as they happen from the API and Watching for the
                    changes to update the frontend accordingly. Please, referre
                    to my{" "}
                    <a
                      style={{ fontWeight: "600" }}
                      href="https://github.com/Anas-Alhariri/DatingApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>{" "}
                    to review the project if interested.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Project Two Row--> */}
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demo2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Weather Cast APP - UWP</h4>
                  <p className="mb-0 text-white-50">
                    This project is a Universal Windows Application that was
                    build for the purpose of learning the design pattern of UWP
                    and learning about working with third party Web APIs like
                    the one I am using here "OpenWeather Web API"
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
