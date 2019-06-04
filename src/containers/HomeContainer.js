import React from 'react';
import { API_REQUEST } from '../api';
import Home from '../components/Home';
import { NEW, RISING, TOP, CONTROVERSIAL } from '../constants';

class HomeContainer extends React.Component {
    constructor(){
        super();
        
        this.state = {listing:[]}
    }
    componentDidMount(){
        const { sort } = this.props;

        let search = API_REQUEST.getHot();
        switch(sort){
            case NEW:
                search = API_REQUEST.getNew();
                break;
            case RISING:
                search = API_REQUEST.getRising();
                break;
            case TOP:
                search = API_REQUEST.getTop();
                break;
            case CONTROVERSIAL:
                search = API_REQUEST.getControversial();
                break;
            default:
                search = API_REQUEST.getHot();
                break;
        }

        search.then(result => {
            this.setState({listing: result})
        });
    }
    
    render() { 
        const { listing } = this.state;
        const { sort, handleItemClick } = this.props;
        
        return <Home list={listing} sort={sort} handleItemClick={handleItemClick}/>;
    }
}

export default HomeContainer;