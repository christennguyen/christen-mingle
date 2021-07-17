/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledContainer = styled.div`
    display: flex;
    margin: 0px 10px;
    cursor: pointer;
    height: 68px;
    background-color: ${(props) => (props.selected ? '#218AFF' : 'inherit')};
    border-radius: 10px;
`

const StyledIcon = styled.div`
    background-color: grey;
    border-radius: 100%;
    height: 44px;
    width: 44px;
    margin: 14px 0 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
`

const StyledTextContainer = styled.div`
    width: calc(100% - 85px);
    ${(props) => !props.selected && 'border-bottom: 1px solid #6b6a6b'};
    margin-left: 8px;
`
const StyledTitle = styled.p`
    font-weight: bold;
    margin-bottom: 0px;
`

const StyledSubtible = styled.p`
    margin: 0;
    color: ${(props) => (props.selected ? 'white' : '#b3b3b3')};
`
const MessagePreview = ({ message, index, onClick, selected }) => (
    <StyledContainer
        key={uuidv4()}
        index={index}
        onClick={onClick}
        selected={index === selected}
    >
        <StyledIcon>{message.title.charAt(0)}</StyledIcon>
        <StyledTextContainer selected={index === selected}>
            <StyledTitle>{message.title}</StyledTitle>
            <StyledSubtible selected={index === selected}>
                {message.subtitle}
            </StyledSubtible>
        </StyledTextContainer>
    </StyledContainer>
)

export default MessagePreview
