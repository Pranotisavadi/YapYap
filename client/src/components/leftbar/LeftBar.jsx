import React from 'react'
import './leftbar.css';

function LeftBar() {
  return (
      <>
    <div className='messenger'>
        <div  className='chatMenu'>
        <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        </div>

        </div>
        <div  className='chatBox'>
        <div className="chatBoxWrapper">Box</div>

            
        </div>
        <div  className='chatOnline'>
        <div className="chatOnlineWrapper">Online</div>

            
        </div>
    </div>
    </>
  )
}

export default LeftBar