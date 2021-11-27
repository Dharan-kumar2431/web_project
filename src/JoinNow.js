import React from 'react';
import joinimg from './images/joinimg.jpg';
import google from './images/google.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import home from'./images/home.png';
import './join.css';
import {Row,Col,Image,Form,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Join(){
    return(
        <div>
 <Link to='/'> <Image src={home} className="homeicon"></Image></Link>


<Container>
  <Row>
    <Col sm={12} md={12} lg={6}><Image className="img2" src={joinimg} /></Col>
    <Col>
   <h1 className="head">Create Account</h1>
    <Form className="frm">
  <Form.Group className="mb-4 tble1" controlId="">
    <Form.Control type="text" placeholder="Name" />
    
  </Form.Group>

  <Form.Group className="mb-4 tble1" controlId="">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-4 tble1" controlId="">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-4 tble1" controlId="">
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  
  
</Form>
<hr className="line mt-5" /> 
<Image className="google" src={google}></Image>
<Image className="facebook" src={facebook}></Image>
<Image className="linkedin" src={linkedin}></Image>
<h5 className="signin">Already have an account? <Link to="/Signin">Sign In</Link></h5>
<Button className="btn3">Sign Up</Button>{' '}
    </Col>
  </Row>

  
</Container>

</div>
    );
}
export default Join;