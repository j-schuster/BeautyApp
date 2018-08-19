import React from "react";
import {
  createStackNavigator,
  StackNavigator,
} from "react-navigation";
import FeedScreen from '../screens/FeedScreen';


const RootStack = createStackNavigator({
  Home: {
    screen: FeedScreen,
    navigationOptions: {
      title: "Feed",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#FFA500",
        borderBottomColor: "transparent",
        borderBottomWidth: 0,
        elevation: 0
      }
    }
  },
});

export default RootStack;