/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledContainer = styled.div`
    display: flex;
    margin: 0px 10px;
    cursor: pointer;
    height: 70px;
    background-color: ${(props) => (props.selected ? '#218AFF' : 'inherit')};
    border-radius: 4px;
`

const StyledIcon = styled.div`
    background-color: grey;
    border-radius: 100%;
    height: 44px;
    width: 44px;
    margin: 14px 0 0 14px;
`

const StyledTextContainer = styled.div`
    width: calc(100% - 85px);
    ${(props) => !props.selected && 'border-bottom: 1px solid #6b6a6b'};
    margin-left: 8px;
`
const StyledTitle = styled.p`
    font-weight: bold;
`
const MessagePreview = ({ message, index, onClick, selected }) => (
    <StyledContainer
        key={uuidv4()}
        index={index}
        onClick={onClick}
        selected={index === selected}
    >
        <StyledIcon />
        <StyledTextContainer selected={index === selected}>
            <StyledTitle>{message.title}</StyledTitle>
        </StyledTextContainer>
    </StyledContainer>
)

export default MessagePreview
