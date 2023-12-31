import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="home">
        <h1>Welcome to My Web World!</h1>
        <p className="welcomeNote">
          I'm thrilled to have you here as I embark on an exciting journey into
          the world of web development and internet applications. 🌐 Let me
          introduce myself: I'm Iden, and currently enrolled in the Web
          Development & Internet Applications program at Algonquin College,
          Ottawa. My passion for this field knows no bounds, and I'm constantly
          amazed by the possibilities it offers.
        </p>
        <h3>Why Am I Here?</h3>
        <p className="welcomeNote">
          The purpose of this website is simple yet profound: I want to showcase
          my skills and talents to companies and professionals in the web
          development realm, with the hope of securing the perfect co-op
          position. 🚀
        </p>
        <h3>Explore My Work</h3>
        <p className="welcomeNote">
          Here, you'll discover a glimpse of my previous projects. These are not
          just lines of code; they are my creative expressions and
          problem-solving solutions. Each project reflects my dedication to
          excellence and my unwavering commitment to learning.
        </p>
        <h3>Discover My Story</h3>
        <p className="welcomeNote">
          If you're curious to know more about me, head over to the{" "}
          <Link to="/about" className="certification-link">
            About
          </Link>{" "}
          page. There, you'll find my resume and a brief biography that delves
          into my background and aspirations.
        </p>
        <p className="welcomeNote">
          Please don't hesitate to reach out to me if you have any questions or
          if there's anything I can assist you with. I'm here and eager to
          connect.
        </p>
      </div>
    </>
  );
};

export default HomePage;
