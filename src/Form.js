import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Form = ({ setNewData }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  async function addNewInfo(event) {
    event.preventDefault();
    await fetch(
      "https://cyf-ellietms-chat-server.herokuapp.com/messages/newMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: name, text: text }),
      }
    )
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }

  async function SeeLatestMsg(event) {
    event.preventDefault();
    await fetch(
      "https://cyf-ellietms-chat-server.herokuapp.com/messages/latest",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }

  return (
    <div className="container form">
      <form
        className="mx-auto my-2"
        action="/messages/newMessage"
        method="post"
        onSubmit={addNewInfo}
      >
        <div className="form-group">
          <label for="InputName">Name</label>
          <input
            value={name}
            type="text"
            className="form-control"
            id="InputName"
            name="from"
            placeholder="Your Name"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <small className="form-text text-muted">
            <p className="mx-auto">please write your real name</p>
          </small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Add your Text</label>
          <input
            value={text}
            className="form-control"
            id="ControlTextarea1"
            rows="3"
            type="text"
            name="text"
            placeholder="The message..."
            onChange={(event) => setText(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn button">
          Submit
        </button>
        <button type="submit" className="btn button" onClick={SeeLatestMsg}>
          See latest
        </button>
      </form>
    </div>
  );
};

export default Form;
