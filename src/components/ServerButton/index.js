import React from 'react'
import './styles.css'

const ServerButton = ({
    selected,
    ishome,
    hasnotifications,
    mentions
}) => {
    return (
        <div id="Button"
            ishome={ishome}
            hasnotifications={hasnotifications}
            mentions={mentions}
            className={ selected ? 'active' : '' }
        >
            {ishome && <img src={'https://rocketseat.com.br/static/images/logo-rocketseat.svg'} alt='Rocketseat'/>}
        </div>
    )
}

export default ServerButton