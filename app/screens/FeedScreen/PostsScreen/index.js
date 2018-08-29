import React, { PureComponent } from "react";
import {
  View,
  Text
} from "react-native";
import Post from "../../../components/Post";
import ErrorScreen from "../../../components/ErrorScreen";
import EmptyPostState from "../../../components/EmptyPostState";

class PostScreen extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", margin: 20 }}>
          LETS GET SOME POSTS IN HERE
        </Text>
      </View>
    );
  }
}

export default PostScreen;
