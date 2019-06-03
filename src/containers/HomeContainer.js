import React from 'react';
import {hotList} from '../api';
import Home from '../components/Home';

class HomeContainer extends React.Component {
    constructor(){
        super();

        this.state = {}
    }
    componentDidMount(){
        hotList.then(result => {
            this.setState({listing: result})
        });
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() { 
        const { listing } = this.state;
        const { match } = this.props;
        const sort = match.props.sort;
        console.log(sort);
        return <Home list={listing}/>;
    }
}

export default HomeContainer;