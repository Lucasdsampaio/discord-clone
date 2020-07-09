import React from 'react'
import './styles.css'

const UserRow = ({nickname, isBot}) => {
    return (
        <div id="RowUserRow">
            <div id="AvatarUserRow" className={isBot ? 'bot' : ''}></div>

            <strong>{nickname}</strong>
            {isBot && <span>BOT</span>}
        </div>

    )
}


const UserList = () => {
    return (
        <div id="ContainerUserList">
            <div id="RoleUserList">Disponível - 1</div>
            <UserRow nickname="Lucas Sampaio"></UserRow>

            <div id="RoleUserList">Offline - 18</div>
            <UserRow nickname="Guilherme Fernandes" isBot></UserRow>
 
        </div>
    )
}

export default UserList