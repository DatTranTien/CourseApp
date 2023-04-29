import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ChangePass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPass: false
        }
    }

    render() {
        return (
            <View style={{
                width: windowWidth,
                alignItems: "center"
            }}>
                <View style={{
                    marginTop: windowHeight * 0.1,
                    width: "90%",
                }}>
                    <Text style={{ color: "#858597" }}>Mật khẩu</Text>
                    <View style={{ flexDirection: "row", }}>
                        <TextInput placeholder="Nhập mật mã" style={{
                            borderRadius: 10,
                            borderColor: "gray",
                            borderWidth: 1,
                            height: 40,
                            padding: 5,
                            marginTop: 10,
                            width: "100%"
                            // position:"absolute"
                        }}
                            placeholderTextColor="gray"
                            secureTextEntry={this.state.showPass ? false : true}
                        />
                        <TouchableOpacity onPress={() => this.setState({ showPass: !this.state.showPass })}>
                            {this.state.showPass ?
                                <Image source={require('../../assets/Login/showEyes.png')} style={{ width: 20, height: 20, marginTop: 20, marginLeft: -30 }} />
                                :
                                <Image source={require('../../assets/Login/previewPass.png')} style={{ width: 20, height: 20, marginTop: 20, marginLeft: -30 }} />}

                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "#3D5CFF",
                    borderRadius: 10,
                    width: windowWidth * 0.3,
                    paddingVertical: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 20
                }}
                    onPress={() => {
                        Alert.alert(
                           
                            "Đổi mật khẩu thành công!",
                            "Đăng nhập lại thôi nào!",
                            [
                                { text: "OK", onPress: () =>Actions.jump("login") }
                            ]
                        );
                    }}>
                    <Text style={{
                        color: "#FFF",
                        fontSize: 16
                    }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
