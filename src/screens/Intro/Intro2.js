import React, { Component } from 'react'
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Intro2 extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    // width:windowWidth,
                    // flex:0.1,
                    position: "absolute",
                    zIndex: 1,
                    top: windowHeight * 0.1,
                    right: windowWidth * 0.1
                }}>
                    <TouchableOpacity
                    onPress={()=>Actions.jump("login")}
                    style={{
                        backgroundColor: "#3d5cff",
                        borderRadius: 20,
                        padding: 10,
                        // opacity:0.5
                    }}>
                        <Text style={{
                            color: "#FFF",
                            fontSize: 18
                        }}>Bỏ qua</Text>
                    </TouchableOpacity>
                </View>
                <View style={
                    {
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                } >
                    <Image source={require('../../assets/SlideIntro/intro2.png')} style={{ width: windowWidth * 0.6, height: windowWidth * 0.6, marginBottom: 20 }} />
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={
                            {
                                fontWeight: "600",
                                fontSize: 22,
                                color: "#1F1F39"
                            }
                        }>
                            Nâng cấp bản thân ngay hôm nay!
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "400",
                            marginTop: 20
                        }}>
                            Tính ứng dụng cao trong thực tiễn
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}


