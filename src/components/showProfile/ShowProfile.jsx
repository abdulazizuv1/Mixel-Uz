import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

function ShowProfile({user, toggleModal3, setModalVisible3, visible3}) {
    const modalStyle = {
        right: visible3 ? "0px" : "-16000px",
      };
  return (
    <div className='modal' style={modalStyle}>
        <div className="container2" style={{maxWidth: "900px"}}>
            <div className="panel" style={{width: "900px", padding: "30px15px"}}>
            <div onClick={toggleModal3} className="x-icon">
            <IoCloseSharp className="icon" />
          </div>
                <div className="user_modal">
                  <span style={{color: "gray"}}>Username</span>
                  <h4 style={{color: "black"}}>{user?.username}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProfile