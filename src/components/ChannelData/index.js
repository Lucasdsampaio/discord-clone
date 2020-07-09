import React, { useRef, useEffect} from 'react'
import { AlternateEmail } from 'styled-icons/material'
import ChannelMessage from "../ChannelMessage"
import './styles.css'

const ChannelData = () => {
    const messagesRef = useRef()

    useEffect(() => {
        const div = messagesRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        } 
    }, [messagesRef])
    return (
        <div id="ContainerChannelData" ref={messagesRef}>
            <div id="MessagesChannelData">
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                />
                <ChannelMessage
                    author="Lucas Sampaio"
                    date="08/07/2020"
                    content="Isso e uma messagem"
                    isBot
                />

{/* 
                <ChannelMessage
                    author="Guilherme Fernandes"
                    date="08/07/2020"
                    content={
                        <>
                            <Mention>@Lucas Sampaio</Mention>, isso e outra messagem.
                        </>
                    }
                /> */}

            </div>

            <div id="InputWrapperChannelData">
                <input id="InputChannelData" type="text" placeholder="Comversar em #chat-livre"/>
                <AlternateEmail id="InputIconChannelData"/>
            </div>
        </div>
    )
}

export default ChannelData