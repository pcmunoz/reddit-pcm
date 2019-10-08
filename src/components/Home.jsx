import React from 'react';
import { Dropdown, Grid, Header, List, Loader, Dimmer, Menu } from 'semantic-ui-react'
import HomeItem from './HomeItem';
import {SUBMISSION_LIST} from '../constants';
import MenuContainer from '../containers/MenuContainer';

const Home = ({list, sort, handleItemClick}) => 
    <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
            <Grid.Column>
                <Header as='h1' dividing>
                    Reddit PCM - Home
                </Header>
                <MenuContainer activeItem={'home'}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
            Sort:&nbsp;
                <Dropdown text={sort}>
                    <Dropdown.Menu >
                    {
                        SUBMISSION_LIST.map(each => 
                            <Dropdown.Item key={each} text={each} onClick={e => handleItemClick(e,each)}/>
                        )
                    }
                    </Dropdown.Menu>
                </Dropdown>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Dimmer active={list.length < 1} inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
                <List>
                    {
                        list && list.map((submission,index) => (
                            <HomeItem key={index} item={submission} />
                        ))
                    }
                </List>
            </Grid.Column>
        </Grid.Row>
    </Grid>
;

export default Home;