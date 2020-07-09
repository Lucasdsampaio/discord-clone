import React from 'react'
import './styles.css'

const ChannelMessage = ({
    author,
    date,
    content,
    hasMention,
    isBot
}) => {
    return (
        <div id="ContainerChannelMessage" className={hasMention ? "mention" : ""}>
            <div id="AvatarChannelMessage" className={isBot ? "bot" : ""}/>
            
            <div id="MessageChannelMessage">
                <div id="HeaderChannelMessage">
                    <strong>{author}</strong>
                    {isBot && <span>BOT</span>}
                    <time>{date}</time>
                </div>

                <div id="ContentChannelMessage">
                    {content}
                </div>
            </div>

        </div>
    )
}

export default ChannelMessage