/* eslint-disable jsx-a11y/anchor-has-content */
import "../style.css";

const Work = () => {
  const superProf =
    "https://www.superprof.ca/provide-you-with-unique-learning-experience-experienced-educator-use-amazing-learning-psychology-deliver-the.html";
  return (
    //  <!-- Work-->
    // <section className="signup-section" id="signup">
    //   <div className="container">
    //     <div className="row">
    //       < className="col-md-10 col-lg-8 mx-auto text-center">
    <div className="timeline-main-container" id="work">
      <h3 className="text-black text-center mb-5 pb-5">Work History</h3>
      <div className="timeline">
        <div className="timeline-container right">
          <div className="content">
            <h2 className="date">2020 – 2021</h2>
            <p className="job-title">Programming Instructor and Tutor</p>
            <p className="location">
              <a href={superProf} alt="Link" target="_blank" rel="noreferrer">
                @{"SuperProf.ca"}
              </a>
            </p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="content">
            <h2 className="date">2019 – 2020</h2>
            <p className="job-title">IT Professional/Professional Technician</p>
            <p className="location">@ Zarr Tech Inc. (Oakville, On, Canada)</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="content">
            <h2 className="date">2016 – 2017</h2>
            <p className="job-title">Junior Front-End Web Developer</p>
            <p className="location">@ Caffieine.co.il Company (Portugal)</p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="content">
            <h2 className="date">2010 – 2015</h2>
            <p className="job-title">Freelancer Technician</p>
            <p className="location">@ Amman, Jordan</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="content">
            <h2 className="date">2009 - 2010</h2>
            <p className="job-title">IT Administrator/Manager</p>
            <p className="location">@ WhiteRose Hotel (Syria)</p>
          </div>
        </div>
      </div>
    </div>
    //         <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
    //         <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
    //         <form className="form-inline d-flex">
    //           <input
    //             className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
    //             id="inputEmail"
    //             type="email"
    //             placeholder="Enter email address..."
    //           />
    //           <button className="btn btn-primary mx-auto" type="submit">
    //             Subscribe
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Work;
