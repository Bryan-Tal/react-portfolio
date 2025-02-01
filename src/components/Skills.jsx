import '../css/Skills.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
// import { radialScale } from 'd3';
import { UseCreateBarChart } from './useCreateBarChart';
import TrackVisibility from "react-on-screen";

// function radialScale(number) {
//   // inputs a number from 0 to 1
//   if (number > 1) {number = number / 100}
//   return (2 * Math.PI ) * number
// }

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      var barDataLanguages = [
        {name: "Python", value: 90},
        {name: "SQL", value: 70},
        {name: "JavaScript",value: 80},
        {name: "HTML/CSS", value: 75},
      ];
      var barDataJS = [
        {name: "Core JS", value: 85},
        {name: "React.js", value: 80}
      ]
      var barPythonPackages = [
        {name: "Pandas", value: 90},
        {name: "Statsmodels", value: 85},
        {name: "Scikit-learn", value: 90}
      ]
      var barDataVizTools = [
        {name: "Seaborn", value: 80},
        {name: "Matplotlib", value: 85},
        {name: "d3.js", value: 70}
      ]

      
      
    return ( 
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                      <TrackVisibility>
                      {({isVisible}) => 
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                          <h2>Skills</h2>
                          <p>Proficient in Python, SQL, and JavaScript, with expertise in data analysis, visualization, and predictive modeling. Experienced in machine learning frameworks, statistical analysis, and database management. Adept at using tools like Tableau, scikit-learn, and pandas to deliver actionable insights.</p>
                      </div>}
                      </TrackVisibility>
                        
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                          <div className='item'>
                            <UseCreateBarChart data={barDataLanguages}/>
                            <h5>Programming Languages</h5>
                          </div>
                          <div className='item'>
                            <UseCreateBarChart data={barPythonPackages}/>
                            <h5>Python Packages</h5>
                          </div>
                          <div className='item'>
                            <UseCreateBarChart data={barDataVizTools}/>
                            <h5>Data Visualization Tools</h5>
                          </div>
                         
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>SQL</h5>
                            </div> */}
                           
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp}  className="background-image-left" /> */}
        </section>
     );
}
 
