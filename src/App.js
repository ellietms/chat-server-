import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import ShowNewInformation from "./ShowNewInformation";
import "./App.css";

function App() {

  const[newData, setNewData] = useState([]);
  const[updateInfo,setUpdateInfo] = useState("");
  const[showEditForm,setShowEditForm] = useState(false);
  const[open,setOpen]=useState(false);
  const[saveId,setSaveId]=useState();

  console.log(updateInfo);
  console.log(newData);
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
      .then((data) => setUpdateInfo(data));
  }
  // console.log("this is updateinfo" + (updateInfo));
  // console.log("this is newdata" + newData);

  function handleUpdate(event){
    if(updateInfo.text === "" || updateInfo.from === ""){
      setUpdateInfo(newData)
    }
    else{
    setUpdateInfo({...updateInfo,[event.target.name]: event.target.value})
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handleEditForm(event) {
    setSaveId(event.target.value)
    setShowEditForm(!showEditForm);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <p className="navbar-name">
            <i className="fas fa-comments"></i>
            Welcome to Chat System
            <i className="fas fa-comments"></i>
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
          handleEditForm={handleEditForm}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          open={open}
          saveId={saveId}
          updateInfo={updateInfo}
        />
      )}
    </div>
  );
}

export default App;
