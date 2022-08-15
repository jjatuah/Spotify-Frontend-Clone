import React from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon  from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src="https://media.istockphoto.com/vectors/vinyl-record-template-vector-id481475560?k=20&m=481475560&s=612x612&w=0&h=81tFmux790Obl1Y4Rpsp7X9W1qQk2mtIf8c80hY6hsA=" alt="" />
        <div className="footer_songInfo">
          <h4>Star Signs</h4>
          <p>Odunsi(The Engine)</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green"></ShuffleIcon>
        <SkipPreviousIcon className="footer_icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon"></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer_icon"></SkipNextIcon>
        <RepeatIcon className="footer_green"></RepeatIcon>
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
   );
}
 
export default Footer;