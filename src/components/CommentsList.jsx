import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {
        props.comments.map((el) => (
          <SingleComment comment={el} key={el._id}/>
        ))
      }
    </ListGroup>
  );
}

export default CommentsList;