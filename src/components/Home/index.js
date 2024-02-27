import { FaUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Home = () => {
  let fullName = localStorage.getItem("fullName");
  if (fullName === undefined) {
    fullName = "Tushar";
  }
  const settings = {
    dots: true,
  };
  return (
    <div className="home-container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/home">
          <FaUserCircle color="white" size={47} />
        </a>
        <button
          className="navbar-toggler hamburger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <HiDotsVertical color="white" size={24} />
            <GiHamburgerMenu color="white" size={30} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link nav-link-item active" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link nav-link-item" href="/home">
              Courses
            </a>
            <a className="nav-link nav-link-item" href="/">
              Logout
            </a>
          </div>
        </div>
      </nav>
      <div className="content-container">
        <h1 className="greetings">Hi! {fullName}</h1>
        <Slider {...settings}>
          <div className="course-container"></div>
          <div className="course-container"></div>
          <div className="course-container"></div>
        </Slider>
        <div className="new-course-container">
          <span className="new-tag">New</span>
        </div>
        <p className="question">What do you want to learn today {fullName}?</p>
      </div>
    </div>
  );
};

export default Home;
