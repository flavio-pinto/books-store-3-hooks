import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {
          this.props.comments.map((el) => (
            <SingleComment comment={el} key={el._id}/>
          ))
        }
      </ListGroup>
    );
  }
}

export default CommentsList;