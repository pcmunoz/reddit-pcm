import React from 'react';
import { List, Icon, Header, Grid, Label, Container, Dimmer, Loader } from 'semantic-ui-react'
import ReactHtmlParser from 'react-html-parser';
import { fromNow} from '../common';
import Comments from './Comments';

const showingCondition = comment => {
    if (comment.replies.length > 0){
        return true;
    } 
    return comment.replies._more && comment.replies._more.count > 0;
}

const getCount = replies => {
    if(replies._more && replies.length === 0){
        return replies._more.count;
    }
    return replies.length;
}
        

const CommentItem = ({comment, handleViewReply, replies}) => 
    <List.Item>
        <List.Content>
            <Grid container style={{'padding':'2em'}}>
                <Grid.Column width={1}>
                    <Header><Icon name='angle up' /></Header>
                    <Header><Icon name='angle down' /></Header>
                </Grid.Column>
                <Grid.Column width={11}>
                    <Header.Subheader>
                        <Label>{comment.author.name}</Label>
                        <Label>{comment.score} {comment.score > 1 ? 'points':'point'}</Label>
                        <Label>{fromNow(comment.created_utc)}</Label>
                    </Header.Subheader>
                    <Container style={{'padding':'1em'}}>
                        {ReactHtmlParser(comment.body_html)}
                    </Container>
                    
                    <Container>
                    {
                        replies.length > 0 && <Comments list={replies}/>
                    }
                    </Container>
                    <Header.Subheader>
                    {
                        showingCondition(comment) && 
                        <a href="" onClick={e => handleViewReply(e,comment.replies)}>
                            {getCount(comment.replies)} more {getCount(comment.replies) === 1 ? 'reply' : 'replies'}
                        </a>
                    }
                    </Header.Subheader>
                </Grid.Column>
            </Grid>
        </List.Content>
    </List.Item>

export default CommentItem;