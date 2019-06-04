import React from 'react';
import { Label, Grid, Header, Image, Dropdown, Icon } from 'semantic-ui-react'
import { numFormatter,imgSrc, fromNow } from '../common';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
                    <Icon name='share'/>
                    <Dropdown text='Share' floating>
                        <Dropdown.Menu>
                            <CopyToClipboard text={window.location.href}>
                                <Dropdown.Item icon='chain' text='Copy Link' />
                            </CopyToClipboard>
                            <Dropdown.Item icon='code' text='Embed' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Header.Subheader>
            </Grid.Column>
        </Grid.Row>
    </Grid>

export default Details;