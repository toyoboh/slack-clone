import React from 'react'
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";

function SidebarOption({ Icon, title, id, addChannelOption, addFunc, addValue }) {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`);
        } else {
            history.push(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if(channelName) {
            const arrNum = addValue.length;
            const idNum = arrNum + 1;
            const tmpArr = { id: idNum, name: channelName };
            const tmpChannelsArr = [...addValue, tmpArr];
            addFunc(tmpChannelsArr);
        }
    }

    return (
        <div className="sidebarOption" onClick={ addChannelOption ? addChannel : selectChannel }>
            { Icon && <Icon className="sidebarOption__icon" /> }
            { Icon ? (
                <h3>{ title }</h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> { title }
                </h3> 
            )}
        </div>
    )
}

export default SidebarOption
