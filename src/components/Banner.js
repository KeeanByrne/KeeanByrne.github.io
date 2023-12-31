import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle, ArrowDownCircleFill, ArrowRightCircle, ArrowUpRightCircleFill } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Student", "Software Developer", "Android Developer", "Beginner Web Designer", "Golfer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100 );
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])
    

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);


        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h1>{"Hi I'm Keean: "}<span className="wrap">{ text }</span></h1>
                        <p>I am currently completing my final year at Varsity College where I am studying a Bachelor of Computer and Information Sciences in Application Development. My objective is to further enhance my skills and knowledge whilst diving into the creative world of software development. In my current free time I am either working on various side projects (such as this portfolio website) or perfecting my golf swing on the course.  </p>
                        <button onClick={() => console.log('download')}>Download My CV<ArrowDownCircleFill size={25} /></button>                                                   
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        
        </section>
    )
}