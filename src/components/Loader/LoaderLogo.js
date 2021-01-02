import React from "react";
import "./LoaderLogo.css";
import AOS from "aos";
import "aos/dist/aos.css";

class LogoLoader extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    const theme = this.props.theme;
    return (
      <>
        <h2
          style={{ color: "white", fontSize: "32px" }}
          data-aos="fade-up-righ"
        >
          Ayodele Samuel Adebayo
        </h2>
      </>
    );
  }
}

export default LogoLoader;
