import React from 'react';
import { ContentContainer, ContentRow, Heading, Subtitle, TextWrap, Img, IconItem} from './ContentStyle';

export const Content = ({
    Align,
    Justify,
    classname,
    img,
    Headline,
    Description,
    reverse,
    inverse,
    icons
}) => {


    return (
        <ContentContainer className={classname} justify={Justify} align={Align} height='500px'>
            <ContentRow  className={classname} justify='center' align='center' height='inherit' Reverse={reverse} Inverse={inverse} width='100%'>
                <TextWrap className={classname}>
                    <Heading className={classname} Inverse={inverse}>
                        {Headline ? Headline: ''}
                    </Heading>
                    <Subtitle className={classname}>
                        {Description ? Description: ''}
                        {icons ? icons.map((Ic, idx) =>
                        <IconItem Inverse={inverse}>{Ic}</IconItem>
                        ):''}
                    </Subtitle>
                </TextWrap>
                     {img ? img.map((i, idx) => 
                        <Img className={classname} key={idx}
                            src={i}
                        />
                        ): ''}
            </ContentRow>
        </ContentContainer>
    )
}
