import React from 'react'
import './styles.css'
import '../../styles.css'
import ServerButton from '../ServerButton'

const ServerList = () => {
    return (
        <div id="ContainerServerList"  >

            <ServerButton ishome="true"/>

            <div id="SeparatorServerList" />

            <ServerButton />
            <ServerButton hasnotifications="true" />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />

        </div>


    )
}

export default ServerList;