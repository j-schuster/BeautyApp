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
      <View style={{ flex: 1 }}>
        <View style={{ margin: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
      <View style={{ height: 50, width: 50, backgroundColor: 'gray', borderRadius: 25 }}></View>
        <View>
          <Text>Sarah Smith</Text>
          <Text>Los Angeles, CA</Text>
        </View>
      </View>
        <View style={{ width: 100, height: 14, borderRadius: 6 }}><Text>FOLLOW</Text></View>
        </View>
        </View>
      </View>
    )
  }
}

export default FeedScreen;