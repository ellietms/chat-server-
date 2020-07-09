import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import ShowNewInformation from "./ShowNewInformation";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [newData,setNewData]=useState();
  // const [latestMsg,setLatestMsg] = useState();
  
  useEffect(() => {
    fetch("https://cyf-ellietms-chat-server.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  async function deleteMsg(event){
    event.preventDefault();
    await fetch(`https://cyf-ellietms-chat-server.herokuapp.com/messages/${event.target.value}`,{
    method: 'DELETE', 
    headers: {
        'Content-Type': 'application/json'
      },
    // body:JSON.stringify({from:name,text:text})
     })
    .then(res => res.json())
    .then(data => setNewData(data))
    }
    console.log(newData)
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
      <Form setNewData={setNewData}/>
      {newData && <ShowNewInformation data={newData} deleteMsg={deleteMsg} />}
    </div>
  );
}

export default App;
