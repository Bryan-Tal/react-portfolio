import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import medDashImg from "../assets/img/med-dash-img.png"
import spyImg from "../assets/img/S&P-Analysis-shrunk.png"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2-halved.png";
import "../css/Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Projects = () => {

    const projects = [
        {
            title: "MedDash",
            description: "A medical dashboard designed to aggregate data from various wearable sensors so a user can easily visualize their daily health metrics.",
            imgUrl: medDashImg,
        },
        {
            title: "Business Startup",
            description: "Medical Dashboard",
            imgUrl: projImg2,
        },
        {
            title: "Visual Analysis of the S&P500 ETF",
            description: "This is a visual analysis of the SPY stock using d3.js",
            imgUrl: spyImg,
        },
    ];
    return ( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__flipInY" : ""}>
                                <h2>Projects</h2>
                                <p>Here I have projects I have done or am currently working on. Click on a project to view more information about it!</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Visualizations</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectCard key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"> Here I will be showcasing visualizations that I think are neat.</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                           
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-img-right" />
        </section>
     );
}
 
