import React from 'react'
import './App.css'
import styled from 'styled-components'

const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`

function App() {
    return (
        <>
            <StyledHeaderContainer>
                <h1>Under Construction</h1>
            </StyledHeaderContainer>
            <div className="machine-wrap">
                <div className="machine">
                    <div className="machine-roof">
                        <div className="machine-silencer">
                            <div className="machine-smoke" />
                        </div>
                    </div>
                    <div className="machine-main">
                        <div className="machine-body" />
                        <div className="machine-back" />
                        <div className="machine-front" />
                    </div>
                </div>
                <div className="road">
                    <div className="mud-wrap clearfix">
                        <div className="mud" />
                        <div className="mud" />
                        <div className="mud" />
                        <div className="mud" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
