/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const SpeechBubble = styled.div`
    ${(props) =>
        props.theme.main === 'dark'
            ? `background-color: 
              ${props.sender === 'me' ? '#218AFF' : '#3B3B3D'}}`
            : `background-color: 
              ${props.sender === 'me' ? '#1587FE' : '#DBDBDD'}}`}

    ${(props) =>
        props.theme.main === 'dark'
            ? `color: white`
            : `color: 
                      ${props.sender === 'me' ? 'white' : 'black'}}`}
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
    cursor: pointer;
`

const StyledReadMessage = styled.div`
    color: #909090;
    ${(props) => props.sender === 'me' && 'align-self: flex-end'};
    font-size: 11px;
    margin-bottom: 6px;
    ${(props) => props.sender === 'me' && 'margin-right: 2px'};
`
const TextMessage = ({ message }) => {
    /* eslint-disable no-console */
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })
    if (message.text === '') {
        if (message.image) {
            return (
                <StyledImage
                    sender={message.sender}
                    src={message.image}
                    alt={message.alt}
                    title={message.title || message.alt}
                />
            )
        }
        return (
            <SpeechBubble sender={message.sender}>
                <a href={message.link}>{message.link}</a>
            </SpeechBubble>
        )
    }
    return (
        <>
            <SpeechBubble sender={message.sender}>{message.text}</SpeechBubble>
            {message.read && (
                <StyledReadMessage sender={message.sender}>
                    <b>Read</b> {time}
                </StyledReadMessage>
            )}
        </>
    )
}

export default TextMessage
