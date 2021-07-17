/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const SpeechBubble = styled.div`
    background-color: ${(props) =>
        props.sender === 'me' ? '#218AFF' : '#3B3B3D'};
    border-radius: 23px;
    padding: 8px 14px;
    width: fit-content;
    margin-bottom: 3px;
    ${(props) => props.sender === 'me' && 'align-self: flex-end'};
    align-self: ${(props) =>
        props.sender === 'me' ? 'flex-end' : 'undefined'};
    max-width: 250px;
    overflow-wrap: break-word;
`

const StyledImage = styled.img`
    border-radius: 23px;
    width: 250px;
    margin-bottom: 3px;
    height: auto;
    ${(props) => props.sender === 'me' && 'align-self: flex-end'};
`
const TextMessage = ({ message }) => {
    if (message.text === '') {
        if (message.image) {
            return (
                <StyledImage
                    sender={message.sender}
                    src={message.image}
                    alt={message.alt}
                />
            )
        }
        return (
            <SpeechBubble sender={message.sender}>
                <a href={message.link}>{message.link}</a>
            </SpeechBubble>
        )
    }
    return <SpeechBubble sender={message.sender}>{message.text}</SpeechBubble>
}

export default TextMessage
