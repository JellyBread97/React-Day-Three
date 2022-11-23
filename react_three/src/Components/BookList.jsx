import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";
import scifiArray from "../Assets/scifi.json";
export default class BookList extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          {scifiArray.slice(0, 1).map((book) => (
            <SingleBook
              Cardimg={book.img}
              Cardtitle={book.title}
              Cardtext={book.category}
              key={book.asin}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
