import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-primary p-1">
            <div className="col">
                <span className='fw-bold fs-4 text-light'><EventNoteOutlinedIcon/> NoteKeep</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
