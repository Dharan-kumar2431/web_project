import {Navbar,Nav,Container,Button,Col,Row,Image,Carousel,Card,Form,FloatingLabel} from 'react-bootstrap';
import './home.css';
import Heromotio from './images/Heromotio.gif';
import crd1 from './images/crd1.png';
import crd2 from './images/crd2.png';
import online from './images/online.png';
import individual from './images/individual.png';
import address from './images/address.png';
import group from './images/group.png';
import phone from './images/phone.png';
import facebook2 from './images/facebook2.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import gmail from './images/gmail.png';
import skype from './images/skype.png';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import card6 from './images/card6.png';
import {Link} from 'react-router-dom';
import React from 'react';
import Iframe from 'react-iframe';




function Home(){

  
    return(
        <div >
       <div className="header">
<Navbar expand="lg" className="nav navbar-form " variant="dark" fixed="top">
  <Container>
    <Navbar.Brand href="#home" >DataDNA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className="link" href="#about">About</Nav.Link>
        <Nav.Link className="link" href="#courses">Courses</Nav.Link>
        <Nav.Link className="link" href="#blog">Blog</Nav.Link>
        <Nav.Link className="link" href="#coach">Coaching Methodology</Nav.Link>
        <Nav.Link className="link" href="#members"><Link to="/Members" className="testimonial">Members</Link></Nav.Link>
        <Nav.Link className="link" href="#events">Events</Nav.Link>
        <Nav.Link className="link" href="#testimonials"><Link to="/Testimonial" className="testimonial">Testimonials</Link></Nav.Link>
        <Nav.Link className="link" href="#forum">Forum</Nav.Link>
        <Nav.Link className="link" href="#contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div id="home">
<Container>
  <Row>
    <Col sm={12} md={12} lg={6}><h1 className="title">Empowering Growth With Real World.</h1> 
   <Button className="btn1" ><Link to="/JoinNow" className="join">Join Now</Link></Button>{' '}
    <Button className="btn2"><Link to="/Signin" className="join"> Sign In</Link></Button>{' '}</Col>
    <Col sm={12} md={12} lg={6}><Image className="img1" src={Heromotio} /></Col>
  </Row>
  
</Container>
</div>



<div id="about">

<Carousel className="carousel" >
  <Carousel.Item interval={3000}>
    
    
      <h2 className="about">About</h2>
      <h5 className="abtcontent">Our motivation lies in delivering innovations and flexible consultancy services that are beneficial and bore fruitful results in practical lives to our end clients. Our firm strongly believes in the significance of data-based understanding & its impact on the business through various tools & technology stacks.
Our trainers corporate experience brings in Real-Time exposure which will be
passed on to the learners as well. Our company primarily focuses on the firm belief of self-education through a gamut of training programs. We are certified in Machine Learning & Azure cloud so that we can train our learners on Industry needs & tailor-made courses for their requirements.
DATADNA has worked with clients across North America, Australia, UAE & UK.
We have successfully delivered Projects in Data Science & AI Space collaboratively & remote team has been a culture which we practiced even before the covid times. We have trained so far, many professionals & received positive responses. In addition, we partnered with Government of India – National Cyber Safety & Security Standards to conduct ‘AI in Cyber security Workshop’ recently.</h5>
   
  </Carousel.Item>

  <Carousel.Item interval={3000}>
  <Container>
  <Row>
    <Col lg={6}>
    <Card style={{ width: '25rem' }} className="card" >
  <Card.Body>
    <h1 className="card1">Our Approach</h1>
    
    <Card.Text className="cardtxt1">
      

<p>My Method is a straight-forward approach</p>
<p>1. Sit with Candidates to understand them</p>
<p>2. Understand their Challenges</p>
<p>3.  Encourage them for their Career</p>
<p>4.  Devise a Strategy around them</p>
<p>5.  Evaluate the Candidates</p>
<p>6.  Be part of their success journey</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col lg={6}>
     <Image src={crd1} className="myapproach"></Image>
    </Col>
  </Row>
  </Container>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
  <Container>
  <Row>
    <Col lg={6}>
    <Card style={{ width: '25rem' }} className="card" >
  <Card.Body className="cardbody">
    <h1 className="card2">Our Vision</h1>
    
    <Card.Text className="cardtxt2">
      

<p>As a Data Science Professional,
I want to pass on my experience,
learning and challenges to future 
Data Scientists to create impact
on the implementations.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col lg={6}>
     <Image src={crd2} className="myvision"></Image>
    </Col>
  </Row>
  </Container>
  </Carousel.Item>
  
</Carousel>

</div>
<hr></hr>

<div id="courses">
<div className="container">
<h2 className="courses">Courses</h2>
  <Row  xs={1} md={3} className="g-6">
  <Col  >
                            <Card className="cardsstyle">
                           
                                <Card.Img variant="top"  src={card1} className="cardcourses"/>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Industry Oriented Curriculum</Card.Title>
                                    <Card.Text className="cardlinktext">
                                       <Link to="/curriculum" className="cardlink">View Information</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col  >
                            <Card className="cardsstyle">
                                <Card.Img variant="top"  src={card2} className="cardcourses"/>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Internship</Card.Title>
                                    <Card.Text className="cardlinktext">
                                       <Link to="/curriculum" className="cardlink">View Information</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col  >
                            <Card className="cardsstyle">
                                <Card.Img variant="top"  src={card3} className="cardcourses"/>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Mentorship</Card.Title>
                                    <Card.Text className="cardlinktext">
                                       <Link to="/curriculum" className="cardlink">View Information</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>




  </Row>


  <Row  xs={1} md={3} className="g-6">
  <Col  >
                            <Card className="cardsstyle">
                            
                                <Card.Img variant="top"  src={card4} className="cardcourses"/>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Online Learning</Card.Title>
                                    <Card.Text className="cardlinktext">
                                       <Link to="/curriculum" className="cardlink">View Information</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col  >
                            <Card className="cardsstyle">
                                <Card.Img variant="top"  src={card5} className="cardcourses"/>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Certification</Card.Title>
                                    <Card.Text className="cardlinktext">
                                       <Link to="/curriculum" className="cardlink">View Information</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col  >
                            <Card className="cardsstyle">
                                <Card.Img variant="top"  src={card6} className="cardcourses"/>
                                <Card.Body>
                                    <Card.Title className="cardtitle">Program Design</Card.Title>
                                    <Card.Text className="cardlinktext">
                                       <Link to="/curriculum" className="cardlink">View Information</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>




  </Row>

</div>

     


</div>



<div id="coach">
<h2 className="coach">Coaching Methodology</h2>
<Container>
  <Row>
    <Col>
    
    <Card className="methodology"  >
      <h5 className="coach1">Online</h5>
  <Image src={online} className="online"></Image>
  <Card.Body className="coaching" >
   
    <Card.Text>
     <p>As part of Online Consultation, I will be having a Skype call with the candidates to understand their Goals, Preparation Strategy & Practical Challenges. Based on experience , I will be recommending a road map towards the goal.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card className="methodology"   >
      <h5 className="coach1">Individual Consulting</h5>
  <Image src={individual} className="online"></Image>
  <Card.Body className="coaching" >
   
    <Card.Text>
     <p>I would also love to do In-Person consulting for candidates who want to meet me directly & provide their information, goals & preparation steps. I can also let you know the current trends towards Data Science & how one should equip himself on this.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card className="methodology"  >
      <h5 className="coach1"> Project Groups</h5>
  <Image src={group} className="online"></Image>
  <Card.Body className="coaching" >
   
    <Card.Text>
     <p>Peer learning is one of the key parameters in any field. The more you learn from others, the more you succeed sooner. I will be setting out learning groups based on their experience, goals, project works.This ensures one learns more in a shorter time with proper collaboration.</p>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>

</div>






<div id="contact" >

<Container>
  <Row>
    <Col>
    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15562.571583491634!2d80.2220947!3d12.8016763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49b38c5db4767675!2sDataDNA!5e0!3m2!1sen!2sin!4v1636553711147!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" className="map"> </Iframe>
    </Col>
    <Col className="contact" style={{margin:'35px 0 0 0'}}>
    
    <h3 className="quick">Quick Contact</h3>
<Form className="contactpage">

  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingName" label="Name">
    <Form.Control type="name" placeholder="Name" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingNumber" label="Phone Number">
    <Form.Control type="phone" placeholder="Number" style={{margin:'15px 0 0 0'}} />
  </FloatingLabel>

  <FloatingLabel controlId="floatingTextarea1" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' ,margin:'15px 0 0 0'}}
    />
  </FloatingLabel>

  </Form>
  
  <Button variant="warning" className="btn4">Submit</Button>{' '}
    
    </Col>
  </Row>
  <Row >
    <Col className="address">
      <Image src={address} className="addressicon"></Image>
    <h5 className="heading">Address</h5>
    <p className="add">Apartment, ETA Star Rosedale, RRA 203, A Block, Chennai, Tamil Nadu 603103</p>
    
    </Col>
    <Col className="address" >
    <Image src={phone} className="phoneicon"></Image>
    <h5 className="heading">Phone Number</h5>
    <p className="phone">+91 9840292498</p>
    </Col>
    <Col className="address2">
  <Image src={gmail} className="gmailicon"></Image><p className="gmail"> vijay@datadna.in </p>
  <Image src={skype} className="gmailicon"></Image> <p className="gmail"> vijayakeerthi09</p>
    </Col>
    <Col className="address">
    <h5 className="heading2">Social Media</h5>
    <Image src={facebook2}  className="facebook2"></Image>
    <Image src={instagram} className="instagram" ></Image>
    <Image src={twitter} className="twitter" ></Image>
    </Col>
  </Row>
</Container>
</div>


  </div>
    );
}

export default Home;