import React from 'react'
import Content from './home/Content'
import Navbar from './home/Navbar'
import './home.css'

function Home() {
    return (
        <div className="Home">
            <Navbar/>
            <Content/>
        </div>
    )
}

export default Home
