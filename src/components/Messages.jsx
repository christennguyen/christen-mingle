import React, { useState } from 'react'
import styled from 'styled-components'
import MessagePreview from './MessagePreview'
import { messageData } from '../data/data'

const StyledContainer = styled.div`
    background-color: grey;
    border-radius: 16px;
    border: 0.5px solid white;
    color: white;
    width: 770px;
`

const StyledLayout = styled.div`
    display: flex;
    height: 500px;
`

const StyledSidebar = styled.div`
    width: 400px;
    background-color: #5a595a;
    overflow: scroll;
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

const MessageContentContainer = styled.div`
    width: 600px;
    background-color: #1f1f1f;
    overflow: scroll;
`

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
`

const StyledImage = styled.img`
    border-radius: 23px;
    width: 250px;
    margin-bottom: 3px;
    height: auto;
    ${(props) => props.sender === 'me' && 'align-self: flex-end'};
`
const Messages = () => {
    const [indexDisplayed, setIndexDisplayed] = useState(0)
    const handleClick = (index) => {
        setIndexDisplayed(index)
    }
    return (
        <StyledContainer>
            <StyledLayout>
                <StyledSidebar>
                    {messageData.map((message, index) => (
                        <MessagePreview
                            message={message}
                            index={index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </StyledSidebar>
                <MessageContentContainer>
                    <MessageContent>
                        {messageData[indexDisplayed].content.map((message) => {
                            if (message.text === '') {
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
                                    {message.text}
                                </SpeechBubble>
                            )
                        })}
                    </MessageContent>
                </MessageContentContainer>
            </StyledLayout>
        </StyledContainer>
    )
}

export default Messages
