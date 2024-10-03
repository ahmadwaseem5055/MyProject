import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

const Forget = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(null);

  const handleChange = text => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    setEmail(text);
    setIsValid(isEmailValid);
  };

  const resetPassword = async () => {
    if (isValid) {
      try {
        Alert.alert(
          'Success',
          'A password reset link has been sent to your email.',
        );
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Failed to reset password');
      }
    } else {
      Alert.alert('Error', 'Please enter a valid email address');
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          gap: 100,
          alignItems: 'center',
          padding: 20,
          paddingTop: 50,
          backgroundColor: '#F9F9F9',
        }}>
        {/* header View */}

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'flex-start',
            width: '100%',
          }}>
          {/* Top Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../images/icon.png')}
              style={{width: 35, height: 35, marginLeft: -10}}
            />
          </TouchableOpacity>

          {/* Title */}
          <Text style={{fontSize: 36, fontWeight: 'bold', color: '#333'}}>
            Forgot password
          </Text>
        </View>

        {/* Middle view */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: 10,
          }}>
          {/* Password Title */}
          <View style={{width: '100%'}}>
            <Text style={{color: '#222222', fontSize: 16}}>
              Please enter your email address. You will receive a link to create
              a new password via email.
            </Text>
          </View>

          {/* Email Input */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 70,
              borderColor:
                Email.length === 0 ? '#FFFFFF' : isValid ? '#FFFFFF' : 'red',
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
              padding: 10,
              backgroundColor: '#fff',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{fontWeight: 'normal', color: '#9B9B9B', fontSize: 16}}>
                Email:
              </Text>
              {!isEditing ? (
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
                    {Email}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TextInput
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    border: 2,
                    border: 'blue',
                  }}
                  onChangeText={handleChange}
                  value={Email}
                  onBlur={() => setIsEditing(false)}
                  autoFocus={true}
                />
              )}
            </View>

            {/* image show*/}
            {isValid ? (
              <Image
                source={require('../images/check.png')}
                style={{width: 20, height: 20}}
              />
            ) : Email.length > 0 ? (
              <Image
                source={require('../images/cross.png')}
                style={{width: 20, height: 20}}
              />
            ) : null}
          </View>
          {Email.length > 0 && !isValid && (
            <Text style={{color: 'red', marginTop: -8, marginBottom: 10}}>
              Not a valid email address .Should be your@email.com
            </Text>
          )}

          {/* Reset Password Button */}
          <TouchableOpacity
            style={{
              width: 350,
              height: 48,
              backgroundColor: '#DB3022',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              marginTop: 50,
            }}
            onPress={resetPassword}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              SEND
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Forget;
