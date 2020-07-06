import React from 'react'
import './styles.css'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'

const Layout = () => {
    return (
        <div id='Grid'>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
        </div>
    )
}

export default Layout