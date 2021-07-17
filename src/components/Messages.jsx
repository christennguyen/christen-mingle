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
    border-radius: 10px;
    border: 0.5px solid white;
    color: white;
    width: 770px;
    margin-top: 90px;
    margin-left: 30px;
`

const StyledLayout = styled.div`
    display: flex;
    height: 490px;
`

const StyledSidebar = styled.div`
    width: 336px;
    background-color: #5a595a;
    overflow: scroll;
    border-bottom-left-radius: 10px;
    overflow-x: hidden;
    height: 413px;
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
const StyledDelivered = styled.div`
    color: #909090;
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 6px;
    margin-right: 2px;
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
                            {messageData[indexDisplayed].content.length > 0 && (
                                <StyledDelivered>Delivered</StyledDelivered>
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
