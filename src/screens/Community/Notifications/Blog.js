import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class BlogDetail extends Component {
    render() {
        const {title,content,uri,time} = this.props
        return (
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{
                    flex: 1,
                    alignItems: "center"
                }}>
                    <View style={{
                        width: "90%",
                        alignItems:"center"
                    }}>
                            <Text style={{
                                color: "#1f1f39",
                                fontWeight: "700",
                                fontSize: 20,
                                marginBottom: 15
                            }}>{title}</Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 15
                        }}>

                            <Image source={{uri:uri}} style={{
                                width: windowWidth * 0.8,
                                height: windowHeight * 0.25,
                                marginTop: 15
                            }} />

                            <Text style={{
                                color: "#1f1f39",
                                // fontWeight: "700",
                                fontSize: 20,
                                marginTop: 15,
                                // lineHeight:15
                            }}>
                                {content}
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
