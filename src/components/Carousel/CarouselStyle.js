import styled from "styled-components";
import { Column } from "../../globalStyles";

export const CarouselContainer = styled(Column)`

`
export const CarouselMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 50px;
    width: 100%;
    font-size: 24pt;
`

export const CarouselItem = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    font-size: 12pt;
    border: none;
    border-radius: 10px;
`