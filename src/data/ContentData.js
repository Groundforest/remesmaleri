import {FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

export const Utvandigt = {
    id: 1,
    reverse: false,
    inverse: false,
    Headline: 'Utvändigt',
    Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

    img: ['./assets/Outdoor.jpg', './assets/OutdoorFinish.jpg'],
    
}
export const Invandigt = {
    id: 2,
    reverse: false,
    inverse: false,
    Headline: 'Invändigt',
    Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

    img: ['./assets/Indoor1.jpg', './assets/IndoorSpackling.jpg', './assets/IndoorFinish.jpg'] 
     

}
export const Tapetsering = {
    id: 3,
    reverse: false,
    inverse: false,
    Headline: 'Tapetsering',
    Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

    img: ['./assets/rivaTapet.jpg', './assets/tapetFinish.jpg'],

}
export const Snickerier = {
    id: 4,
    reverse: false,
    inverse: false,
    Headline: 'Snickerier',
    Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

    img: ['./assets/Snickeri.jpg', './assets/SnickeriFinish.jpg']

}

export const AboutData = {
    id: 'about',
    classname: 'About',
    reverse: true,
    inverse: false,
    Headline: 'Erik Remes',
    Description: "2008 började Erik som traditionell lärling på en större målerifirma i Stockholm. 2011 blev han klar med sin utbildning och har sedan dess jobbat som målare. 10 år senare var det dags att äntligen öppna egen målerifirma. Genom åren har Erik arbetat med många olika delar inom måleriet och har fått en bred kompetens inom yrket.",

    img: ['./assets/Presentation.jpg']

}


export const infoOne = {
    classname: 'info1',
    Description: '"Vi har F-skattsedel samt att ni kan använda er av ROT-avdraget när ni anlitar oss."'
}

export const infoTwo = {
    classname: 'info2',
    Description: '"Vårat mål är att kunden alltid ska vara lika nöjd som oss.."'
}

export const FooterData = {
        inverse: true,
        classname: 'Footer',
        Headline: 'Följ oss',
        icons: [<FaFacebookSquare/>, <FaInstagram/>]
    
}

export const CarouselButtonData = {
    classname: 'carouselButton',
    icons: {'Left': <GoTriangleLeft className='left'/> , 'Right': <GoTriangleRight className='right'/>}
}