import React from 'react';
import { Image , TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screen/SignUp";
import Login from "../screen/Login"; 
import Forget from "../screen/Forget"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Shop from '../screen/Shop';
import Bag from '../screen/Bag';
import Favourite from '../screen/Favourite';
import Profile from '../screen/Profile';
import Check from '../screen/HomeTab/Check';
import Viewall from '../screen/HomeTab/Viewall';
import Search from '../screen/ShopTab/Search';
import Women from '../screen/ShopTab/Women';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Create a stack navigator for Home tab
const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <HomeStack.Screen name='Viewall' component={Viewall}  options={{ headerShown: false }}/>
    <HomeStack.Screen name='Check' component={Check}  options={{ headerShown: false }}/>
  </HomeStack.Navigator>
);
const ShopStackNavigator = () => (
  <ShopStack.Navigator>
    <ShopStack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
    <ShopStack.Screen name='Search' component={Search}  options={{ headerShown: false }}/>
    <ShopStack.Screen name='Women' component={Women}  options={{ headerShown: false }}/>
   
   
    
  </ShopStack.Navigator>
);



const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarStyle: {
        height: 83,
        paddingBottom: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNavigator} 
      options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../images/home-active.png') 
                : require('../images/home.png')
            }
            style={{
              width: 40,
              height: 50,
              resizeMode: 'contain',
            }}
          />
         
        ),
        unmountOnBlur: true,
      }}
    />


    <Tab.Screen
  name="Shop"
  component={ShopStackNavigator}
  options={({ navigation }) => ({
    headerShown: true, 
    headerTitle: 'Categories', 
    headerTitleAlign: 'center',
   
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()} 
        style={{ paddingLeft: 10 }}
      >
        <Image
          source={require('../images/icon.png')} 
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
    ),

    // Customize the search icon
    headerRight: () => (
      <TouchableOpacity
      onPress={() => navigation.navigate('Search')} 
        style={{ paddingRight: 10 }}
      >
        <Image
          source={require('../images/search.png')} 
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
    ),

    // Hide tab label and customize the tab icon
    tabBarLabel: () => null,
    tabBarIcon: ({ focused }) => (
      <Image
        source={
          focused
            ? require('../images/shop-active.png')
            : require('../images/shop.png')
        }
        style={{
          width: 40,
          height: 50,
          resizeMode: 'contain',
        }}
      />
    ),
    unmountOnBlur: true,
  })}
/>

    <Tab.Screen
      name="Bag"
      component={Bag}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../images/bag-active.png') 
                : require('../images/bag.png')
            }
            style={{
              width: 40,
              height: 50,
              resizeMode: 'contain',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={Favourite}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../images/Favorite-active.png') 
                : require('../images/favories.png')
            }
            style={{
              width: 40,
              height: 50,
              resizeMode: 'contain',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require('../images/profile-active.png') 
                : require('../images/profile.png')
            }
            style={{
              width: 40,
              height: 50,
              resizeMode: 'contain',
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
