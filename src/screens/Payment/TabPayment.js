import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import OneMonth from './OneMonth';
import SixMonth from './SixMonth';
import OneYear from './OneYear';
const Tab = createMaterialTopTabNavigator();



export default function TabPayment() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Gói 1 tháng"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: { fontSize: 14 },
              }}>
                <Tab.Screen name="Gói 1 tháng" component={OneMonth} />
                <Tab.Screen name="Gói 6 tháng" component={SixMonth} />
                <Tab.Screen name="Gói 1 năm" component={OneYear} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}