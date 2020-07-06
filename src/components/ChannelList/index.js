import React from 'react'
import { Add } from 'styled-icons/material'
import './styles.css'

const ChannelList = () => {
    return (
        <div id='ContainerChannelList'>

            <div id='CategoryChannelList'>
                <span id='SpanChannelList'>CANAIS DE TEXTO</span>
                <Add id='IconChannelList'/>
            </div>

            {/* <div id='ButtonChannelList' channelName='chat-livre'></div>
            <div id='ButtonChannelList' channelName='trabalho'></div>
            <div id='ButtonChannelList' channelName='lolzinho'></div>
            <div id='ButtonChannelList' channelName='cs-go'></div> */}
            

        </div>
    )
}

export default ChannelList