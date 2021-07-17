/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import infoIcon from '../images/icons/infoDark.svg'

const StyledContainer = styled.div`
    background-color: #444344;
    padding: 20px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: space-between;
`

const StyledIcon = styled.img`
    cursor: pointer;
`

const ContentHeader = () => (
    <StyledContainer>
        To: Scam Likely <StyledIcon src={infoIcon} alt="info" height={18} />
    </StyledContainer>
)

export default ContentHeader
