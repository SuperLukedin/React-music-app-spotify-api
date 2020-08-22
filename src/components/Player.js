import React from 'react'
import './Player.css'
import Sidebar from './sideBar/Sidebar'
import Body from './playerBody/Body'
import Footer from './footer/Footer'

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />                                
            </div>
                <Footer />
        </div>
    )
}

export default Player
