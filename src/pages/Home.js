import React, { useRef } from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import { Carousel } from '../components/Carousel/Carousel'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { infoOne, infoTwo, AboutData } from '../data/ContentData'
import { Container, GlobalStyle } from '../globalStyles'

export const Home = () => {
    let home = useRef(), services = useRef(), about = useRef();

   function scrollTo(page) {
        switch (page) {
            case 'Home':
                home.current.scrollIntoView({behavior: 'smooth'});
                break
            case 'Services':
                services.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                break
            case 'About':
                about.current.scrollIntoView({behavior: 'smooth'});
                break
            default:
                return null  
        }
    };

    return (
        <Container height="fit-content" justify="center" align="center" width="100%">
            <GlobalStyle/>
            <Navbar scrollTo={scrollTo}/>
            <Hero ref={home} scrollTo={scrollTo}/>
            <Content ref={services} {...infoOne}/>
            <Carousel />
            <Content ref={about} {...infoTwo}/>
            <Content {...AboutData} align='flex-end' width='100%'/>
            <Footer/>
        </Container>
    )
}
