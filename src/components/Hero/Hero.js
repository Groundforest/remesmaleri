import React from 'react'
import { GradE, HeadingContainer, HeroContainer, Subtitle, Topline } from './HeroStyle'

export const Hero = () => {
    return (
        <>
            <HeroContainer justify='center' width='100%'>
                <HeadingContainer justify='center' align='center' maxWidth='inherit'>
                <Topline>
                    Sätt
                    <GradE margin='15px'>FÄRG</GradE>
                    på tillvaron.
                </Topline>
                <Subtitle>
                    Vi förverkligar din <GradE className="vision" margLeft='12px'>VISION</GradE>.
                </Subtitle>
                </HeadingContainer>
            </HeroContainer>

           
        </>
    )
}
