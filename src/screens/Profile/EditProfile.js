import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class EditProfile extends Component {
    render() {
        return (
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: "90%",
                    marginTop: windowWidth * 0.1
                }}>
                    <View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "500",
                            color: "#999"
                        }}>Thông tin tài khoản</Text>
                    </View>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        // width:""
                        justifyContent: "space-between",
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: "#1f1f39",
                            fontWeight: "500"
                        }}>Số điện thoại</Text>
                        <Text style={{
                            fontSize: 18,
                            color: "#999",
                            fontWeight: "500"
                        }}>096*****70</Text>
                    </TouchableOpacity>
                    <View style={{
                        marginTop: 20
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 18,
                                color: "#1f1f39",
                                fontWeight: "500"
                            }}>Email</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 20
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 18,
                                color: "#1f1f39",
                                fontWeight: "500"
                            }}>Mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        borderColor: "#999",
                        borderWidth: 1,
                        width: windowWidth * 0.9,
                        opacity: 0.2,
                        marginTop: 20
                    }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
