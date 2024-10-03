import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

const Check = () => {
  return (
    <View style={{flex: 1}}>
  
      {/* Top Image Section */}
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../images/viewimage.png')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} // Align the text to the center
        >
          <Text
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              color: 'white',
              fontSize: 34,
              fontWeight: 'bold',

              padding: 10,
            }}>
            New Collection
          </Text>
        </ImageBackground>
      </View>

      {/* midle image */}

      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 225,
          width: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '70%',
          }}>
          {/* FIRST Block */}

          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 40,
                fontWeight: 'bold',
                width: '70%',
              }}>
              Summer Sale
            </Text>
          </View>

          {/* Second Block  */}

          <ImageBackground
            source={require('../../images/view3.png')}
            style={{height: '100%', width: '100%'}}>
            <Text
              style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                color: 'white',
                fontSize: 34,
                fontWeight: 'bold',
                padding: 10,
              }}>
              Black
            </Text>
          </ImageBackground>
        </View>

        {/* Mens Hoddie Image */}

        <View style={{width: '50%', height: 550}}>
          <ImageBackground
            source={require('../../images/view2.png')}
            style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default Check;
