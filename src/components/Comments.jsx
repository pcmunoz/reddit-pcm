import React from 'react';
import { List, Grid} from 'semantic-ui-react'
import CommentItemContainer from '../containers/CommentItemContainer';

const Comments = ({list}) => 
    <Grid container style={{ padding: '5em 0em' }}>
       <List>
            {
                list && list.map((comment) => (
                    <CommentItemContainer key={comment.id} comment={comment} />
                ))
            }
        </List>
    </Grid>

export default Comments;