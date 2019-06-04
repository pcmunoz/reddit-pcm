import React from 'react';
import { Message, Grid } from 'semantic-ui-react'

const NotFound = () => 
    <Grid.Row>
        <Grid.Column>
            <Message warning>Warning! 404 Not Found.</Message>
            </Grid.Column>
    </Grid.Row>
;

export default NotFound;