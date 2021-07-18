/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import infoIcon from '../images/icons/infoDark.svg'

const StyledContainer = styled.div`
    background-color: ${(props) =>
        props.theme.main === 'dark' ? '#444344' : '#FBFAFB'};
    border-bottom: ${(props) =>
        props.theme.main === 'dark'
            ? '1px solid #444344'
            : '1px solid #E4E4E4'};
    padding: 16px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        border-top-right-radius: 0px;
    }
`

const StyledIcon = styled.img`
    cursor: pointer;
`

const ContentHeader = () => (
    <StyledContainer>
        To: Scam Likely <StyledIcon src={infoIcon} alt="info" height={18} />
    </StyledContainer>
)

export default ContentHeader
