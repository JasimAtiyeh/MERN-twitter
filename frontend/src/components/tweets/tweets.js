import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return (<div>There are no Tweets</div>);
    } else {
      return (
        <div>
          <h2>All tweets</h2>
          {this.state.tweets.map(tweets => (
            <TweetBox key={tweets._id} text={tweets.text} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Tweets);