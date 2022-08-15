import React from 'react';
import "./Player.css"
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';



const Player = ({spotify}) => {
  return ( 
    <div className="player">
      <div className="player_body">
        <Sidebar></Sidebar>
        <Body spotify= {spotify}></Body>
      </div>

      <Footer></Footer>
    </div>
   );
}
 
export default Player;    