import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="MDONER DPR - DPR Assistant"
              description="Optimized DPR evaluation with automated workflow, cutting batch processing time by 75% and boosting overall efficiency by 4x. Engineered data preprocessing and feature scaling using LightGBM, CatBoost, NumPy, Pandas, Scikit-Learn, Flask."
              ghLink="https://github.com/DHEEKSHAV17"
              demoLink="https://dpr-mdoner.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="EcoGridX - Smart Grid Optimization"
              description="Engineered AI-Powered Smart Grid Optimization using Reinforcement Learning (PPO), achieving 18% operational cost reduction. Implemented real-time optimization and predictive analysis with PyTorch, Flask, Pandas, NumPy."
              ghLink="https://github.com/DHEEKSHAV17"
              demoLink="http://ecogridx.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MetisAI - Life Cycle Assessment Tool"
              description="AI-Driven LCA tool enabling Industries to assess ecological impact, reducing manual assessment time by 70%. Implemented predictive AI and RPA workflows automating data collection. Tech Stack: RPA, Pandas, Gradient Boosting, NumPy, Flask."
              ghLink="https://github.com/DHEEKSHAV17"
              demoLink="http://metisai-delta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Vazhithunai - Police & Community Platform"
              description="Engineered RAG-Powered chatbot providing instant access to legal information, improving query response time by 60%. Integrated Geo-Tagged complaint filing enabling 500+ citizens to report and track cases in real-time using LangChain, Llama, Flask, MongoDB, JavaScript."
              ghLink="https://github.com/DHEEKSHAV17"
              demoLink="https://github.com/DHEEKSHAV17"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
