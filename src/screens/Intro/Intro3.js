import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Intro3 extends Component {
    render() {
        return (
            <View style={
                {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }
            } >
                <Image source={require('../../assets/SlideIntro/intro3.png')} style={{ width: windowWidth * 0.6, height: windowWidth * 0.6, marginBottom: 20 }} />
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
                        Nâng cấp bản thân
                    </Text>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontWeight: "600",
                            fontSize: 22,
                            color: "#1F1F39"
                        }}>
                            ngay hôm nay!
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "400",
                        marginTop: 20
                    }}>
                        Hãy bắt đầu bằng việc học 5 phút
                    </Text>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "400",
                            marginTop: 5
                        }}>
                            mỗi ngày bạn nhé!
                        </Text>
                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-around",
                    width:windowWidth,
                    marginTop:windowHeight*0.1
                }}>
                    <TouchableOpacity
                     onPress={()=>Actions.jump("signup")}
                    style={{
                        backgroundColor: "#3D5CFF",
                        borderRadius: 10,
                        width:windowWidth*0.3,
                        paddingVertical:10,
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius: 10
                    }}>
                        <Text style={{
                            color: "#FFF",
                            fontSize:16
                        }}>Đăng Ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>Actions.jump("login")}
                    style={{
                        backgroundColor: "#999",
                        borderRadius: 10,
                        width:windowWidth*0.3,
                        paddingVertical:10,
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <Text style={{
                            color:"#FFF",
                            fontSize:16
                        }}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

