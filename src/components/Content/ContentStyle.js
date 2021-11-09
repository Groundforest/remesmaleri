import styled from "styled-components";
import { Column, Row } from "../../globalStyles";


export const ContentContainer = styled(Column)`
    width: 100%;
    &.info1, &.info2{
        height: fit-content;
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

    &.About {
        justify-content: flex-end;
    }

    &.info1, &.info2{
        height: 70px;
    }

    @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 90%;
        margin-top: 30px;
        overflow: hidden;;
    }

    @media screen and (max-width: 425px){
    }
   `;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;

    &.Footer{
        margin: 10px;
    }

    @media screen and (max-width: 1024px){
        margin: 25px;
        width: 50%;
        align-content: flex-start;
    }

    @media screen and (max-width: 960px) {
        align-items: center;
        width: 100%;
        margin: 0;
        margin-top: 20px;
        margin-bottom: 20px;
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
    @media screen and (max-width: 1024px) {
        font-size: 36pt;
    }


    @media screen and (max-width: 960px) {
        font-size: 24pt;
    }

`;
export const Subtitle = styled.div`
    background-color: #ffff;
    display: flex;
    font-size: 12pt;
    font-weight: lighter;
    width: 400px;

    @media screen and (max-width: 1024px), (max-width: 1440px) {
        font-size: 10pt;
        width: 100%;
    }


    @media screen and (max-width: 960px) {
        width: 50%;
        text-align: center;
        font-size: 10pt;
        
    }

    @media screen and (max-width: 425px){
        width: 250px;
    }

    &.info1, &.info2{
        justify-content:center;
        font-size: 16pt;
        width: 100%;
        font-style: italic;

        @media screen and (max-width: 960px) {
            font-size: 12pt;
    }
    }

    &.Footer{
        background-color:transparent;
        justify-content: center;
        width: fit-content;
    }

    &.About{
        width: 300px;
    }
    
`;

export const Img = styled.img`
    display: flex;
    width: 400px;
    height: 400px;
    margin-right: 5px;
    max-height: 100%;

    &.About {
        width: 70%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 1024px) {
        width: 75%;
        height: 100%;
        object-position: 60%;
    };

        @media screen and (max-width: 960px) {
        width: 150%;
        height: 100%;
    };

    }

    @media screen and (max-width: 960px) {
        height: 250px;  
        width: 250px;
        margin:0px;
        margin-top:20px;
        margin-bottom: 20px;
        
    }
    
    @media screen and (max-width: 425px){
        margin-top: 0;
    }
    `;

export const IconItem = styled.button`
    background-color: transparent;
    display:flex;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;

    svg{
        color: #fff;

        &.left, &.right{
        color: black;
        }
    }
`;
