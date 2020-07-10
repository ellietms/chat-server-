import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
const ShowNewInformation = ({data, deleteMsg, editMsg }) => {
  
    return (
    data.map((data) => (
    <div>
      <div className="container box-info" key={data.id}>
        <div className="name">{data.from}</div>

        <div>
          <p className="text">{data.text}</p>
        </div>

        <button
          type="submit"
          className="btn button"
          onClick={deleteMsg}
          value={data.id}
        >
          Delete
        </button>

        <button
          type="submit"
          className="btn button"
          onClick={editMsg}
          value={data.id}
        >
          Edit
        </button>
      </div>
      <div className="time">
          {moment(data.timeSent).fromNow()}
      </div>
    </div>
  ))
    )};

export default ShowNewInformation;
