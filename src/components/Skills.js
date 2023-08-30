import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon2 from '../assets/img/icon2.png';
import icon4 from '../assets/img/icon4.png';
import icon9 from '../assets/img/icon9.png';
import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000}, 
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024}, 
            items: 3
        }, 
        tablet: { 
            breakpoint: { max: 1024, min: 464}, 
            items: 2
        }, 
        mobile: {
            breakpoint: { max: 464, min: 0}, 
            items: 1
        }

    };

    return (
        <section className="Skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>At College, I have completed courses in C#, Java, SQL and Kotlin and I am currently learning HTML, CSS and Javascript</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={icon9} alt="SQL" />
                                    <h5>SQL</h5>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                                    <h5>C#</h5>
                                    
                                </div>
                                <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg" alt="Kotlin" />
                                    <h5>Kotlin</h5>
                                </div>
                                <div className="item">
                                    <img src={icon4} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={ colorSharp} />
        </section>
    )
}