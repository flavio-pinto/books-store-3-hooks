import { Component } from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <>
      <Card
        onClick={() => props.setSelectedBook(props.bookAsin)}
        style={{ border: props.selectedBook === props.bookAsin ? "3px solid red" : "0px" }}
      >
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
