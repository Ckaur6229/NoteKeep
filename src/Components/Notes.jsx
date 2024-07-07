import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Notes = () => {
  const [Note, setNote] = useState({
    title: "",
    content: ""
  });

  const [AllNotes, setAllNotes] = useState([]);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const addEvent = () => {
    if (Note.title === "" && Note.content === "") {
      alert("Please Add Your Note!");
    } else {
      setAllNotes((prevData) => {
        return [...prevData, Note];
      });
      setNote({ title: "", content: "" });
    }
  };

  const deleteNote = (index) => {
    setAllNotes((prevData) => {
      return prevData.filter((ele, id) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <form action="">
                  <div className="row">
                    <input
                      type="text"
                      name="title"
                      onChange={inputEvent}
                      value={Note.title}
                      placeholder="Title"
                      className="col-12 form-control mb-2"
                      style={{ border: 'none', boxShadow: 'none' }}
                    />
                    <textarea
                      name="content"
                      onChange={inputEvent}
                      value={Note.content}
                      placeholder="Write a note..."
                      className="col-12 form-control mb-2"
                      style={{ border: 'none', boxShadow: 'none' }}
                    ></textarea>
                  </div>
                </form>
                <button
                  onClick={addEvent}
                  className="btn btn-primary rounded-circle"
                  style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {AllNotes.map((currData, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{currData.title}</h5>
                  <p className="card-text">{currData.content}</p>
                  <button
                    className="btn btn-primary position-absolute"
                    style={{ bottom: '10px', right: '10px' }}
                    onClick={() => deleteNote(index)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
