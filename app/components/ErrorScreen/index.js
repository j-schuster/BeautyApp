import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import styles from './Styles';

const ErrorScreen = ({ refresh }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={refresh}>
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>
          There was an error processing your request
        </Text>
        <Text style={styles.actionText}>Tap to try again</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ErrorScreen;
