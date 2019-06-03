import React from 'react';
import HomeItem from './HomeItem';
import { List } from 'semantic-ui-react'

const Home = props => {
    const {list} = props;
    return (
        <List>
                {
                    list && list.map((submission,index) => (
                        <HomeItem key={index} item={submission} />
                    ))
                }
        </List>
    )
};

export default Home;