import React from 'react'
import { Carousel } from '../components/Carousel/Carousel'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Presentation } from '../components/Presentation/Presentation'
import { infoOne, infoTwo } from '../data/ContentData'

export const Home = () => {
    return (
        <>
            <Hero/>
            <Content {...infoOne}/>
            <Carousel/>
            <Content {...infoTwo}/>
            <Presentation/>
            <Footer/>
        </>
    )
}
