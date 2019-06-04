import React from 'react';
import { Label, Grid, Header, Image } from 'semantic-ui-react'
import { numFormatter,imgSrc, fromNow } from '../common';

const Details = ({submission}) => 
    <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
            <Grid.Column>
                <Header.Subheader>
                    <Label>{submission.subreddit_name_prefixed}</Label>
                    <Label>Posted by:{submission.author.name}</Label>
                    <Label>{fromNow(submission.created_utc)}</Label>
                </Header.Subheader>
                <Header>{submission.title}</Header>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
                <Image src={imgSrc(submission.preview, submission.thumbnail)} size="large" centered/>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Header.Subheader>
                    <Label>{numFormatter(submission.num_comments)} Comments</Label>
                </Header.Subheader>
            </Grid.Column>
        </Grid.Row>
    </Grid>

export default Details;