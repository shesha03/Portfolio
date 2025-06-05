import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";

function Experience() {
  const experiences = [
    {
      title: "AI-ML Engineer Intern",
      company: "AquaAirX Autonomous System",
      duration: "Mar 2025 – Present",
      description: [
        "Trained Gemma-3-1B-IT and T5 models for bathymetric report generation.",
        "Created synthetic telemetry and sonar datasets to enhance training quality.",
        "Implemented OCR and image analysis for underwater image insights.",
        "Built a pipeline for fully automated survey data-to-report conversion.",
      ],
      tags: [
        "Machine Learning",
        "Computer Vision",
        "YOLO",
        "T5",
        "LLMs",
        "NLP",
      ],
    },
    {
      title: "AIML Intern",
      company: "PRDC Infotech Pvt. Ltd.",
      duration: "Oct 2024 – Nov 2024",
      description: [
        "Developed hybrid AI model (Random Forest, SVM, CNN) for power grid fault detection.",
        "Processed proprietary grid signal files (.OSG, .BWF) for EDA and modeling.",
        "Delivered working prototype integrated into real-time fault monitoring systems.",
      ],
      tags: ["Machine Learning", "SVM", "CNN", "EDA", "Signal Processing"],
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">Work Experience</h1>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              className={`experience-card-modern ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={index}
            >
              <h2 className="experience-role">▎ {exp.title}</h2>
              <h5 className="experience-company">{exp.company}</h5>
              <p className="experience-duration">{exp.duration}</p>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {exp.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
