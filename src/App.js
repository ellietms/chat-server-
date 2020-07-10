import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import ShowNewInformation from "./ShowNewInformation";
import "./App.css";

function App() {
  const [newData, setNewData] = useState();
  const [showEditBox,setShowEditBox] = useState(false)

  async function deleteMsg(event) {
    event.preventDefault();
    await fetch(
      `https://cyf-ellietms-chat-server.herokuapp.com/messages/${event.target.value}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }

  async function editMsg(event) {
    event.preventDefault();
    await fetch(
      `https://cyf-ellietms-chat-server.herokuapp.com/messages/${event.target.value}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <p className="navbar-name">
            <i className="fas fa-comments"></i>
            Welcome to chat-server
          </p>
        </div>
      </nav>
      <Form setNewData={setNewData} />
      {newData && (
        <ShowNewInformation
          data={newData}
          deleteMsg={deleteMsg}
          editMsg={editMsg}
        />
      )}
    </div>
  );
}

export default App;
