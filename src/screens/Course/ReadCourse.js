import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { Actions } from 'react-native-router-flux';
import TrackPlay from './TrackPlay';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ReadCourse extends Component {
    render() {
        const {item}=this.props
        return (
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{
                    flex: 1,
                    // marginTop: windowHeight * 0.1,
                    // justifyContent:"center",
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
                            }}>{item.readCourse.title}</Text>
                        <TrackPlay audio={item.readCourse.audio} />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            {/* <Text style={{
                                color: "#1f1f39",
                                fontWeight: "700",
                                fontSize: 20
                            }}>Đi qua thanh xuân nhìn lại, bạn đã thay đổi như thế nào?</Text> */}

                            <Image source={{uri:item.readCourse.img}} style={{
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
                               {item.readCourse.content}
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
