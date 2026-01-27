import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Dheeksha V</span>{" "}
            from <span className="purple">Tamil Nadu, India</span>.
            <br />
            I'm a <span className="purple">B.Tech Information Technology</span> student at{" "}
            <span className="purple">Bannari Amman Institute of Technology</span> with{" "}
            <span className="purple">strong expertise in Java-based Full Stack Development, OOPs, and AI-driven automation</span>.
            <br />I have led and contributed to multiple AI and automation projects,{" "}
            <span className="purple">improving operational efficiency by 4x</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI & Automation Solutions 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Emerging Technologies 🔍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dheeksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
