import React from 'react';
import { API_REQUEST } from '../api';
import {CONFIDENCE} from '../constants';
import Submission from '../components/Submission';

class DetailContainer extends React.Component {
    constructor(){
        super();

        this.state = {submission:null, sort: CONFIDENCE}
    }
    componentDidMount(){
        this.requestSubmission();
    }

    requestSubmission(){
        const { id } = this.props;
        if(id){
            API_REQUEST.getSubmission(id).fetch().then(result => {
                this.setState({submission: result})
            });
        }
    }

    handleItemClick = (e,name) => {
        this.setState({ sort: name });
        this.requestSubmission();
        this.props.history.push(`/detail/${this.props.id}/comments/${name}`)
    }
    
    render() { 
        const { submission, sort } = this.state;
        return (
            <Submission submission={submission} sort={sort} handleItemClick={this.handleItemClick}/>
        );
    }
}

export default DetailContainer;