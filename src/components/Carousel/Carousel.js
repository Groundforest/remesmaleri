import React, { useState, useEffect, forwardRef, useRef, useLayoutEffect } from 'react'
import { CarouselContainer, CarouselMenuItem, CarouselItemContainer, CarouselMenu, CarouselMenuHeader, MenuLinksContainer, CarouselItem} from './CarouselStyle'
import { CarouselButtonData } from '../../data/ContentData'
import { ServicesData } from '../../data/CarouselData'
import { TextWrap, Heading, Subtitle, IconItem, Img } from '../Content/ContentStyle'




export const Carousel = forwardRef((props, ref) => {
    const[index, setIndex] = useState(0)
    const[CarouselObj, setCarouselObj] = useState();
    const[resize, setResize] = useState(true);
    const[windowSizeMedium, setWindowSizeMedium] = useState(false);
    const { icons } = CarouselButtonData;
    const elRef = useRef([])
    

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

    const resizeHandler = () => {
        if(resize){
        setTimeout(() => setResize(!resize), 10000)
        }
    }

    //window.onresize = resizeHandler;

    const onClickHandler = (ref, id) => {
        setCarouselObj(id)
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
        <CarouselContainer ref={ref} height="93vh" width="100%" justify='space-between'>
            <CarouselMenu>
                <CarouselMenuHeader>TJÄNSTER</CarouselMenuHeader>
                <MenuLinksContainer>
                    {ServicesData.map((el, idx) =>
                        <CarouselMenuItem className='CarouselLinks' onClick={() => onClickHandler(elRef, idx)}>
                            {el.Headline}
                        </CarouselMenuItem>
                    )}
                </MenuLinksContainer>    
            </CarouselMenu>
            <CarouselItemContainer id='CarouselItemContainer' width='100%' height='100%' align='center' position={resize ? 'absolute': ''} >
                {ServicesData.map((s, idx) => 
                    <CarouselItem ref={(refElement) => (elRef.current.push(refElement))}
                    key={idx} 
                    justify='center' 
                    align='center' 
                    height='85%' 
                    width='100vw' 
                    minWidth='100vw' 
                    padding='20px'>
                    
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
            {console.log(resize)}
        </CarouselContainer>   
    )
})



    /*const element = document.getElementById('CarouselItemContainer')

    
    function isVisible (ele) {
        const { top, bottom } = ele.getBoundingClientRect();
        const vHeight = (window.innerHeight || ele.documentElement.clientHeight);
      
        return (
          (top > 0 || bottom > 0) &&
          top < vHeight
          );
      }

    useLayoutEffect(() => {
        const keepInView = () => {
            if (isVisible(element)){
            elRef.current[CarouselObj].scrollIntoView({behavior: 'smooth', block: 'nearest'})
        }} 

        window.addEventListener('resize', keepInView)
    }, [CarouselObj, element])*/
