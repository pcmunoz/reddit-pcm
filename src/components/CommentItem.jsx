import React from 'react';
import { List, Image, Header, Grid, Label } from 'semantic-ui-react'
import { numFormatter, imgSrc, fromNow} from '../common';

const CommentItem = ({comment}) => 
    <List.Item>
        <List.Content>
            <Grid>
                <Grid.Column width={1}>
                    <Image src={imgSrc(item.preview, item.thumbnail)} size='tiny' />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Header as='a' href={`detail/${item.id}`}>{item.title}</Header>
                    <Header.Subheader>
                        <Label>{item.subreddit_name_prefixed}</Label>
                        <Label>Posted by:{item.author.name}</Label>
                        <Label>{fromNow(item.created_utc)}</Label>
                    </Header.Subheader>
                    <Header.Subheader>
                        <Label>{numFormatter(item.num_comments)} Comments</Label>
                    </Header.Subheader>
                </Grid.Column>
            </Grid>
        </List.Content>
    </List.Item>

export default CommentItem;