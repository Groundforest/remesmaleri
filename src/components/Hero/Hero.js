import React, { forwardRef } from 'react'
import { GradE, HeadingContainer, HeroContainer, ServicesButton, Subtitle, Topline } from './HeroStyle'

export const Hero = forwardRef((props, ref) => {
    const { scrollTo } = props

    const handleClick = (page) => {
        scrollTo(page)
    }

    return (
        <>
            <HeroContainer ref={ref} justify='center' align='center' width='100%'>
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
                <ServicesButton onClick={() => handleClick('Services')}>
                    <span>TJÄNSTER</span>
                </ServicesButton>
            </HeroContainer>
        </>
    )
})
