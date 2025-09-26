import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login.js';
import Register from './src/screens/Register.js';
import Home from './src/screens/Home.js';
import Favorite from './src/screens/Favorite.js';
import Shop from './src/screens/Shop.js';
import List from './src/screens/List.js';
import Profile from './src/screens/Profile.js';
import { Image } from 'react-native';

const HomeIcon = require('./src/assets/Home.png');
const FavoriteIcon = require('./src/assets/Love.png');
const ShopIcon = require('./src/assets/Shop.png');
const ListIcon = require('./src/assets/transaction.png');
const AccountIcon = require('./src/assets/Account.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        tabBarActiveTintColor: '#fff',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#DCF3E5',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeIcon}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#474747ff' : '#afafafff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={FavoriteIcon}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#474747ff' : '#afafafff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ShopIcon}
              style={{
                width: 25,
                height: 28,
                tintColor: focused ? '#474747ff' : '#afafafff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ListIcon}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#474747ff' : '#afafafff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AccountIcon}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#474747ff' : '#afafafff',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
