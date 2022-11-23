import { Col, Card, Row } from "react-bootstrap";
import scifiArray from "../Assets/scifi.json";

export default function SingleBook(book) {
  return (
    <Col>
      <Row>
        {scifiArray.slice(0, 12).map((book) => (
          <Col md={2} sm={6} key={book.asin}>
            <Card className="my-5">
              <Card.Img
                variant="top"
                src={book.img}
                className="imgTop card-image"
                style={{
                  height: "50vh",
                  objectFit: "fill",
                }}
              />
              <Card.Body>
                <Card.Header className="text-truncate">
                  {book.title}
                </Card.Header>
              </Card.Body>
              <Card.Footer className="text-muted">${book.price}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
