import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from './HomeContainer';

class RouterContainer extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu attached='top' tabular>
            <Link to="/new">
                <Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick} />
            </Link>
            <Link to="/new">
                <Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick} />
            </Link>
          </Menu>
  
          <Segment attached='bottom'>
            <Router>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/:sort" component={HomeContainer} />
                <Route path="/:detail" component={DetailContainer} />
            </Router>
          </Segment>
        </div>
      )
    }
}

export default RouterContainer;
