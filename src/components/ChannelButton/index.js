import React from 'react'
import { Hashtag } from 'styled-icons/heroicons-outline'
import './styles.css'

const ChannelButton = () => {
    return (
        <div id='ContainerChannelButton'>

            <div id='DivChannelButton'>
                <Hashtag id='IconChannelButton'/>
                <span id='SpanChannelButton'>chat-livre</span>
            </div>

            <div id='DivChannelButton'>
                <Hashtag id='IconChannelButton'/>
                <Hashtag id='IconChannelButton'/>
            </div>
        </div>
    )
}

export default ChannelButton