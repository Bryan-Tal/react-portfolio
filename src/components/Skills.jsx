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

      var barDataPython = [
        {name: "Core Python", value: 90},
        {name: "Pandas", value: 85},
        {name: "Scipy.stats",value: 80},
      ];
      var barDataJS = [
        {name: "Core JS", value: 85},
        {name: "D3.js", value: 75},
        {name: "React.js", value: 90}
      ]
      var barDataDev = [
        {name: "HTML", value: 85},
        {name: "CSS", value: 75}
      ]
      
    return ( 
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quos pariatur. Esse animi quisquam, accusantium ipsa, vero tempora inventore atque quas necessitatibus veritatis sit? Dolorem cumque est recusandae possimus neque.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                          
                          
                          <div className='item'>
                            
                            <UseCreateBarChart data={barDataPython}/>
                           
                            <h5>Python</h5>
                          </div>

                          <div className='item'>
                            <UseCreateBarChart data={barDataJS}/>
                            <h5>JavaScript</h5>
                          </div>
                          <div className='item'>
                            <UseCreateBarChart data={barDataDev}/>
                            <h5>Web Development</h5>
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
            <img src={colorSharp}  className="background-image-left" />
        </section>
     );
}
 
