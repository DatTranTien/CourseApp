import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyGroup from './Group/MyGroup';
import Notice from './Notifications/Notice';
const Tab = createMaterialTopTabNavigator();



export default function TabCommunity() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator 
            initialRouteName="Nhóm"
            screenOptions={{
                tabBarActiveTintColor: '#163AF8',
                tabBarLabelStyle: { fontSize: 14,  },
              }}>
                <Tab.Screen name="Nhóm" component={MyGroup}  />
                {/*chuyển notice thành blog */}
                <Tab.Screen name="Bài Blog" component={Notice} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}