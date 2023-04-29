import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AboutCourse extends Component {
    render() {
        const { item } = this.props
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior={"automatic"}
                style={{
                    // flex: 1,
                    // backgroundColor:"red",
                    height:windowHeight
                }} >
                <Text style={{
                    color: "#1f1f39",
                    fontWeight: "600",
                    fontSize: 20
                }}>
                    Về khoá học
                </Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentInsetAdjustmentBehavior={"automatic"}
                    style={{
                        height: windowHeight * 0.9,
                        marginTop: 15,

                        // flex:1
                    }}>

                    <Text style={{
                        fontWeight: "400",
                        fontSize: 18,
                        color: "#1F1F39",
                        lineHeight: windowHeight * 0.03
                        // lineHeight:windowHeight*0.03
                    }}>
                        {item.infoCourse}
                    </Text>
                </ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
