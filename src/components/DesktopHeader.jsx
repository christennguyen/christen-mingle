/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #d6ffb3;
    color: black;
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledAppTaskbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 489px;
    margin-left: 18px;
`

const StyledDateContainer = styled.div`
    // margin-right: 18px;
`

const StyledTaskbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 182px;
    margin-right: 18px;
`

const StyledThemeButton = styled.div`
    cursor: pointer;
`

const DesktopHeader = ({ theme, setTheme }) => {
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })

    const date = new Date().toLocaleDateString()

    const updateTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return (
        <StyledContainer>
            <StyledAppTaskbar>
                <div>&hearts;</div>
                <div>
                    <b>Christen Mingle</b>
                </div>
                <div>File</div>
                <div>Edit</div>
                <div>View</div>
                <div>Coversations</div>
                <div>Window</div>
                <div>Help</div>
            </StyledAppTaskbar>
            <StyledTaskbar>
                <StyledThemeButton onClick={updateTheme} role="button">
                    {theme === 'dark' ? (
                        <> &#x263e; dark</>
                    ) : (
                        <>&#9728; light</>
                    )}
                </StyledThemeButton>
                <StyledDateContainer>
                    {date} {time}
                </StyledDateContainer>
            </StyledTaskbar>
        </StyledContainer>
    )
}

export default DesktopHeader
