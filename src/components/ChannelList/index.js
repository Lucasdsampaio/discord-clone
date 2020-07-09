import React from 'react'
import { Add } from 'styled-icons/material'
import ChannelButton from '../ChannelButton'
import './styles.css'

import ServerButton from '../ServerButton'


const ChannelList = () => {
    return (
        <div id='ContainerChannelList'>

            <div id='CategoryChannelList'>
                <span id='SpanChannelList'>CANAIS DE TEXTO</span>
                <Add id='IconChannelList'/>
            </div>


            <ChannelButton channelname="chat-livre"/>
            <ChannelButton channelname="trabalho"/>
            <ChannelButton channelname="lolzinho"/>
            <ChannelButton channelname="csgo"/>
            <ChannelButton channelname="texte"/>

        </div>
    )
}

export default ChannelList