import React, { useState } from 'react'
import './App.css'
import Messages from './components/Messages'
import DesktopHeader from './components/DesktopHeader'

function App() {
    const [theme, setTheme] = useState('dark')
    return (
        <>
            <DesktopHeader theme={theme} setTheme={setTheme} />
            <Messages theme={theme} />
        </>
    )
}

export default App
