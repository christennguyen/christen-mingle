/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledContainer = styled.div`
    display: flex;
    padding: 10px;
    cursor: pointer;
    height: 55px;
`

const StyledIcon = styled.div`
    background-color: grey;
    border-radius: 100%;
    height: 44px;
    width: 44px;
`

const StyledTextContainer = styled.div`
    width: calc(100% - 42px);
    border-bottom: 1px solid white;
    margin-left: 8px;
`
const StyledTitle = styled.p`
    font-weight: bold;
`
const MessagePreview = ({ message, index, onClick }) => (
    <StyledContainer key={uuidv4()} index={index} onClick={onClick}>
        <StyledIcon />
        <StyledTextContainer>
            <StyledTitle>{message.title}</StyledTitle>
        </StyledTextContainer>
    </StyledContainer>
)

export default MessagePreview
