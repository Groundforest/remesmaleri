import styled from "styled-components";
import { Column, Row } from "../../globalStyles";


export const ContentContainer = styled(Column)`
    &.info1, &.info2{
        height: fit-content;
        width: 100%;
    }

    &.Footer{
        background-color: #292929;
    }
`;

export const ContentRow = styled(Row)`
    background-color: ${({ Inverse }) => (Inverse ? '#e2e1e6': 'white')};
    border: none;
    border-radius: 6px;

    &.Footer{
        background: transparent;
        justify-content:flex-start;
        align-items: flex-start;
        width: fit-content;
        height: fit-content;
    }
   
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;

    &.Footer{
        margin: 10px;
    }
`;

export const Heading = styled.h1`
    color: ${({Inverse}) => (Inverse ? '#fff': 'black')};
    display: flex;
    width: fit-content;
    margin-bottom: 10px;
    font-size: 45pt;

    &.Footer{
        font-size: 16pt;
    }

`;
export const Subtitle = styled.div`
    background-color: #ffff;
    display: flex;
    font-size: 12pt;
    font-weight: lighter;
    width: 400px;

    &.info1, &.info2{
        font-size: 16pt;
        width: fit-content;
        font-style: italic;
    }

    &.Footer{
        background-color:transparent;
        justify-content: center;
        width: fit-content;
    }
    
`;
export const ContentWrapper = styled.div`  
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 1500px;
    height: 400px;
    border: none;
    border-radius: 3px;
    
`;

export const Img = styled.img`
    display: flex;
    background-image: url(${({src}) => (src ? src: '')});
    background-size: cover;
    background-position: center;
    width: 400px;
    height: 400px;
    max-height: 100%;
    margin: 20px;

    &.About {
        width: 50%;
        height: 100%;
    }
`
export const IconItem = styled.div`
    color: ${({Inverse}) => (Inverse ? '#fff': 'black')};
    display:flex;
    justify-content: space-around;
    width:100%;
    margin: 5px;
    cursor: pointer;
`