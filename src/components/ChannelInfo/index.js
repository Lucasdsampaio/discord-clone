import React from 'react'
import { Hashtag } from 'styled-icons/heroicons-outline'
import './styles.css'

const ChannelInfo = () => {
    return (
        <div id='ContainerChannelInfo'>

            <Hashtag id='IconChannelInfo'/>

            <div id='TitleChannelInfo'>chat-livre </div>
            <div id='SeparatorChannelInfo'/>
            <div id='DescriptionChannelInfo'>Canal aberto para conversas</div>
        </div>
    )
}

export default ChannelInfo