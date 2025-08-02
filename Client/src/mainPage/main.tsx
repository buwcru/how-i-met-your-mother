import { useNavigate } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./main.css";
function Main() {
  const navigate = useNavigate();

  const handleStartBtnClick = () => {
    navigate("/auth");
  };

  return (
    <>
      <Header />

      <div className="w-100 text-center d-flex flex-column gap-3 main-cta justify-content-center align-items-center px-3">
        <div className="cta-text">
          <h1>
            Get <span className="text-secondary">Real Life</span> Experiences On
            Your <span className="text-secondary">Desktop</span>
          </h1>
          <p>Global solutions for boredoom and loneliness in one app</p>
        </div>
        <a
          className="btn btn-lg btn-secondary px-5 py-3"
          onClick={handleStartBtnClick}
        >
          Get Started
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Main;
