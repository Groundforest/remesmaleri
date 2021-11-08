import styled from "styled-components";
import { Column } from "../../globalStyles";


export const HeroContainer = styled(Column)`
    display: flex;
    background-image: url('./assets/Hero3.jpg');
    background-repeat: no-repeat;
    background-size: 1920px, 908px;
    background-attachment: fixed;
    background-position: top;
    flex-direction: column;
    height: 990px;
    margin-top: -170px;

    @media screen and (max-width: 960px) {
        height: 830px;
        background-size: 1620px, 708px;
    }

    @media screen and (min-width: 2560px) {
        background-size: 100%;
    }
`

export const HeadingContainer = styled(Column)`
    display: flex;
`

export const Topline = styled.h1`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: baseline;
    font-size: 32pt;
    font-family: Playfair Display, sans-serif;
    font-weight: 500;
    
    @media screen and (max-width: 960px) {
        font-size: 22pt;
    }
`;



export const GradE =  styled.em`
    display: flex;
    width: fit-content;
    height: fit-content;
    margin: ${({ margin }) => (margin ? margin: '')};
    margin-left: ${({ margLeft }) => ( margLeft ? margLeft : '')};
    font-size: 36pt;
    font-family: Playfair Display, sans-serif;
    color: black;
    font-weight: 900;

    @media screen and (max-width: 960px) {
        font-size: 26pt;
    }


@supports (--css: variables) {  
    background: linear-gradient(135deg,
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);    
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
   
    &.vision{
        background: linear-gradient(45deg,
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);    
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    }
    
}
`
export const Subtitle = styled.span`
    display: flex;
    height: fit-content;
    width: fit-content;
    align-items: baseline;
    font-size: 18pt;
    margin-top: -20px;
    font-family: Proxima nova, sans-serif;
    font-weight: lighter;

    @media screen and (max-width: 960px) {
        font-size: 14pt;
    }
`;

export const ServicesButton = styled.button`
    display:flex;
    width: 150px;
    height: 40px;
    border: none;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0px 3px 3px gray; 
    justify-content:center;
    align-content:center;
    position: relative;
    top: 7%;
    transition: transform  0.7s;
    
    

    span{
        color: #5c5c5c;
        font-size: 14pt;
        width: 100%;
        height: fit-content;
    }

    &:hover{
        background-color: #fff;
        transform: translateX(0px) translateY(-7px);
    }
   
`