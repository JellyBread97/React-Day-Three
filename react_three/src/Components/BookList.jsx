import { Row, Col, Container, Form } from "react-bootstrap";
import React from "react";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .slice(0, 12)
            .map((b) => (
              <Col xs={3}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
