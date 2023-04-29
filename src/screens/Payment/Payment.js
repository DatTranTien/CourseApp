import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import TabPayment from './TabPayment';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Payment extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Image source={require('../../assets/common/MBBank.png')} style={{ width: windowWidth * 1.02, height: windowHeight * 0.28, marginTop: windowHeight * 0.07 }} />
                <TabPayment />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
