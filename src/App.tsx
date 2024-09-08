import Button from './components/Button.tsx';
import Card from './components/Card.tsx';
import CardText from './components/CardText.tsx';
import './App.scss';

function App() {
  return (
    <>
      <Card
        className="mb-2"
        imgAlt="Image"
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyK-6IziobozJ2LnEMfhjE1ta3AFikEa9SMg&s"
        imgTop
        style={{ width: '18rem' }}
        title="Card title"
      >
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <Button
          href="#"
          variant="primary"
        >
          Go somewhere
        </Button>
      </Card>
      <Card
        className="mb-2"
        style={{ width: '18rem' }}
        title="Special title treatment"
      >
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button variant="primary">
          Go somewhere
        </Button>
      </Card>
    </>
  );
}

export default App;
