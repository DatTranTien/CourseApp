import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPass: false,
            email: "",
            pass: ""
        }
    }


    checkValidate = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(this.state.email) === false) {
            Alert.alert(
                'Đăng ký không thành công!',
                'Email không hợp lệ! Hãy kiểm tra lại phần nhập gmail bạn nhé!',
                [
                    { text: 'OK' },
                ],
            )
            return false;
        }
        else {
            if (this.state.pass.length == 0) {
                Alert.alert(
                    'Đăng ký không thành công!',
                    'Mật khẩu không hợp lệ! Hãy kiểm tra lại phần nhập mật khẩu bạn nhé!',
                    [
                        { text: 'OK' },
                    ],
                )
                return false;
            } else {
                var rules = [
                //     {
                //     exp: /[0-9]/,
                //     msg: 'must contain at least one digit'
                // }, 
                // {
                //     exp: /[a-z]/,
                //     msg: 'must contain at least one lowercase'
                // }, 
                // {
                //     exp: /[A-Z]/,
                //     msg: 'must contain at least one uppercase'
                // }, 
                // {
                //     exp: /[!%&*\s]/,
                //     msg: 'must contain at least one special move'
                // },
                 {
                    exp: /^.{6,20}$/,
                    msg: 'must be 6-20 characters long'
                }];

                var pass = true;
                for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i];
                    if (!rule.exp.test(this.state.pass)) {
                        pass = false;
                        alert("Error: " + rule.msg);//alert the error message
                        break;
                    }
                }
                if (pass == true) {
                    auth()
                        .createUserWithEmailAndPassword(this.state.email, this.state.pass)
                        .then(() => Actions.login())
                        .then(() => {
                            // Actions.signUp()
                            Alert.alert(
                                'Đăng ký thành công!',
                                "Đăng nhập ngay thôi nào!",
                                [
                                    { text: "Đăng nhập ngay!", onPress: () =>{} }
                                ]
                            )
                        })
                        .catch(error => {
                            Alert.alert("Email đã tồn tại ! Hoặc không đúng! Hoặc mật khẩu không đủ 5 ký tự ")
                        });
                }

            }

        }

    }

    render() {
        return (
            <View style={{
                // justifyContent:"center",
                alignItems: "center",
                paddingTop: windowHeight * 0.1,
            }}>
                <View style={{
                    width: "90%"
                }}>


                    <View>
                        <Text style={{ color: "#858597" }}>Email</Text>
                        <TextInput
                            onChangeText={(text) => {
                                this.setState({ email: text })
                            }}
                            placeholder="trantiendatbk@gmail.com" style={{
                                borderRadius: 10,
                                borderColor: "gray",
                                borderWidth: 1,
                                height: 40,
                                padding: 5,
                                marginTop: 10,
                            }}
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={{
                        marginTop: 20,
                    }}>
                        <Text style={{ color: "#858597" }}>Mật khẩu</Text>
                        <View style={{ flexDirection: "row", }}>
                            <TextInput placeholder="*******" style={{
                                borderRadius: 10,
                                borderColor: "gray",
                                borderWidth: 1,
                                height: 40,
                                padding: 5,
                                marginTop: 10,
                                width: "100%"
                            }}
                                onChangeText={(t) => this.setState({ pass: t })}
                                placeholderTextColor="gray"
                                secureTextEntry={this.state.showPass ? false : true}
                            />
                            <TouchableOpacity onPress={() => this.setState({ showPass: !this.state.showPass })}>
                                {this.state.showPass ?
                                    <Image source={require('../../assets/Login/monkeyOpen.png')} style={{ width: 20, height: 20, marginTop: 20, marginLeft: -30 }} />
                                    :
                                    <Image source={require('../../assets/Login/monkeyClose.png')} style={{ width: 20, height: 20, marginTop: 20, marginLeft: -30 }} />}

                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            marginTop: 20
                        }}
                            onPress={() => Actions.jump('login')}>
                            <Text style={{ color: "#858597" }}>Bạn đã có tài khoản? Đăng nhập ngay!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: "#3D5CFF",
                            borderRadius: 10,
                            // width:windowWidth*0.3,
                            paddingVertical: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginTop: 20
                        }}
                            onPress={() => {
                                this.checkValidate()
                            }}
                        >
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16
                            }}>Đăng Ký</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({})
