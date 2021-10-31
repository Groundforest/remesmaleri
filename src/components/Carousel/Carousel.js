import React, { useState } from 'react'
import { CarouselContainer, CarouselItem, CarouselMenu } from './CarouselStyle'
import { Utvandigt, Invandigt, Tapetsering, Snickerier} from '../../data/ContentData'
import { Data } from '../../data/CarouselData'
import { Content } from '../Content/Content'




export const Carousel = () => {
    const[CarouselObj, setCarouselObj] = useState(Utvandigt)

    const onclickHandler = (text) => {
        switch(text){
            case 'Utvändigt':
             setCarouselObj(Utvandigt);
                break
            case 'Invändigt':
             setCarouselObj(Invandigt);
                break
            case 'Tapetsering':
             setCarouselObj(Tapetsering);
                break
            case 'Snickerier':
             setCarouselObj(Snickerier);
                break
            default:
             setCarouselObj(Utvandigt)
                
        }
    }
    


    return (
        <CarouselContainer>
            <CarouselMenu>
                TJÄNSTER
                    {Data.map((el, idx) =>  
                        <CarouselItem onClick={() => onclickHandler(el.text)} key={idx}>
                            {el.text}
                        </CarouselItem>
                    )}
            </CarouselMenu>
            <Content {...CarouselObj}/>
        </CarouselContainer>
    )
}
