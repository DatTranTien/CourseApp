import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'
import TabSession from './TabSession'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ShowTab extends Component {

    render() {
        const {item}=this.props
        return (
            <View style={{
                width: "100%",
                height: "80%",
                paddingBottom:windowHeight*0.06
            }}>
                <TabSession item={item} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
