import React from 'react'
import { ExpandMore} from 'styled-icons/material'
import './styles.css'

const ServerName = () => {
    return (
        <div id='ContainerServerName'>
            <div id='TitleServerName'> Servidor do Lucas </div>

            <ExpandMore id='IconServerName'></ExpandMore>
        </div>
    )
}

export default ServerName