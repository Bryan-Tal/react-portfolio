import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.webp";
import dashboard1 from "../assets/img/dashboard1.png";
import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2-halved.png";
// import background from "../assets/img/project-background.jpg"
import "../css/Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        // {
        //     title: "Predicting House Prices",
        //     description: "I created a Multiple Linear Regression Model from scratch to predict house prices.",
        //     imgUrl: projImg5,
        //     projectUrl: "https://github.com/Bryan-Tal/Predicting_House_Prices_OLS",
        // },
        {
            title: "Predicting Employee Churn",
            description: "Used decision tree, random forest, and XGBoost models to predict employee attrition with 98.2% accuracy and 90% AUC. Identified satisfaction level, monthly hours, and evaluation scores as key churn indicators using HR data.",
            imgUrl: projImg1,
            projectUrl: "https://github.com/Bryan-Tal/Predicting_Employee_Churn",
        },
        {
            title: "Predicting Generous Rider Gratuity",
            description: "Built machine learning models to classify high tippers (>20%) using 2017 NYC taxi trip data, with the final XGBoost model achieving 83.2% accuracy. Found fare amount, VendorID, and trip cost to be the most influential features.",
            imgUrl: projImg2,
            projectUrl: "https://github.com/Bryan-Tal/Predicting_NYC_Taxi_Gratuities"
        },
        {
            title: "MedDash: Daily Health Dashboard",
            description: "Developed an interactive dashboard using MongoDB, AWS, and React to help patients track daily health metrics from the Vital API. Focused on real-time visualization, secure login, and intuitive goal tracking to support patient-centered care.",
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
            imgUrl: dashboard1,
            projectUrl: "https://public.tableau.com/app/profile/bryan.talavera/viz/SalesDashboard_17423367310450/SalesDashboard",
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
 
