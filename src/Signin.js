import React from 'react';
import {Row,Col,Image,Form,Container,Button} from 'react-bootstrap';
import signin from './images/signin.png';
import './signin.css';
import google from './images/google.png';
import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import home from'./images/home.png';
import {Link} from 'react-router-dom';



function Signin(){
    return(
<div>
  
 <Link to='/'> <Image src={home} className="homeicon"></Image></Link>
    <Container>
        <Row>
            <Col> <Image src={signin} className="signimg"></Image> </Col>
            <Col>
            <h1 className="login">Sign In</h1>
            <Form className="frm">
  

  <Form.Group className="mb-4 tble2" controlId="">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-4 tble3" controlId="">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  </Form>
  <h6 className="forgot">Forgot Password?</h6>
  <Button className="btn3">Sign In</Button>{' '}
  <hr className="line mt-5"></hr>
  <Image className="google" src={google}></Image>
  <Image className="facebook" src={facebook}></Image>
  <Image className="linkedin" src={linkedin}></Image>
  <h5 className="signin">Don't have an account? <Link to="/JoinNow">Sign Up</Link></h5>
  </Col>
  </Row>
</Container>
</div>
  

  
    );
}

export default Signin;