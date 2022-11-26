import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Root(props) {
  return (
    <Container className="bg-primary" style={{ height: "90vh" }}>
      <Col className="text-light">
        <Row>Item 1</Row>
        <Row>Item 2</Row>
        <Row>Item 3</Row>
        <Row>Item 4</Row>
      </Col>
    </Container>
  );
}
