import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState({username: false,Email: false,password: false,});
  const [isValid, setIsValid] = useState({ username: null,Email: null,password: null,});

  const signUp = async () => {
    if (username && password && isValid.username && isValid.Email && isValid.password) {
      try {
        await AsyncStorage.setItem(Email, password);
        Alert.alert('Success', 'User registered');
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Failed to register');
      }
    } else {
      Alert.alert('Error', 'Please fill all fields correctly');
    }
  };

  const handleChange = (field, text) => {
    switch (field) {
      case 'username':
        setUsername(text);
        if (text.length === 0) {
          setIsValid(prev => ({ ...prev, username: null }));
        } else {
          const isUsernameValid = /^[A-Za-z\s]*$/.test(text) && text.length > 0;
          setIsValid(prev => ({ ...prev, username: isUsernameValid }));
        }
        break;

      case 'email':
        setEmail(text);
        if (text.length === 0) {
          setIsValid(prev => ({ ...prev, Email: null }));
        } else {
          const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
          setIsValid(prev => ({ ...prev, Email: isEmailValid }));
        }
        break;

      case 'password':
        setPassword(text);
        if (text.length === 0) {
          setIsValid(prev => ({ ...prev, password: null }));
        } else {
          const isPasswordValid = text.length >= 6;
          setIsValid(prev => ({ ...prev, password: isPasswordValid }));
        }
        break;

      default:
        break;
    }
  };

 
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flex: 1,
            gap: 70,
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
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Image
                source={require('../images/icon.png')}
                style={{ width: 35, height: 35, marginLeft: -10 , }}
              />
            </TouchableOpacity>

            <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#333' }}>
              Sign Up
            </Text>
          </View>

          {/* middle View */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}>


            {/* Name Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: 70,
                borderColor: '#F9F9F9',
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 10,
                padding: 10,
                backgroundColor: '#fff',
                justifyContent: 'space-between',
              }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: 'normal',
                    color: '#9B9B9B',
                    fontSize: 16,
                  }}>
                  Name:
                </Text>
                {!isEditing.username ? (
                  <TouchableOpacity
                    onPress={() =>
                      setIsEditing(prev => ({ ...prev, username: true }))
                    }>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'black',
                      }}>
                      {username}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TextInput
                    style={{ fontWeight: 'bold', fontSize: 16 }}
                    onChangeText={text => handleChange('username', text)}
                    value={username}
                    onBlur={() =>
                      setIsEditing(prev => ({ ...prev, username: false }))
                    }
                    autoFocus={true}
                  />
                )}
              </View>
              {isValid.username !== null && (
                <Image
                  source={
                    isValid.username === true
                      ? require('../images/check.png')
                      : require('../images/cross.png')
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            </View>

            {/* Email Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: 70,
                borderColor: '#F9F9F9',
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 10,
                padding: 10,
                backgroundColor: '#fff',
                justifyContent: 'space-between',
              }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontWeight: 'normal', color: '#9B9B9B', fontSize: 16 }}>
                  Email:
                </Text>
                {!isEditing.Email ? (
                  <TouchableOpacity
                    onPress={() =>
                      setIsEditing(prev => ({ ...prev, Email: true }))
                    }>
                    <Text
                      style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>
                      {Email}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TextInput
                    style={{ fontWeight: 'bold', fontSize: 16 }}
                    onChangeText={text => handleChange('email', text)}
                    value={Email}
                    onBlur={() => setIsEditing(prev => ({ ...prev, Email: false }))}
                    autoFocus={true}
                  />
                )}
              </View>
              {isValid.Email !== null && (
                <Image
                  source={
                    isValid.Email === true
                      ? require('../images/check.png') 
                      : require('../images/cross.png') 
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            </View>

            {/* Password Input */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: 70,
                borderColor: '#F9F9F9',
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 10,
                padding: 10,
                backgroundColor: '#fff',
                justifyContent: 'space-between',
              }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontWeight: 'normal', color: '#9B9B9B', fontSize: 16 }}>
                  Password:
                </Text>
                {!isEditing.password ? (
                  <TouchableOpacity
                    onPress={() =>
                      setIsEditing(prev => ({ ...prev, password: true }))
                    }>
                    <Text
                      style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>
                      {password ? '••••••' : ''}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TextInput
                    style={{ fontWeight: 'bold', fontSize: 16 }}
                    onChangeText={text => handleChange('password', text)}
                    value={password}
                    onBlur={() =>
                      setIsEditing(prev => ({ ...prev, password: false }))
                    }
                    autoFocus={true}
                    secureTextEntry={true}
                  />
                )}
              </View>
              {isValid.password !== null && (
                <Image
                  source={
                    isValid.password === true
                      ? require('../images/check.png') 
                      : require('../images/cross.png') 
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            </View>


         

          {/* Already accountBtn */}
          <TouchableOpacity
            style={{
              marginTop: 12,
              width: '100%',
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginRight: -45,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: '#222222',
                fontSize: 16,
                fontWeight: '450',
                marginRight: 10,
              }}>
              Already have an account?
            </Text>
            <Image
              source={require('../images/round.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>

          {/* SignUp accountBtn */}
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
            onPress={signUp}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>




       {/* Social Login Section */}
       <View style={{marginTop: 10}}>
            <Text style={{fontSize: 17, textAlign: 'center', color: '#222'}}>
              Or log in with a social account
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                gap: 20
              }}>
              <TouchableOpacity style={{ 
                width: 92,
                height: 64,
                backgroundColor: '#ffff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              
                
              
               }}>
                <Image
                  source={require('../images/google.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 92,
                height: 64,
                backgroundColor: '#ffff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              }}>
                <Image
                  source={require('../images/facebook.png')}
                  style={{width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>
          </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
