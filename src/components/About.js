import ipad from "../assets/img/ipad.png";
const About = () => {
  return (
    <section className="about-section text-center" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50" style={{ marginBottom: "10px" }}>
              Hi, my name is Anas - You can call me Max -, I am a Software, Web
              and Mobile Developer. I carry in my heart a hug love for coding,
              and I love the challenges that come along with it. Challenges are
              the fuel that drives me closer to perfection. No one knows it all,
              so here I am enjoying doing my tasks at hand trying to reach
              infinity :)
            </p>
            <p className="text-white-50">
              I am developing my knowledge every single day and all the time! I
              can't set without doing something, I have learned something a long
              time ago through my humble experience in life. Habits are
              powerful, so I decided to make success my essential habit.
            </p>
          </div>
        </div>
        <img className="img-fluid" src={ipad} alt="" />
      </div>
    </section>
  );
};

export default About;
