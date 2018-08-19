import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FeedHeader from '../../components/FeedHeader';

class FeedScreen extends Component {

  static navigationOptions = () => {
    return {
      header: <FeedHeader />
    };
  };

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>THIS IS THE FEED SCREEN</Text>
      </View>
    )
  }
}

export default FeedScreen;