import React from 'react'
import './styles.css'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import ChannelData from '../ChannelData'
import UserList from '../UserList'

const Layout = () => {
    return (
        <div id='Grid'>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
            <UserInfo/>
            <ChannelData/>
            <UserList/>
        </div>
    )
}

export default Layout