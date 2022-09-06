import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      rate: 5,
      comment: "",
      elementId: this.props.bookAsin,
    },
  };

  sendUserComment = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOTI3MmVkZDY3ODAwMTUwN2Q3NDAiLCJpYXQiOjE2NjIwMzA0NTAsImV4cCI6MTY2MzI0MDA1MH0.W-JydjAeXfAhd553HFq5LuXMB5fpJ_ptw4bgjFz-t60'
          }
        }
      );
      
      if(res.ok) {
        alert('Commento inviato con successo');
      } else {
        alert('Qualcosa è andato storto');
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.sendUserComment}>
        <Form.Group>
          <Form.Label>Voto</Form.Label>
          <Form.Control
            as="select"
            value={this.state.comment.rate}
            onChange={(event) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: event.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Scrivi il tuo commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.comment.comment}
            onChange={(event) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: event.target.value,
                },
              })
            }
            placeholder="Inserisci il commento qui..."
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
