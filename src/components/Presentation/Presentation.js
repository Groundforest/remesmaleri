import React from 'react'
import { Content } from '../Content/Content'
import { PresentationContainer } from './PresentationStyle'
import { About } from '../../data/ContentData'

export const Presentation = () => {
    return (
        <PresentationContainer>
            <Content {...About}/>
        </PresentationContainer>
    )
}
