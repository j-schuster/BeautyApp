import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  contentContainer: {
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#999",
    fontWeight: "bold",
    lineHeight: 26,
    fontSize: 18
  },
  btnStyles: {
    height: 40,
    width: 100,
    backgroundColor: "#551A8B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 15
  },
  btnText: { color: "#fff", fontWeight: "bold" }
});

export default styles;