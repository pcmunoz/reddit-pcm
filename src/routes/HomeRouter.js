import React from 'react';
import HomeContainer from '../containers/HomeContainer';
import {HOT} from '../constants';

class HomeRouter extends React.Component {
    state = { sort: HOT }

    componentDidMount = () => {
      this.props.history.push(`/${this.state.sort}`)
    }

    handleItemClick = (e,name) => {
      this.setState({ sort: name });
      this.props.history.push(`/${name}`)
    }
  
    render() {
      const { sort } = this.state;
      return (
          <HomeContainer sort={sort} key={sort} handleItemClick={this.handleItemClick}/>
      )
    }
}

export default HomeRouter;
