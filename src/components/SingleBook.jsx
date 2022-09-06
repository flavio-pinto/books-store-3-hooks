import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          onClick={() => this.props.setSelectedBook(this.props.bookAsin)}
          style={{ border: this.props.selectedBook === this.props.bookAsin ? "3px solid red" : "0px" }}
        >
          <Card.Img variant="top" src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
