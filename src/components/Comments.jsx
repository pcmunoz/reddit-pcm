import React from 'react';
import { Label, Grid, Header, Image } from 'semantic-ui-react'
import CommentItem from './CommentItem';
import { numFormatter,imgSrc, fromNow } from '../common';

const Comments = ({list}) => 
    <Grid container style={{ padding: '5em 0em' }}>
       <List>
            {
                list && list.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))
            }
        </List>
    </Grid>

export default Comments;