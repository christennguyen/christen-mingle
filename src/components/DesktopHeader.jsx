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
    width: 155px;
    margin-right: 18px;
`

const DesktopHeader = () => {
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })

    const date = new Date().toLocaleDateString()
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
                <div>&#x263e;</div>
                <StyledDateContainer>
                    {date} {time}
                </StyledDateContainer>
            </StyledTaskbar>
        </StyledContainer>
    )
}

export default DesktopHeader
