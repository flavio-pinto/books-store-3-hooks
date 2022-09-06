import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

// const SingleComment = ({comment}) => (
//   <ListGroup.Item>
//     <p>{comment.author}</p>
//     <p>Voto: {comment.rate}/5</p>
//     <p>{comment.comment}</p>
//   </ListGroup.Item>
// );

class SingleComment extends Component {
  deleteComment = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "DELETE",
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOTI3MmVkZDY3ODAwMTUwN2Q3NDAiLCJpYXQiOjE2NjIwMzA0NTAsImV4cCI6MTY2MzI0MDA1MH0.W-JydjAeXfAhd553HFq5LuXMB5fpJ_ptw4bgjFz-t60'
          }
        }
      );
      if(response.ok) {
        alert('Commento eliminato con successo!')
      } else {
        alert('ERRORE: Commento non eliminato')
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <ListGroup.Item>
        <p>{this.props.comment.author}</p>
        <p>Voto: {this.props.comment.rate}/5</p>
        <p>{this.props.comment.comment}</p>
        <Button
          variant="danger"
          onClick={() => this.deleteComment(this.props.comment._id)}
        >Delete</Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
