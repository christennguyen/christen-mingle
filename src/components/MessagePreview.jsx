/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledContainer = styled.div`
    display: flex;
    margin: 0px 10px;
    cursor: pointer;
    height: 68px;
    ${(props) =>
        props.theme.main === 'dark'
            ? `background-color: 
                  ${props.selected ? '#218AFF' : 'inherit'}}`
            : `background-color: 
                  ${props.selected ? '#037AFF' : 'inherit'}}`}
    border-radius: 10px;
`

const StyledIcon = styled.div`
    background-color: grey;
    color: white;
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

    ${(props) =>
        !props.selected &&
        (props.theme.main === 'dark'
            ? 'border-bottom: 1px solid #6b6a6b'
            : 'border-bottom: 1px solid #D4D3D4')};
    margin-left: 8px;
`
const StyledTitle = styled.p`
    font-weight: bold;
    margin-bottom: 0px;
    ${(props) =>
        props.theme.main === 'dark'
            ? `color: 
             white`
            : `color: 
              ${props.selected ? 'white' : 'black'}}`}
`

const StyledSubtible = styled.p`
    margin: 0;
    ${(props) =>
        props.theme.main === 'dark'
            ? `color: 
              ${props.selected ? 'white' : '#b3b3b3'}}`
            : `color: 
              ${props.selected ? '#D0E4FF' : '#8E8D8E'}}`}
`
const MessagePreview = ({ message, index, onClick, selected }) => {
    const isSelected = index === selected
    return (
        <StyledContainer
            key={uuidv4()}
            index={index}
            onClick={onClick}
            selected={isSelected}
        >
            <StyledIcon>{message.title.charAt(0)}</StyledIcon>
            <StyledTextContainer selected={isSelected}>
                <StyledTitle selected={isSelected}>{message.title}</StyledTitle>
                <StyledSubtible selected={isSelected}>
                    {message.subtitle}
                </StyledSubtible>
            </StyledTextContainer>
        </StyledContainer>
    )
}

export default MessagePreview
