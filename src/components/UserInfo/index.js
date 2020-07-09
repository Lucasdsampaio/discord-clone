import React from 'react'
import { Mic, Headset, Settings} from 'styled-icons/material'
import './styles.css'

const UserInfo = () => {
    return (
        <div id='ContainerUserInfo'>
            <div id="ProfielUserInfo">
                <div id='AvatarUserInfo'></div>
                <div id='DataUserInfo'>
                    <strong>Lucas Sampaio</strong>
                    <span>#1997</span>
                </div>
            </div>

            <div id="IconsUserInfo">
                <Mic id="MicUserInfo"/>
                <Headset id="HeadsetUserInfo"/>
                <Settings id="SettingUserInfo"/>
            </div>

        </div>
    )
}

export default UserInfo