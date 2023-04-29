import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ScrollVieư, Linking, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Help extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phone: "0961223270"
        }
    }



    dialCall = () => {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:0961223270';
        }
        else {
            phoneNumber = 'tel:0961223270';
        }
        // Linking.openURL('tel:8777111223')
        Linking.openURL(phoneNumber);
    };

    render() {
        return (
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: "90%",
                    // marginTop: windowWidth * 0.1
                }}>
                    <View style={{
                        marginTop: windowHeight * 0.05
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "500",
                            color: "#1f1f39"
                        }}>Hỗ Trợ</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.dialCall()}
                        style={{
                            flexDirection: "row",
                            // width:""
                            justifyContent: "space-between",
                            marginTop: 20,
                            alignItems: "center"
                        }}>
                        <Text style={{
                            fontSize: 15,
                            color: "#1f1f39",
                            fontWeight: "500"
                        }}>Số điện thoại</Text>
                        <Text style={{
                            fontSize: 18,
                            color: "#999",
                            fontWeight: "500"
                        }}>0961 223 270</Text>
                        <Image source={require('../../assets/Profile/iconRight.png')} style={{ width: windowWidth * 0.05, height: windowHeight * 0.04 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const subject = "Phản hồi về app ";
                            const message = "Thân gửi admin,...";
                            Linking.openURL(`mailto:trantiendatbk@gmail.com?subject=${subject}&body=${message}`)
                        }}
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 20
                        }}>
                        <Text style={{
                            fontSize: 15,
                            color: "#1f1f39",
                            fontWeight: "500"
                        }}>Email</Text>
                        <Text style={{
                            fontSize: 18,
                            color: "#999",
                            fontWeight: "500"
                        }}>trantiendatbk@gmail.com</Text>
                        <Image source={require('../../assets/Profile/iconRight.png')} style={{ width: windowWidth * 0.05, height: windowHeight * 0.04 }} />
                    </TouchableOpacity>
                    {/* <View style={{
                        marginTop: 20
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 18,
                                color: "#1f1f39",
                                fontWeight: "500"
                            }}>Email</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: "#999",
                            fontWeight: "500"
                        }}>
                            Nếu có thắc mắc hãy liên hệ trực tiếp qua số điện thoại hoặc email! chúng tôi sẽ giải quyết sớm nhất có thể!
                        </Text>
                        {/* <TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                color: "#1f1f39",
                                fontWeight: "500"
                            }}>Mật khẩu</Text>
                        </TouchableOpacity> */}
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
