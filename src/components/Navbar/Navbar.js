import React from 'react'
import { Nav, NavContainer, NavIcon, NavMenu, NavItem, NavLogo} from './NavbarStyles'
import { data } from '../../data/NavbarData.js'
export const Navbar = () => {
    return (
            <Nav>
                    <NavContainer>
                        <NavLogo>
                        <NavIcon src="./assets/Logo.png" alt="Logo"/>
                        </NavLogo>
                        <NavMenu>
                            {data.map((el, idx) => (
                                <NavItem key={idx}>
                                    {el.text}
                                </NavItem>
                             ))}
                        </NavMenu>  
                    </NavContainer>
            </Nav>
            
    )
}
