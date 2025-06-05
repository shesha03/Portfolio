import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import hand from "../../Assets/Projects/hand.png";
import vehicle from "../../Assets/Projects/vehicle.png";
import bird from "../../Assets/Projects/bird.png";
import vote from "../../Assets/Projects/vote.png";

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
              description="This project is a machine learning project that aims to predict vehicle maintenance needs using historical data and predictive modeling. It leverages state-of-the-art machine learning techniques to assist vehicle owners and maintenance professionals in optimizing maintenance schedules, reducing unexpected breakdowns, and ultimately, save time and money. "
              ghLink="https://github.com/shesha03/vehicle-maintenance-predictive-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Smart E-Voting System using Ethereum Bloackchain"
              description="This project implements a decentralized, transparent, and tamper-proof e-voting system using Ethereum blockchain, smart contracts, and MetaMask. Deployed on the Polygon network, it ensures voter anonymity, prevents double voting, and provides real-time vote verification through transaction hashes. It features phase control, secure authentication, and an intuitive React-based user interface."
              ghLink="https://github.com/shesha03/Smart-Voting-System-Using-Blockchain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Langchain Streamlit Chatbot for EDA using LLM's"
              description=" This project is a Streamlit-powered chatbot that leverages LangChain and large 
              language models (LLMs) to perform intelligent Exploratory Data Analysis (EDA). Users can upload 
              any dataset and interact with it using natural language queries. The chatbot generates insights, 
              visualizations, and summaries on the fly, making data analysis more accessible and intuitive for 
              both technical and non-technical users through a seamless conversational interface."
              ghLink="https://github.com/shesha03/Langchain-Streamlit-Chatbot-for-EDA-Using-LLM-s"
              demoLink="https://scaling-space-guacamole-j6qqw9w4v9gcqq5q-8504.app.github.dev/"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
