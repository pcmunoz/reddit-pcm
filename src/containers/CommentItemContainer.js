import React from 'react';
import CommentItem from '../components/CommentItem';

class CommentItemContainer extends React.Component {
    constructor(){
        super();

        this.state = {list: [], count: 0}
    }

    handleViewReply= (e, replies) => {
        e.preventDefault();
        replies.fetchAll().then(result=>
            this.setState({list:[...result,...this.state.list]})
        );
        this.setState({count: this.state.list.count})
    }
    
    render() { 
        return (
            <CommentItem 
                comment={this.props.comment} 
                handleViewReply={this.handleViewReply} 
                show={this.state.show} 
                replies={this.state.list}
            />
        );
    }
}

export default CommentItemContainer;