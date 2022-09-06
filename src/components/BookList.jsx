import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import books from "../assets/books/books.json";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    query: "",
    selectedBook: null,
  };

  //setSelectedBook = (asin) => this.setState({ selectedBook: asin });

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md={3}>
              <Form.Label>Cerca libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="cerca libro..."
                value={this.state.query}
                onChange={(event) =>
                  this.setState({ query: event.target.value })
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {books
                  .filter((book) =>
                    book.title.toLowerCase().includes(this.state.query)
                  )
                  .map((book) => (
                    <Col key={book.asin} md={4}>
                      <SingleBook
                        bookAsin={book.asin}
                        imgUrl={book.img}
                        title={book.title}
                        selectedBook={this.state.selectedBook}
                        setSelectedBook={(asin) =>
                          this.setState({
                            selectedBook: asin,
                          })
                        }
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col>
              {this.state.selectedBook && (
                <CommentArea elementId={this.state.selectedBook} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
