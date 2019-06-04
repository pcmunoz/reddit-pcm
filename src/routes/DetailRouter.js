import React from 'react';
import DetailContainer from '../containers/DetailContainer';
import {CONFIDENCE} from '../constants';

class DetailRouter extends React.Component {
    componentDidMount = () => {
      const { params, url } = this.props.match;
      let redirectUrl = url;
      if(params.id){
        redirectUrl = `${redirectUrl}/comments/${CONFIDENCE}`;
      }
      this.props.history.push(redirectUrl);
    }
  
    render() {
      const {id} = this.props.match.params;
      return (
          <DetailContainer id={id} history={this.props.history}/>
      )
    }
}

export default DetailRouter;
