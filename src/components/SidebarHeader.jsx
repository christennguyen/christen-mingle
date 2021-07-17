/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const StyledSidebarHeader = styled.div`
    border-top-left-radius: 16px;
    height: 62px;
    padding: 24px 8px 8px 14px;
    background-color: #5a595a;
`

const StyledWindowControlContainer = styled.div`
    display: flex;
    width: 68px;
    justify-content: space-between;
`

const StyledWindowControl = styled.div`
    height: 16px;
    width: 16px;
    background-color: ${(props) => props.color};
    border-radius: 100%;
    cursor: pointer;
`

const SidebarHeader = () => (
    <StyledSidebarHeader>
        <StyledWindowControlContainer>
            <StyledWindowControl color="#FF6057" />
            <StyledWindowControl color="#FEBD30" />
            <StyledWindowControl color="#26C640" />
        </StyledWindowControlContainer>
    </StyledSidebarHeader>
)

export default SidebarHeader
