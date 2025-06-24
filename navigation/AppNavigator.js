import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from "../screens";
import { ProfileScreen } from "../screens";
import { OrderList } from "../screens";

const Tab = createBottomTabNavigator();

// 直接导出底部标签导航器
export const AppStack = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
      },
      headerShown: true,
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerTitleAlign: 'center',
    }}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons 
            name={focused ? 'home' : 'home-outline'} 
            size={size} 
            color={color} 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="OrderList" 
      component={OrderList}
      options={{
        title: 'Orders',
        tabBarLabel: 'Orders',
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons 
            name={focused ? 'basket' : 'basket-outline'} 
            size={size} 
            color={color} 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        title: 'My Profile',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons 
            name={focused ? 'person' : 'person-outline'} 
            size={size} 
            color={color} 
          />
        ),
      }}
    />
  </Tab.Navigator>
);