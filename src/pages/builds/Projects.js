import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "./Projects.css";
import Footer from "../../components/footer/Footer";

const Projects = () => {
  // create empty state
  const [projects, setProjects] = useState([]);
  // fetch data
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);

  return (
    <>
      <section className="projects">
        <h1>All Projects</h1>
        <Container fluid>
          <Row>
            {projects.map((project) => {
              return (
                <Col lg={4} md={6} sm={12} key={project.id} className="content">
                  <Card>
                    <Card.Img variant="top" src={project.photo} />
                    <Card.Body>
                      <Card.Title className="text-white">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="text-white">
                        {project.description}
                      </Card.Text>
                      <a href={project.link}>View</a>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
