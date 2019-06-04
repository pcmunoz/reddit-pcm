import React from 'react';
import Moment from 'react-moment';

export const imgSrc = (preview, thumbnail) => {
    if(preview){
        const {images} = preview;
        if(images){
            return images[0].source.url;
        } 
        return '/images/default.png'; 
    }
    if(thumbnail === 'self'){
        return '/images/default.png';
    }
    return thumbnail;
}

export const numFormatter = number => {
    return Math.abs(number) > 999 ? Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + 'k' : Math.sign(number)*Math.abs(number)
}

export const fromNow = utcDate => <Moment unix fromNow>{utcDate}</Moment>;

export const capitalFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);