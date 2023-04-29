import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import TabCommunity from './TabCommunity'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Community extends Component {
    render() {
        return (
            <View style={{
                // width:"90%",
                height: windowHeight,
                marginTop:windowHeight*0.05
                // backgroundColor:"#FFF"
            }}>
                <TabCommunity/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
