import React, {Component} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SearchBar, Icon } from 'react-native-elements'


class FeedHeader extends React.Component {
  render(){
    return(
      <LinearGradient colors={["#8B1A83", "#551A8B"]} >
        <SafeAreaView/>
      <View style={{ padding: 15 }}>
      <Text style={{ color: '#fff', fontSize: 13 }}>HEY SARAH!</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>Search Beauty</Text>
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
        <SearchBar
          inputStyle={{ borderRadius: 8, margin: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}
          containerStyle={{ marginTop: -6, backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0, width: '100%', paddingBottom: 15, paddingRight: 15, paddingLeft: 15 }}
          onChangeText={() => console.log("hi")}
          onClearText={() => console.log("hi")}
          placeholder='Search'
          clearIcon={{
            color: "#999",
            style: {
              marginTop: -8,
              marginRight: 4
            }
          }}
          icon={{
            type: "material-community",
            color: "#999",
            name: "magnify",
            style:{marginTop: -8, marginLeft: 5}
          }}/>
      </LinearGradient>
    )
  }
}

export default FeedHeader;