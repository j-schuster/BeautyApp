import React, { PureComponent } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";
import { Icon } from "react-native-elements";
import styles from "./Styles";

class Post extends PureComponent {
  state = {
    stars: []
  };

  componentDidMount() {
    this.calculateStars(this.props.item.stars);
  }

  calculateStars = rating => {
    let starsArray = [];
    for (i = 1; i < rating; i++) {
      starsArray.push(i);
    }

    this.setState({ stars: starsArray });
  };

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.userLeft}>
            <FastImage
              style={styles.avatar}
              source={{
                uri: item.avatar,
                priority: FastImage.priority.normal
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.textPadding}>
              <Text style={styles.userName}>{item.user}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <LinearGradient
              colors={["#8B1A83", "#551A8B"]}
              style={styles.followAction}
            >
              <Text style={styles.followText}>FOLLOW</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.postContainer}>
          <FastImage
            style={styles.postImage}
            source={{
              uri: item.postImage,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover}
          >
            <LinearGradient
              colors={["#000", "transparent"]}
              style={styles.infoGradient}
            >
              <View style={styles.infoContainer}>
                <View style={styles.infoLeft}>
                  <Text style={styles.vendorText}>{item.vendorName}</Text>
                  <Text style={styles.productText}>{item.productName}</Text>
                  <View style={{ flexDirection: "row" }}>
                    {this.state.stars &&
                      this.state.stars.map((s, i) => (
                        <Icon
                          key={i}
                          name="star"
                          type="font-awesome"
                          color="orange"
                          size={20}
                          iconStyle={{ marginRight: 2 }}
                        />
                      ))}
                  </View>
                </View>
                <View style={styles.postTextContainer}>
                  <Text style={styles.price}>$ {item.productPrice}</Text>
                </View>
              </View>
            </LinearGradient>
          </FastImage>
          <View style={styles.content}>
            <View style={styles.postData}>
              <Icon name="ios-heart-empty" type="ionicon" color="#551A8B" />
              <Text style={styles.like}>{item.likes} Likes</Text>
            </View>
            <View>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
            <Text style={styles.comments}>{item.comments.length} comments</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Post;
