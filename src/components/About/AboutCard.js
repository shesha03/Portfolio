import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hey, I’m <span className="purple">Shesha</span> — part engineer, part explorer from{" "}
      <span className="purple">Bangalore, India.</span>
      <br />
      <br />
      When I’m not building AI systems or crafting code, I’m probably riding with my crew,
      chasing sunsets, or nerding out over the latest tech drops.
      <br />
      <br />
      I believe in clean code, bold ideas, and making every project feel like a passion project.
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Motorcycle Rides
      </li>
      <li className="about-activity">
        <ImPointRight /> Tinkering with Tech
      </li>
      <li className="about-activity">
        <ImPointRight /> Discovering Offbeat Places
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "I build with purpose, code with passion, and ride with freedom."
    </p>
    <footer className="blockquote-footer">Shesha</footer>
  </blockquote>
</Card.Body>
    </Card>
  );
}

export default AboutCard;
