import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Error from "./Error";
import Loading from "./Loading";

const CommentArea = (props) => {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchComments();
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchComments();
  }, [props.elementId]);

  const fetchComments = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.elementId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOTI3MmVkZDY3ODAwMTUwN2Q3NDAiLCJpYXQiOjE2NjIwMzA0NTAsImV4cCI6MTY2MzI0MDA1MH0.W-JydjAeXfAhd553HFq5LuXMB5fpJ_ptw4bgjFz-t60",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setTimeout(() => {
          setComments(data);
          setLoading(false);
          setError(false);
        }, 1500);
      } else {
        setTimeout(() => {
          setLoading(false);
          setError(true);
        }, 1500);
        console.log("Qualcosa è andato storto");
      }
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 1500);
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      <AddComment bookAsin={props.elementId} />
      <CommentsList comments={comments} />
    </div>
  );
}

export default CommentArea;
