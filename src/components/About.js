import React from 'react';
import {Jumbotron, Container, Card, CardGroup} from 'react-bootstrap'

export default function () {
    return (
        <div>
    <Jumbotron className="about-jumbo">
  <Container>
    <h1>Your own pet's records</h1>
    <h2 className="text-muted">
      All in one location!
    </h2>
  </Container>
</Jumbotron>
 <Container>
     <CardGroup className="mb-4"> 
 <Card style={{ width: '20rem' }} className="mx-1">
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=220&fit=crop&ixid=eyJhcHBfaWQiOjF9" />
  <Card.Body>
    <Card.Title>Keep all their information and records in the palm of your hand</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac magna non ligula ultrices sollicitudin eget non mauris. Vestibulum dictum elit sed tristique rutrum. Morbi egestas et ex eu imperdiet.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }} className="mx-1">
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=220&fit=crop&ixid=eyJhcHBfaWQiOjF9" />
  <Card.Body>
    <Card.Title>Stay informed with what's going on</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac magna non ligula ultrices sollicitudin eget non mauris. Vestibulum dictum elit sed tristique rutrum. Morbi egestas et ex eu imperdiet.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }} className="mx-1">
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=220&fit=crop&ixid=eyJhcHBfaWQiOjF9" />
  <Card.Body>
    <Card.Title>Share with others</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac magna non ligula ultrices sollicitudin eget non mauris. Vestibulum dictum elit sed tristique rutrum. Morbi egestas et ex eu imperdiet.
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup>
 </Container>

        </div>
    )
}
