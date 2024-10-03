import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';

const Viewall = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
  
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* Top Banner */}
        <ImageBackground
          source={require('../../images/samll-banner.png')}
          style={{width: 450, height: 300, justifyContent: 'flex-end'}}
          resizeMode="cover">
          <View style={{padding: 20}}>
            <Text
              style={{
                width: 450,
                fontSize: 50,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Street clothes
            </Text>
          </View>
        </ImageBackground>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 34, fontWeight: 'bold', color: 'black'}}>
              New
            </Text>
            <TouchableOpacity>
              <Text style={{color: 'black', fontSize: 16}}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={{color: '#888', marginBottom: 20}}>
            You've never seen it before!
          </Text>

          {/* items 1 column */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            {/* item 1 */}
            <View
              style={{
                borderRadius: 50,
                marginRight: 20,
                width: 150,
                alignItems: 'center',
              }}>
              {/* Wrap Image and New Tag Together */}

              <View style={{position: 'relative', width: 160}}>
                {/* New Tag */}
                <View
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    position: 'absolute',
                    top: 8,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                    New
                  </Text>
                </View>

                {/* Product Image */}
                <Image
                  source={require('../../images/item1.png')}
                  style={{
                    width: 160,
                    height: 184,
                    borderRadius: 18,
                  }}
                  resizeMode="contain"
                />
              </View>

              {/* Product Title */}
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                Red Dress
              </Text>

              {/* Product Price */}
              <Text style={{color: '#888'}}>$120</Text>
            </View>
            {/* item 2 */}
            <View
              style={{
                borderRadius: 50,
                marginRight: 20,
                width: 150,
                alignItems: 'center',
              }}>
              {/* Wrap Image and New Tag Together */}

              <View style={{position: 'relative', width: 160}}>
                {/* New Tag */}
                <View
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    position: 'absolute',
                    top: 8,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                    New
                  </Text>
                </View>

                {/* Product Image */}
                <Image
                  source={require('../../images/item2.png')}
                  style={{
                    width: 160,
                    height: 184,
                    borderRadius: 18,
                  }}
                  resizeMode="contain"
                />
              </View>

              {/* Product Title */}
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                Red Dress
              </Text>

              {/* Product Price */}
              <Text style={{color: '#888'}}>$120</Text>
            </View>
            {/* item 3 */}

            <View
              style={{
                borderRadius: 50,
                marginRight: 20,
                width: 150,
                alignItems: 'center',
              }}>
              {/* Wrap Image and New Tag Together */}

              <View style={{position: 'relative', width: 160}}>
                {/* New Tag */}
                <View
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    position: 'absolute',
                    top: 8,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                    New
                  </Text>
                </View>

                {/* Product Image */}
                <Image
                  source={require('../../images/item1.png')}
                  style={{
                    width: 160,
                    height: 184,
                    borderRadius: 18,
                  }}
                  resizeMode="contain"
                />
              </View>

              {/* Product Title */}
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                Red Dress
              </Text>

              {/* Product Price */}
              <Text style={{color: '#888'}}>$120</Text>
            </View>
          </ScrollView>

          {/* sale  */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 34, fontWeight: 'bold', color: 'black'}}>
              Sale
            </Text>
            <TouchableOpacity>
              <Text style={{color: 'black', fontSize: 16}}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={{color: '#888', marginBottom: 20}}>
            You've never seen it before!
          </Text>

          {/* items 1 column */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            {/* item 1 */}
            <View
              style={{
                borderRadius: 50,
                marginRight: 20,
                width: 150,
                alignItems: 'center',
              }}>
              {/* Wrap Image and New Tag Together */}

              <View style={{position: 'relative', width: 160}}>
                {/* New Tag */}
                <View
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    position: 'absolute',
                    top: 8,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                    New
                  </Text>
                </View>

                {/* Product Image */}
                <Image
                  source={require('../../images/item1.png')}
                  style={{
                    width: 160,
                    height: 184,
                    borderRadius: 18,
                  }}
                  resizeMode="contain"
                />
              </View>

              {/* Product Title */}
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                Red Dress
              </Text>

              {/* Product Price */}
              <Text style={{color: '#888'}}>$120</Text>
            </View>
            {/* item 2 */}
            <View
              style={{
                borderRadius: 50,
                marginRight: 20,
                width: 150,
                alignItems: 'center',
              }}>
              {/* Wrap Image and New Tag Together */}

              <View style={{position: 'relative', width: 160}}>
                {/* New Tag */}
                <View
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    position: 'absolute',
                    top: 8,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                    New
                  </Text>
                </View>

                {/* Product Image */}
                <Image
                  source={require('../../images/item2.png')}
                  style={{
                    width: 160,
                    height: 184,
                    borderRadius: 18,
                  }}
                  resizeMode="contain"
                />
              </View>

              {/* Product Title */}
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                Red Dress
              </Text>

              {/* Product Price */}
              <Text style={{color: '#888'}}>$120</Text>
            </View>
            {/* item 3 */}

            <View
              style={{
                borderRadius: 50,
                marginRight: 20,
                width: 150,
                alignItems: 'center',
              }}>
              {/* Wrap Image and New Tag Together */}

              <View style={{position: 'relative', width: 160}}>
                {/* New Tag */}
                <View
                  style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    position: 'absolute',
                    top: 8,
                    left: 10,
                    zIndex: 1,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                    New
                  </Text>
                </View>

                {/* Product Image */}
                <Image
                  source={require('../../images/item1.png')}
                  style={{
                    width: 160,
                    height: 184,
                    borderRadius: 18,
                  }}
                  resizeMode="contain"
                />
              </View>

              {/* Product Title */}
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
                Red Dress
              </Text>

              {/* Product Price */}
              <Text style={{color: '#888'}}>$120</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Viewall;
