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
  open,
  saveId,
  updateInfo,
}) => {
  return data.map(data => (
    <div key={data._id}>
      <div className="container box-info" key={data._id}>
        <div className="name">{data.from}</div>
        <div>
          <p className="text">{data.text}</p>
        </div>
        <button
          type="submit"
          className="btn button"
          onClick={deleteMsg}
          value={data._id}
        >
          Delete
        </button>

        <button
          type="submit"
          className="btn button"
          onClick={(event) => {
            handleClickOpen(event);
            handleEditForm(event);
          }}
          value={data._id}
        >
          Edit
        </button>
        {data._id === saveId && open && (
          <ShowEditPage
            handleUpdate={handleUpdate}
            data={data}
            editMsg={editMsg}
            value={data._id}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            showEditForm={showEditForm}
            handleEditForm={handleEditForm}
            open={open}
            name={data.from}
            text={data.text}
            updateInfo={updateInfo}
          />
        )}
      </div>
      <div className="time">{moment(data.timeSent).fromNow()}</div>
    </div>
  ));
};

export default ShowNewInformation;
