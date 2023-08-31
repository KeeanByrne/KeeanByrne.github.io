import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/flappy-icon.png";
import projImg3 from "../assets/img/farm-central-icon.png";
import projImg1 from "../assets/img/snake-icon3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Snake Game",
      description: "Console Application built with C#",
      imgUrl: projImg1,
      url: "https://github.com/KeeanByrne/Snake-Game",
    },
    {
      title: "Flappy Bird",
      description: "WPF Application built using C#",
      imgUrl: projImg2,
      url: "https://github.com/KeeanByrne/Snake-Game",
    },
    {
      title: "Farm Central Stock Management",
      description: "Web App built using C# & .NET",
      imgUrl: projImg3,
      url: "https://github.com/KeeanByrne/Snake-Game",
      
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>Below are some of the projects I have worked on during 2023. These are projects that I take on during my spare time to further enhance my development skill set. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>More projects that I have worked on!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects that I have worked on!</p>
                    </Tab.Pane>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
