import React, { useState } from 'react'
import styled from 'styled-components'
import MessagePreview from './MessagePreview'
import TextMessage from './TextMessage'
import SidebarHeader from './SidebarHeader'
import ContentHeader from './ContentHeader'
import ContentFooter from './ContentFooter'
import { messageData } from '../data/data'

const StyledContainer = styled.div`
    border-radius: 10px;
    color: white;
    width: calc(100% - 32px);
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
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

const MessageContentContainer = styled.div`
    background-color: #1f1f1f;
    overflow-y: scroll;
    height: 100%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 600px;
    min-width: 400px;

    @media only screen and (max-width: 600px) {
        width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
    }
`
const StyledDelivered = styled.div`
    color: #909090;
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 6px;
    margin-right: 2px;
`

const StyledDisclaimer = styled.div`
    display: none;
    @media only screen and (max-width: 600px) {
        display: block;
        width: 80%;
        text-align: center;
        margin: 0 auto 10px auto;
    }
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
                <ContentContainer>
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
                            <StyledDisclaimer>
                                You are viewing the mobile version of this app.
                                For the best experience of Christen Mingle,
                                please view on desktop.
                            </StyledDisclaimer>
                        </MessageContent>
                    </MessageContentContainer>
                    <ContentFooter />
                </ContentContainer>
            </StyledLayout>
        </StyledContainer>
    )
}

export default Messages
