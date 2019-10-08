import React from 'react';
import Details from '../components/Details';
import { Dropdown, Grid, Header, Dimmer, Loader } from 'semantic-ui-react'
import { COMMENT_LIST, CONFIDENCE } from '../constants';
import { capitalFirstLetter } from '../common';
import Comments from './Comments';
import MenuContainer from '../containers/MenuContainer';

const getSort = sort => sort === CONFIDENCE ? 'Best': capitalFirstLetter(sort);

const DetailContainer = ({ submission, sort, handleItemClick }) =>
    <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
            <Grid.Column>
                <Header as='h1' dividing>
                    Reddit PCM - Detail
                </Header>
                <MenuContainer activeItem={'detail'}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Dimmer active={!submission} inverted>
                <Loader inverted content='Loading' />
            </Dimmer>
            {submission && <Details submission={submission}/>}
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
            Sort:&nbsp;
                <Dropdown text={getSort(sort)}>
                    <Dropdown.Menu >
                    {
                        COMMENT_LIST.map(each => {
                            if(each === CONFIDENCE){
                                return <Dropdown.Item key={each} text="Best" onClick={e => handleItemClick(e,each)}/>
                            }else{
                                return <Dropdown.Item key={each} text={capitalFirstLetter(each)} onClick={e => handleItemClick(e,each)}/>
                            }
                        })
                    }
                    </Dropdown.Menu>
                </Dropdown>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Dimmer active={!submission} inverted>
                <Loader inverted content='Loading' />
            </Dimmer>
            {submission && <Comments list={submission.comments}/>}
        </Grid.Row>
    </Grid>

export default DetailContainer;