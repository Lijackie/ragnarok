import React, { useState, useEffect } from 'react';

import { HomeImageContainer, Img } from './home-image.styles';

import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';

const HomeImage = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const imgArray = [
        image1,
        image2,
        image3,
        image4
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            nextImg();
          }, 3000);

          return () => clearInterval(interval);
    }, [imgIndex]);

    const nextImg = () => {
        setImgIndex(prevIndex => {
            prevIndex = prevIndex + 1;
            if (prevIndex > 3) {
                prevIndex = 0;
            }

            return prevIndex;
        });
    };

    const prevImg = () => {
        setImgIndex(prevIndex => {
            prevIndex = prevIndex - 1;
            if (prevIndex < 0) {
                prevIndex = 3;
            }

            return prevIndex;
        });
    };

    return (
        <HomeImageContainer>
            <i class="fas fa-arrow-left" onClick={nextImg}></i>
            <i class="fas fa-arrow-right" onClick={prevImg}></i>

            <Img src={imgArray[imgIndex]} imgIndex={imgArray} />
        </HomeImageContainer>
    );
};

export default HomeImage;