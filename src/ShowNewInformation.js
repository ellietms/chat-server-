import React from "react";
import ShowEditPage from "./ShowEditPage";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";

const ShowNewInformation = ({
  data,
  deleteMsg,
  editMsg,
  handleUpdate,
  handleEditForm,
  handleClickOpen,
  handleClose,
  showEditForm,
  value,
}) => {
  return data.map((data) => (
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
          onClick={() => {
            handleEditForm();
            handleClickOpen();
          }}
          value={data.id}
        >
          Edit
        </button>
        {showEditForm && (
          <ShowEditPage
            handleUpdate={handleUpdate}
            data={data}
            editMsg={editMsg}
            value={data.id}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            showEditForm={showEditForm}
            handleEditForm={handleEditForm}
          />
        )}
      </div>
      <div className="time">{moment(data.timeSent).fromNow()}</div>
    </div>
  ));
};

export default ShowNewInformation;
