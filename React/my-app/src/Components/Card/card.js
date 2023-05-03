import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'
function CardDetails() {
  return (
    <div className='cardBox'>
        <Card className="cardDeck"  >
      <Card.Img variant="top" src="https://lazesoftware.com/img/en/tool/dummyimg/default_480x320.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    <Card className="cardDeck">
      <Card.Img variant="top" src="https://lazesoftware.com/img/en/tool/dummyimg/default_480x320.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    <Card className="cardDeck">
      <Card.Img variant="top" src="https://lazesoftware.com/img/en/tool/dummyimg/default_480x320.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    <Card className="cardDeck">
      <Card.Img variant="top" src="https://lazesoftware.com/img/en/tool/dummyimg/default_480x320.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default CardDetails;