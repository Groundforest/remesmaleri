import styled from "styled-components";
import { Container} from "../../globalStyles";

export const Nav =  styled.div`
    height: 150px;
    background: transparent;
    overflow: clip;
    
`;


export const NavContainer = styled(Container)`
    display: flex;
    flex-direction: Row;
    height: inherit;
`;

export const NavLogo = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 43%;
    margin-right: auto;
    height: inherit;
    overflow: hidden;

    `;

export const NavIcon = styled.img`
    width: 200px;
    height: 200px;
    z-index: 1;
    
`;

export const NavMenu = styled.div`
    display: flex;
    margin-left: auto;
    margin-top: 20px;
    margin-right: 200px;
    height: fit-content;
    padding: 20px;
`;

export const NavItem = styled.span`
    display: flex;
    cursor: pointer;
    margin: 0.5%;
    font-size: 0.8rem;
    margin-left: 30px;
    margin-right: 30px;
    font-weight: lighter;

`;

