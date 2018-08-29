import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2
  },
  userContainer: { flexDirection: "row", justifyContent: "space-between" },
  userLeft: { flexDirection: "row" },
  avatar: { height: 50, width: 50, borderRadius: 25, margin: 2 },
  textPadding: { paddingLeft: 8 },
  userName: { fontWeight: "bold", fontSize: 17, color: "#888" },
  location: { fontSize: 13, color: "#727272", marginLeft: 6 },
  followAction: {
    borderRadius: 16,
    height: 18,
    width: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  followText: { color: "#fff", fontWeight: "bold", fontSize: 10 },
  postContainer: {
    height: 400,
    width: "100%",
    marginTop: 14,
    borderRadius: 12
  },
  postImage: {
    height: 280,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  infoGradient: { borderRadius: 16, height: 100, width: "100%" },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoLeft: { alignItems: "flex-start", padding: 8 },
  vendorText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "100",
    lineHeight: 22
  },
  productText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "100",
    lineHeight: 16
  },
  postTextContainer: {
    height: 40,
    width: 80,
    backgroundColor: "#551A8B",
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  price: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  content: {
    padding: 6,
    backgroundColor: "#fff",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  postData: { flexDirection: "row", alignItems: "center" },
  like: { color: "#888", marginLeft: 5 },
  postTitle: {
    lineHeight: 24,
    fontWeight: "bold",
    color: "#888",
    fontSize: 16
  },
  bodyText: { color: "#999" },
  comments: {
    alignSelf: "flex-end",
    marginTop: 8,
    fontSize: 12,
    fontWeight: "bold",
    color: "#999"
  }
});

export default styles;