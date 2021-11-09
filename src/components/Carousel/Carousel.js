import React, { useState, useEffect, forwardRef, useRef} from 'react'
import { CarouselContainer, CarouselMenuItem, CarouselItemContainer, CarouselMenu, CarouselMenuHeader, MenuLinksContainer, CarouselItem} from './CarouselStyle'
import { CarouselButtonData } from '../../data/ContentData'
import { ServicesData } from '../../data/CarouselData'
import { TextWrap, Heading, Subtitle, IconItem, Img } from '../Content/ContentStyle'



export const Carousel = forwardRef((props, ref) => {
    const[index, setIndex] = useState(0);
    const[windowSizeMedium, setWindowSizeMedium] = useState(false);
    const[CarouselObj, setCarouselObj] = useState(0);
    const { icons } = CarouselButtonData;
    const elRef = useRef([]);

    useEffect(() => {
        if (window.innerWidth <= 1024) {
            setWindowSizeMedium(true)
        };

        const checkWindowSize = () => {
            if (window.innerWidth <= 1024){
                setWindowSizeMedium(true)
            } else {
                setWindowSizeMedium(false)
            }
        };

        window.addEventListener('resize', checkWindowSize)
        return () => {
            window.removeEventListener('resize', checkWindowSize)
        };
    }, []);

    useEffect(() => {
        const el = document.getElementById('CarouselContainer')

        function isVisible(){
            if(el !== 'null'){
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            }   
        };

        function keepInView() {
            if (isVisible()) {
            elRef.current[CarouselObj].scrollIntoView({behavior: 'smooth', block: 'center'})
                };
            }

        window.addEventListener('resize', keepInView)
    },[CarouselObj])

    const onClickHandler = (ref, id) => {
        setCarouselObj(id)
        setIndex(0)
        ref.current[id].scrollIntoView({behavior: 'smooth', block: 'nearest'})
    };

    const indexChanger = (array, direction) => {
        if (index !== (array.length - 1) && direction === 'increament') {
            const increamentIndex = index + 1
            setIndex(increamentIndex)
        } 
        if ( index !== 0 && direction === 'decreament'){
            const decreamentIndex = index - 1
            setIndex(decreamentIndex)
        };
    };

    return (
        <CarouselContainer id='CarouselContainer' ref={ref} height="85vh" width="100%" justify='space-between'>
            <CarouselMenu>
                <CarouselMenuHeader>TJÄNSTER</CarouselMenuHeader>
                <MenuLinksContainer>
                    {ServicesData.map((el, idx) =>
                        <CarouselMenuItem key={idx} className='CarouselLinks' onClick={() => onClickHandler(elRef, idx)}>
                            {el.Headline}
                        </CarouselMenuItem>
                    )}
                </MenuLinksContainer>    
            </CarouselMenu>
            <CarouselItemContainer width='100%' height='95%'>
            {ServicesData.map((s, idx) =>
                    <CarouselItem className='CarouselItem' ref={(refElement) => (elRef.current[idx] = refElement)}
                    key={idx} 
                    justify='center' 
                    align='center'
                    margin='auto' 
                    height='85%' 
                    width='100%'
                    padding='20px'
                    >
                        <TextWrap className={s.classname}>
                            <Heading className={s.classname} Inverse={s.inverse}>
                                {s.Headline ? s.Headline: ''}
                            </Heading>
                            <Subtitle className={s.classname}>
                                {s.Description ? s.Description: ''}
                            </Subtitle>
                        </TextWrap>
                        {windowSizeMedium ? s.img &&
                            <CarouselItem className="Img960container" 
                            justify='center'
                            align='center' 
                            width='100%'>
                                <IconItem onClick={() => indexChanger(s.img, 'decreament')}>{icons.Left}</IconItem> 
                                    <Img className={s.classname} src={s.img[index]}/>
                                <IconItem onClick={() => indexChanger(s.img, 'increament')}>{icons.Right}</IconItem>    
                            </CarouselItem>
                        :s.img ? s.img.map((i, idx) =>
                            <Img className={s.classname} key={idx} src={i}/>): ''
                        }
                    </CarouselItem>
                     )}
            </CarouselItemContainer>
        </CarouselContainer>   
    )
})


