import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import books from "../assets/books/books.json";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = () => {
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Form.Label>Cerca libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="cerca libro..."
              value={query}
              onChange={(event) => setQuery(event.target.value )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(query)
                )
                .map((book) => (
                  <Col key={book.asin} md={4}>
                    <SingleBook
                      bookAsin={book.asin}
                      imgUrl={book.img}
                      title={book.title}
                      selectedBook={selectedBook}
                      setSelectedBook={(asin) =>
                        setSelectedBook(asin)
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col>
            {selectedBook && (
              <CommentArea elementId={selectedBook} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookList;
