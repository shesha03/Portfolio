import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import emotion from "../../Assets/Projects/emotion.png";
import hand from "../../Assets/Projects/hand.png";
import vehicle from "../../Assets/Projects/vehicle.png";
import suicide from "../../Assets/Projects/suicide.png";
import bird from "../../Assets/Projects/bird.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vehicle}
              isBlog={false}
              title="Vehicle Predictive Maintainance System"
              description="The aim of this project is to predict the potential risk or failure faced by the vehicles. It is also used to predict when a vehicle will need maintenance by analyzing various data points "
              ghLink="https://github.com/shesha03/vehicle-maintenance-predictive-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bird}
              isBlog={false}
              title="Flappy Bird AI"
              description="Flappy Bird game implemented in Python with an AI that trains itself to play it. The game uses [NEAT](Neuroevolution of Augmenting Topologies) to enable the AI to learn and improve its performance over time"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hand}
              isBlog={false}
              title="Hand Recognition Using AI"
              description="A hand recognition project aims to develop a computer vision system that can identify and interpret human hand gestures from a camera input, essentially allowing a computer to understand hand movements and respond accordingly, often used for intuitive human-computer interaction (HCI) applications."
              ghLink="https://github.com/shesha03/Hand-gesture-project"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Langchain Streamlit Chatbot for EDA using LLM's"
              description=" This chatbot is designed to assist you in performing exploratory data analysis tasks, providing insights, generating visualizations, and answering questions related to your data. Whether you're a data scientist, analyst, or just curious, this chatbot is here to make your data exploration easier and more interactive."
              ghLink="https://github.com/sumanthweb8/eda-chatbot"
              demoLink="https://scaling-space-guacamole-j6qqw9w4v9gcqq5q-8504.app.github.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
