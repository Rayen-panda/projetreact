
import { Nav , Container, Navbar  } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
        
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">projet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-dos-santos-aveiro-1400862309-7.jpg?lm=1483605486"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>cristiano ronaldo</h3>
          <p>ronaldo and also called the don one of the greatest football player </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vipsg.fr/wp-content/uploads/2021/08/messi.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Messi</h3>
          <p>called the goat he has more than 7 ballon d'or he is classified one of the legends in the football game</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/photos-premium/gros-plan-scene-action-football-joueurs-football-competition-au-stade_207634-5551.jpg?w=826"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>football</h3>
          <p>
             it s a simple game but all the world love it and its the dream of every boy
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default App;
