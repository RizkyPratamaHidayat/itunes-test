import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Dollar from "../../assets/png/dollar.png";
import Play from "../../assets/png/play.png";
function SongList(props) {
  const { item } = props;

  return (
    <a
      href={item.trackViewUrl}
      target="_blank"
      className="card flex-direction"
      rel="noreferrer"
    >
      <div>
        <img
          src={item.artworkUrl100}
          width={100}
          height={100}
          alt="images-song"
        />
        <div className="icon-play">
          <img src={Play} alt="play" width={40} />
        </div>
      </div>
      <div className="w100 content-card-container">
        <small className="text-muted">{item.artistName}</small>
        <br />
        <strong>{item.trackName}</strong>
        <div className="display-flex justify-between flex-direction">
          <div className="bg-success text-light mode">Pop</div>
          <img src={Dollar} width={30} alt="dollar" />
        </div>
      </div>
    </a>
  );
}
SongList.propTypes = {
  handleClick: PropTypes.func,
};
SongList.defaultProps = {
  handleClick: () => null,
};
export default SongList;
