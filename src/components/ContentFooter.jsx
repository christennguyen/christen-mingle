/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import smileIcon from '../images/icons/smileDark.svg'

const StyledContainer = styled.div`
    background-color: #1f1f1f;
    padding: 20px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 600px) {
        border-bottom-right-radius: 0px;
    }
`

const StyledInput = styled.input`
    background-color: #1f1f1f;
    color: white;
    width: 80%;
    height: 23px;
    border-radius: 25px;
    border: 1px solid #807e80;
    padding-left: 16px;
    font-size: 14px;
`

const StyledIcon = styled.img`
    cursor: pointer;
`
const ContentFooter = () => (
    <StyledContainer>
        <StyledInput type="text" placeholder="Christen Mingle - WIP" />
        <StyledIcon src={smileIcon} alt="smiley" height={20} />
    </StyledContainer>
)

export default ContentFooter
