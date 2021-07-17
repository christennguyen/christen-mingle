/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import editIcon from '../images/icons/editDark.svg'
import searchIcon from '../images/icons/searchDark.svg'

const StyledSidebarHeader = styled.div`
    border-top-left-radius: 10px;
    height: 62px;
    padding: 18px 8px 8px 14px;
    background-color: #5a595a;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 297px;
`

const StyledWindowControlContainer = styled.div`
    display: flex;
    width: 53px;
    justify-content: space-between;
    margin-left: 10px;
`

const StyledWindowControl = styled.div`
    height: 12px;
    width: 12px;
    background-color: ${(props) => props.color};
    border-radius: 100%;
    cursor: pointer;
`

const StyledInput = styled.input`
    background-color: #626162;
    color: white;
    width: 266px;
    height: 24px;
    border-radius: 8px;
    border: 1px solid #807e80;
    margin-top: 10px;
    padding-left: 26px;
    font-size: 14px;

    ::placeholder {
        color: #b3b3b3;
    }
`

const SearchbarContainer = styled.div`
    position: relative;
`
const StyledSearchContainer = styled.div`
    position: absolute;
    top: 17px;
    left: 8px;
`

const StyledIcon = styled.img`
    cursor: pointer;
`

const SidebarHeader = () => (
    <StyledSidebarHeader>
        <Row>
            <StyledWindowControlContainer>
                <StyledWindowControl color="#FF6057" />
                <StyledWindowControl color="#FEBD30" />
                <StyledWindowControl color="#26C640" />
            </StyledWindowControlContainer>
            <StyledIcon src={editIcon} alt="edit" height={18} />
        </Row>
        <SearchbarContainer>
            <StyledSearchContainer>
                <img src={searchIcon} alt="search" height={14} />
            </StyledSearchContainer>

            <StyledInput type="text" placeholder="Search" />
        </SearchbarContainer>
    </StyledSidebarHeader>
)

export default SidebarHeader
