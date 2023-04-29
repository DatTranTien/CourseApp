import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SignUpSuccess extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: "#1f1f39",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                opacity: 0.6
            }}>

                <View style={{
                    width: windowWidth / 1.3,
                    height: windowHeight / 3,
                    backgroundColor: "white",
                    borderRadius: 10,
                    // justifyContent:"center",
                    alignItems: "center"
                }}>
                    <Image source={require('../../assets/Login/iconSuccess.png')} style={{ width: 65, height: 65, marginTop: 35 }} />
                    <Text style={{
                        color: "#1f1f39",
                        fontSize: 16,
                        fontWeight: "700",
                        marginTop: 10
                    }}>Thành công</Text>
                    <View style={{
                        width: "70%",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <Text style={{
                            color: "#858597",
                            lineHeight: 17,
                            marginTop: 15,
                            fontSize:16
                        }}>Chúc mừng bạn đã tạo </Text>
                        <Text style={{
                            color: "#858597",
                            lineHeight: 17,
                            marginTop: 10,
                            fontSize:16
                        }}>tài khoản thành công!</Text>
                    </View>
                    <View style={{
                        width:"90%"
                                        }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#3D5CFF",
                            borderRadius: 10,
                            // width:windowWidth*0.3,
                            paddingVertical: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginTop: 20
                        }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16
                            }}>Xong</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
