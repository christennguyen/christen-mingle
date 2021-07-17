import React, { useState } from 'react'
import styled from 'styled-components'
import MessagePreview from './MessagePreview'
import TextMessage from './TextMessage'
import SidebarHeader from './SidebarHeader'
import ContentHeader from './ContentHeader'
import ContentFooter from './ContentFooter'
import { messageData } from '../data/data'

const StyledContainer = styled.div`
    background-color: grey;
    border-radius: 16px;
    border: 0.5px solid white;
    color: white;
    width: 770px;
    margin-top: 90px;
    margin-left: 30px;
`

const StyledLayout = styled.div`
    display: flex;
    height: 500px;
`

const StyledSidebar = styled.div`
    width: 336px;
    background-color: #5a595a;
    overflow: scroll;
    border-bottom-left-radius: 16px;
    overflow-x: hidden;
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

const MessageContentContainer = styled.div`
    width: 600px;
    background-color: #1f1f1f;
    overflow-y: scroll;
    height: 410px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`
const Messages = () => {
    const [indexDisplayed, setIndexDisplayed] = useState(0)
    const handleClick = (index) => {
        setIndexDisplayed(index)
    }
    return (
        <StyledContainer>
            <StyledLayout>
                <Column>
                    <SidebarHeader />
                    <StyledSidebar>
                        {messageData.map((message, index) => (
                            <MessagePreview
                                message={message}
                                index={index}
                                onClick={() => handleClick(index)}
                                selected={indexDisplayed}
                            />
                        ))}
                    </StyledSidebar>
                </Column>
                <Column>
                    <ContentHeader />
                    <MessageContentContainer>
                        <MessageContent>
                            {messageData[indexDisplayed].content.map(
                                (message) => (
                                    <TextMessage message={message} />
                                )
                            )}
                        </MessageContent>
                    </MessageContentContainer>
                    <ContentFooter />
                </Column>
            </StyledLayout>
        </StyledContainer>
    )
}

export default Messages
