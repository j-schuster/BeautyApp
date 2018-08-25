import React, {Component} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SearchBar, Icon } from 'react-native-elements';
import styles from './Styles';

class FeedHeader extends React.PureComponent {
  render(){
    return(
      <LinearGradient colors={["#8B1A83", "#551A8B"]} >
        <SafeAreaView/>
          <View style={styles.containerPadding}>
            <Text style={styles.welcomeBack}>WELCOME BACK!</Text>
              <View style={styles.mainContentContainer}>
                <Text style={styles.header}>Search Beauty</Text>
              <View style={styles.iconsContainer}>
                <Icon
                    name='arrow-down-drop-circle-outline'
                    type='material-community'
                    color='#fff'
                  />
                  <Icon
                    name='ios-cart'
                    type='ionicon'
                    color='#fff'
                  />
              </View>
            </View>
           </View>
        <SearchBar
          inputStyle={styles.inputStyles}
          containerStyle={styles.inputContainer}
          onChangeText={() => console.log("hi")}
          onClearText={() => console.log("hi")}
          placeholder='Search'
          clearIcon={{
            color: "#999",
            style: styles.clearIcon
          }}
          icon={{
            type: "material-community",
            color: "#999",
            name: "magnify",
            style: styles.searchIcon
          }}/>
      </LinearGradient>
    )
  }
}

export default FeedHeader;