import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import FeedHeader from '../../components/FeedHeader';
import FastImage from 'react-native-fast-image'
import LinearGradient from "react-native-linear-gradient";
import { Icon } from 'react-native-elements'


class FeedScreen extends Component {

  static navigationOptions = () => {
    return {
      header: <FeedHeader />
    };
  };

  render(){
    return(
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ margin: 15, shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 2 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
            <FastImage
              style={{ height: 50, width: 50, borderRadius: 25 }}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            >
            
            </FastImage>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#a1a1a1' }}>Sarah Smith</Text>
                <Text style={{ fontSize: 13, color: '#bababa', marginLeft: 6 }}>Los Angeles, CA</Text>
              </View>
           </View>
          <TouchableWithoutFeedback>
            <LinearGradient colors={["#8B1A83", "#551A8B"]} style={{ borderRadius: 16,height: 18, width: 90 , justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>FOLLOW</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>

        <View style={{ height: 400, width: '100%', backgroundColor: 'red', marginTop: 14, borderRadius: 12 }}>
           
    

            <FastImage
              style={{ height: 280, width: '100%',  borderTopLeftRadius: 12, borderTopRightRadius: 12}}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            >
              <LinearGradient colors={["#000", "transparent"]} style={{ borderRadius: 16, height: 100, width: '100%', padding: 8}}>
                <Text style={{ color: '#fff', fontSize: 17 , fontWeight: '100'}}>Planet Beauty</Text>
                <Text style={{ color: '#fff', fontSize: 11, fontWeight: '100' }}>Full Facial Makeup</Text>
              </LinearGradient>
            </FastImage>
            <View style={{ padding: 6, backgroundColor: '#fff', borderColor: '#f1f1f1', borderWidth: 1, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name='ios-heart-empty'
                type='ionicon'
                color='#551A8B'
              />
              <Text style={{ color: '#888', marginLeft: 5 }}>364 Likes</Text>
              </View>
              <View>
                <Text style={{ lineHeight: 24, fontWeight: 'bold', color: '#888', fontSize: 16 }}>When I look good, I feel good</Text>
                <Text style={{ color: '#999' }}>I highly reccommend Planet Beauty’s products.
Been a fan for years and they never dissapoint!</Text>
              </View>
              <Text style={{ alignSelf: 'flex-end', marginTop: 8, fontSize: 12, fontWeight: 'bold', color: '#999' }}>2 comments</Text>
          </View>
        </View>
       </View>
      </View>
    )
  }
}

export default FeedScreen;