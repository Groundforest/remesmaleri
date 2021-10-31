import styled from "styled-components";
import { Column } from "../../globalStyles";


export const HeroContainer = styled(Column)`
    background-image: url('./assets/Hero3.jpg');
    background-repeat: no-repeat;
    background-size: 1920px, 908px;
    background-attachment: fixed;
    background-position: top;
    height: 908px;
    margin-top: -150px;
    margin-bottom: 20px;
    padding: 20px;

`;

export const HeadingContainer = styled(Column)`

`

export const Topline = styled.h1`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: baseline;
    font-size: 32pt;
    font-family: Playfair Display, sans-serif;
    font-weight: 500;
    

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


@supports (--css: variables) {
    /*background: linear-gradient(90deg, 
        rgba(255,0,0,1) 0%, 
        rgba(250,203,31,1) 21%, 
        rgba(161,248,44,1) 38%, 
        rgba(46,242,52,1) 49%, 
        rgba(68,193,192,1) 63%, 
        rgba(68,52,245,1) 90%);
    */
    /*background: linear-gradient(90deg, 
        rgba(0,255,154,1) 19%, 
        rgba(0,222,253,1) 19%, 
        rgba(0,212,255,1) 42%, 
        rgba(218,128,226,1) 42%, 
        rgba(218,128,226,1) 68%, 
        rgba(236,255,102,1) 68%, 
        rgba(236,255,102,1) 87%, 
        rgba(240,100,100,1) 87%);
        */

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
`
