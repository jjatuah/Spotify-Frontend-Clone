import React from 'react';
import "./Body.css";
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import { PlayCircleFilled, Favorite, MoreHoriz} from '@material-ui/icons';
import SongRow from './SongRow';


const Body = ({spotify}) => {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return ( 
    <div className="body">
      <Header spotify={spotify}></Header>
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" ></PlayCircleFilled>
          <Favorite fontSize="large"></Favorite>
          <MoreHoriz></MoreHoriz>
        </div>

        {/* {list of songs} */}
        {discover_weekly?.tracks.items.map((item)=> <SongRow track={item.track}/>)}
      </div>
    </div>
   );
}
 
export default Body;