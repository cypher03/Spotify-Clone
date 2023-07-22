import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import {getTokenFromResponse} from "./spotify";
import {useStateValue} from "./StateProvider"

function Sidebar() {
    const [{playlists},dispatch] = useStateValue();
    console.log(playlists);

    return(
    <div className="sidebar">
        <img class="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"alt=""/>

        <SidebarOption Icon={HomeRoundedIcon} title="Home" />
        <SidebarOption Icon={SearchRoundedIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />

        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map(playlist =>(
            <SidebarOption title={playlist.name}/>
        ))}

    </div>
    );
}

export default Sidebar;