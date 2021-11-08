import styled from "styled-components";
import { Column, Row } from "../../globalStyles";

export const CarouselContainer = styled(Column)`
    overflow: hidden;


`
export const CarouselMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    height: 50px;
    width: 100%;
    z-index: 50;

    @media screen and (max-width: 960px) {
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 425px){
        flex-direction: column;
        row-gap: 10px;
    }
`;

export const CarouselMenuHeader = styled.h1`
    display: flex;
    width: 40%;
    justify-content: center;
    font-size: 24pt;
`;

export const MenuLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 60%;
    column-gap: 10%;
`;

export const CarouselMenuItem = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    font-size: 12pt;
    border: none;
    border-radius: 10px;

    @media screen and (max-width: 425px){
        font-size: 8pt;
    }
`;

export const CarouselItemContainer = styled(Row)`
    overflow-x: hidden;
    
`;

export const CarouselItem = styled(Row)`
    background-color: ${({ Inverse }) => (Inverse ? '#e2e1e6': 'white')};
    border: none;
    border-radius: 6px;
    padding-bottom: 0px;

    &.Img960container{
        flex-direction: row;

        @media screen and (max-width: 425px){
        height: 320px;
        }
    };

    @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 90%;
        margin-top: 30px;
        overflow: hidden;;
    }

    @media screen and (max-width: 425px){
        padding: 15px;
    }
`

