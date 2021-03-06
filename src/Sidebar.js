import React, { useState, useEffect } from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
    const [channels, setChannels] = useState([]);

    const add = (arr) => {
        setChannels(arr);
    }

    useEffect(() => {
        //YouTubeではfirebaseを使用して[rooms]テーブルから配列情報を取得している
        setChannels([
            { id: 1, name: "instagram" },
            { id: 2, name: "tic-tok" }
        ]);
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Rafeh Qazi
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={ InsertCommentIcon } title="Threads" />
            <SidebarOption Icon={ InboxIcon } title="Mentions & reactions" />
            <SidebarOption Icon={ DraftsIcon } title="Saved items" />
            <SidebarOption Icon={ BookmarkBorderIcon } title="Channel browser" />
            <SidebarOption Icon={ PeopleAltIcon } title="People & user groups" />
            <SidebarOption Icon={ AppsIcon } title="Apps" />
            <SidebarOption Icon={ FileCopyIcon } title="File browser" />
            <SidebarOption Icon={ ExpandLessIcon } title="Show less" />
            <hr />
            <SidebarOption Icon={ ExpandMoreIcon } title="channels" />
            <hr />
            <SidebarOption Icon={ AddIcon } title="Add Channel" addChannelOption={ true } addFunc={ add } addValue={ channels } />

            {/* Connect to db and list all the channels */}
            {/* <SidebarOption ... /> */}
            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
            ))
            }
        </div>
    )
}

export default Sidebar
