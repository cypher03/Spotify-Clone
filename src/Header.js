import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import Avatar from '@mui/material/Avatar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useDataLayerValue } from "./DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <SearchRoundedIcon/>
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="DA"/>
        {/*{user?.images[0].url}  */}
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;