import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m <b className="purple">Shesha Simha</b>, a graduate in
              <b className="purple">
                {" "}
                Artificial Intelligence and Machine Learning
              </b>{" "}
              from Global Academy of Technology, Bangalore.
              <br />
              <br />I specialize in building intelligent systems that combine
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Computer Vision, NLP,
                </b>{" "}
                and
                <b className="purple"> Data Automation</b>.
              </i>
              <br />
              <br />
              At <b className="purple">AquaAirX Autonomous Systems</b>, I worked
              on automating
              <b className="purple"> bathymetric survey reports</b> using
              telemetry, sonar, and underwater imagery with AI-powered
              pipelines.
              <br />
              <br />
              At <b className="purple">PRDC Infotech</b>, I developed real-time
              <b className="purple"> fault detection systems</b> for power grids
              using
              <b className="purple"> SVM, CNN, and Random Forest</b>.
              <br />
              <br />I love creating impactful solutions with technologies like
              <b className="purple">
                {" "}
                Python, TensorFlow, LangChain, Streamlit,
              </b>{" "}
              and
              <b className="purple"> Ethereum Smart Contracts</b>.
              <br />
              <br />
              I’m also passionate about
              <i>
                <b className="purple"> Blockchain, Web Technologies,</b> and
                modern tools like <b className="purple">React.js, Next.js</b>,
                and <b className="purple">Node.js</b>
              </i>
              , where I apply my full-stack knowledge to build intelligent,
              scalable applications.
            </p>
          </Col>

          <Col
            md={4}
            className="myAvtar d-flex justify-content-center align-items-center"
          >
            <Tilt>
              <img
                src={myImg}
                className="img-fluid profile-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shesha03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SimhaShesha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shesha-simha-bb784925a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
