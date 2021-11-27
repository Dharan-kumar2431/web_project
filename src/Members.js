
import boy from './images/boy.jpg';
import girl from './images/girl.png';
import { Button,Card,Row,Col, Container,Image} from 'react-bootstrap';
import './Members.css';


function Members(){
    return(

<div>
  <h1 className="members">Members</h1>
    <Container>
        <Row>
            <Col>
<Card className="membercard">
  <Image variant="top" src={boy} className="avatar-boy"  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="member-button">View Detail</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="membercard">
  <Image variant="top" src={boy} className="avatar-boy" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="member-button">View Detail</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="membercard">
  <Image variant="top" src={girl} className="avatar" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="member-button">View Detail</Button>
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
            <Col>
<Card className="membercard">
  <Image variant="top" src={girl} className="avatar"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="member-button">View Detail</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="membercard">
  <Image variant="top" src={boy} className="avatar-boy" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="member-button">View Detail</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card className="membercard">
  <Image variant="top" src={boy}  className="avatar-boy"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="member-button">View Detail</Button>
  </Card.Body>
</Card>
</Col>
</Row>

</Container>




</div>




    );
}

export default Members;