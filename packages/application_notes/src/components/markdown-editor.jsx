import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function MarkdownEditor({ setText }) {
  return (
    <Col>
      <Card className="vh-100">
        <Card.Header className="w-100 text-center fs-2 shadow-lg">
          Markdown editor
        </Card.Header>
        <Form className="h-100" onChange={(e) => setText(e.target.value)}>
          <Form.Control
            as="textarea"
            className="h-100 bg-primary text-light rounded-0 rounded-bottom"
          />
        </Form>
      </Card>
    </Col>
  );
}
