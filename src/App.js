import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import ShowNewInformation from "./ShowNewInformation";
import "./App.css";

function App() {
  const [newData, setNewData] = useState([]);
  const [updateInfo,setUpdateInfo] = useState();
  const [showEditForm,setShowEditForm] = useState(false);
  const [open,setOpen] = useState(false);

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
        body: JSON.stringify(updateInfo)
      }
    )
      .then((res) => res.json())
      .then((data) => setNewData(data));
  }

  function handleUpdate(event){
    setUpdateInfo({...updateInfo,[event.target.name]: event.target.value})
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
console.log(updateInfo);
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
          handleUpdate={handleUpdate}
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          open={open}
        />
      )}
    </div>
  );
}

export default App;
