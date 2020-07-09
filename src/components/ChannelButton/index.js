import React from 'react'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'
import './styles.css'

const ChannelButton = ({
    channelname,
    selected
}) => {
    return (
        <div id='ContainerChannelButton' className={selected ? 'active' : ''}>
            <div id='DivChannelButton'>
                <Hashtag id='HashtagChannelButton'/>
                <span id="SpanChannelButton"
                channelname={channelname}></span>
            </div>
            <div id='DivChannelButton'>
                <PersonAdd id='PersonAddChannelButton'/>
                <Settings id='SettingsChannelButton'/>
            </div>
        </div>
    )
}

export default ChannelButton