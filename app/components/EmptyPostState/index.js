import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import styles from './Styles';

const EmptyPostState = ({ refresh }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>There are no posts to currently show</Text>
        <TouchableHighlight onPress={refresh} style={styles.btnStyles}>
          <Text style={styles.btnText}>REFRESH</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default EmptyPostState;
