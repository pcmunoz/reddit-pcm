import React from 'react';
import { List, Image, Header } from 'semantic-ui-react'
const imgSrc = (preview, thumbnail) => {
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
}
const HomeItem = props => {
    const {item} = props;
    console.log(item)
    return (
        <List.Item>
            <Image src={imgSrc(item.preview, item.thumbnail)} size='tiny' />
            <List.Content>
                <Header as='a'>{item.title}</Header>
                <Header.Subheader>{item.subreddit_name_prefixed}</Header.Subheader>
            </List.Content>
        </List.Item>
    )
};

export default HomeItem;