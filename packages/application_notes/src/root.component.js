import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import "./styles/styles.scss";
import MarkdownEditor from "./components/markdown-editor";
import MarkdownPreview from "./components/markdown-preview";

export default function Root(props) {
  const [text, setText] = useState("");
  return (
    <Row className="vh-50">
      <MarkdownEditor setText={setText} />
      <MarkdownPreview showText={text} />
    </Row>
  );
}
