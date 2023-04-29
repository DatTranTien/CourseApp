import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image } from 'react-native'
import Content from './Content';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class SixMonth extends Component {
    render() {
        return (
            <Content money={"000.000"}/>
        )
    }
}

const styles = StyleSheet.create({})
