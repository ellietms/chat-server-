import React from "react";
import ShowEditPage from "./ShowEditPage";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
const ShowNewInformation =
 ({data,deleteMsg,
   editMsg,handleUpdate,setShowEditForm,showEditForm,
  handleClickOpen,handleClose,open}) => {
      function handleEditForm(){
        setShowEditForm(!showEditForm)
      }

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
          onClick={() => {setShowEditForm(!showEditForm);handleClickOpen()}}
          value={data.id}
          >
          Edit
        </button>
        {showEditForm &&
        <ShowEditPage handleUpdate={handleUpdate}
        data={data}
        editMsg={editMsg}
        value={data.id} 
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        handleEditForm={handleEditForm}/>
        // <form>
        //   <input type="text" name="from" onChange={handleUpdate}></input>
        //   <input type="text" name="text" onChange={handleUpdate}></input>
        //   <button type="submit"className="btn button" value={data.id} onClick={editMsg} >Submit</button>
        // </form>
        }
      </div>
      <div className="time">
          {moment(data.timeSent).fromNow()}
      </div>
    </div>
  ))
    )};

export default ShowNewInformation;
