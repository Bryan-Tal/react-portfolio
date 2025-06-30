import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import dashboard1 from "../assets/img/dashboard1.png";
import dashboard2 from "../assets/img/dashboard2.png";
import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2-halved.png";
// import background from "../assets/img/project-background.jpg"
import "../css/Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        
        {
            title: "Providing Data Driven Suggestions",
            description: "In this project I created a decision tree, random forest model, and XGBoost model to predict employee turnover.",
            imgUrl: projImg1,
            projectUrl: "https://github.com/Bryan-Tal/Providing_Data_Driven_Suggestions",
        },
        {
            title: "Predicting NYC Taxi Gratuities",
            description: "In this project I created a random forest model, and XGBoost model to predict generous rider gratuity.",
            imgUrl: projImg2,
            projectUrl: "https://github.com/Bryan-Tal/Predicting_NYC_Taxi_Gratuities"
        },
        {
            title: "MedDash",
            description: "A medical dashboard designed to aggregate data from various wearable sensors so a user can easily visualize their daily health metrics.",
            imgUrl: projImg3,
            projectUrl: "https://github.com/Bryan-Tal/Med-Dash"
        },
        {
            title: "Visual Analysis of the S&P500 ETF",
            description: "This is a visual analysis of the SPY stock using HTML, CSS, and d3.js",
            imgUrl: projImg4,
            projectUrl: "https://bryan-tal.github.io/SPY-Visual-Analysis/"
        },
    ];

    const dashboards = [
        {
            title: "Company Wide Sales Dashboard",
            description: "This is an interactive sales dashboard which displays metrics such as Average Monthly Sales by Site Code and Distribution of Sales by Month",
            imgUrl: dashboard2,
            projectUrl: "https://public.tableau.com/app/profile/bryan.talavera/viz/SalesDashboard_17423367310450/SalesDashboard",
        },
        {
            title: "Lightning Strike Story",
            description: "I tell a short story using collected data from lightning strikes",
            imgUrl: dashboard1,
            projectUrl: "https://public.tableau.com/app/profile/bryan.talavera/viz/LightningStrikeStory_17278138470600/LightningStrikeStory",
        },
        
    ]
    return ( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                        <h2>Projects</h2>
                        <p>Here I have some projects I have done or am currently working on. <br /> Hover over a project to view more information about it! <br /> Click on a project to visit the Github repository.</p>
                        </div>}
                    </TrackVisibility>
                        
                            
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Dashboards</Nav.Link>
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
                            <Tab.Pane eventKey="second"> Here I will be showcasing dashboards I have created.
                                    <Row>
                                    {
                                        dashboards.map((project,index) => {
                                            return (
                                                <ProjectCard key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                    </Row>


                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                           
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp2} className="background-img-right" /> */}
        </section>
     );
}
 
