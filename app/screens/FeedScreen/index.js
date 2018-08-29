import React, { PureComponent } from "react";
import { View } from "react-native";
import FeedHeader from "../../components/FeedHeader";
import PostScreen from "./PostsScreen";
import axios from "axios";

class FeedScreen extends PureComponent {
  state = {
    fetchingPosts: false,
    posts: [],
    fetchingError: false,
    errorMessage: ""
  };

  static navigationOptions = () => {
    return {
      header: <FeedHeader />
    };
  };

  componentDidMount() {
    this._getPosts();
  }

  async _getPosts() {
    this.setState({ fetchingPosts: true });
    try {
      const posts = await axios.get("https://api.myjson.com/bins/vvbcc");
      this.setState({ fetchingPosts: false, posts: posts.data });
    } catch (e) {
      this.setState({
        fetchingPosts: false,
        fetchingError: true,
        errorMessage: e.message
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <PostScreen />
      </View>
    );
  }
}

export default FeedScreen;
