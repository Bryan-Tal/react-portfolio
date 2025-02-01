import { Col } from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl, projectUrl}) => {
    return ( 
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={projectUrl}>
                    <img src={imgUrl} />
                </a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
     );
}
 
