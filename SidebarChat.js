import { Avatar, IconButton } from "@material-ui/core";
import React from 'react';
import "./SidebarChat.css";


function SidebarChat() {
 return(
        <div className='sidebarChat'>
           <Avatar className="sidebarChat__avatar" /> 
           <div className="sidebarChat__info">
                <h3> Channel Name</h3>
                <p>last message sent</p>
                <small>timestamp</small>

           </div>
        </div>
    );
}

export default SidebarChat; 