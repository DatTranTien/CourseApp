import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Login from '../Login/Login';
import auth, { firebase } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: "",
            userInfoEmail:{},
            LogGG: false
        }
    }

    getCurrentUserInfo = async () => {
        try {
            const currentUser = await GoogleSignin.getCurrentUser();
            if (currentUser != null) {
                this.setState({ userInfo: currentUser, LogGG: true });
            }
            else {
                const user = firebase.auth().currentUser;
                user.providerData.forEach((userInfo) => {
                    this.setState({
                        userInfoEmail: userInfo
                    })
                });
            }
        } catch (error) {
        }
    };

componentDidMount(){
    this.getCurrentUserInfo()
}

    signOutGoogle = async () => {
        try {
            await GoogleSignin.signOut();
            this.setState({ user: null });
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        return (
            <ScrollView>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1
                }}>
                    <View style={{
                        width: windowWidth * 0.9,
                        marginTop: windowWidth * 0.1
                    }}>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: "600",
                            color: "#1f1f39"
                        }}> Tài khoản </Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Profile/Avatar.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1, marginTop: windowHeight * 0.05 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "90%",
                        marginTop: windowHeight * 0.05
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "500",
                            color: "#1f1f39"
                        }}>{this.state.LogGG ? this.state.userInfo.user.email : this.state.userInfoEmail.email}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "90%",
                        marginTop: windowHeight * 0.05
                    }}
                        onPress={async () => {
                            await this.signOutGoogle().then(() => Actions.jump("login"));
                            auth()
                                .signOut()

                                .then(() => Actions.jump("login"));
                        }}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#1f1f39"
                        }}>Đăng xuất</Text>
                        <Image source={require('../../assets/Profile/iconRight.png')} style={{ width: windowWidth * 0.05, height: windowHeight * 0.04 }} />
                    </TouchableOpacity>
                    <View style={{
                        borderColor: "#999",
                        borderWidth: 1,
                        width: windowWidth * 0.9,
                        opacity: 0.2,
                        marginTop: 10
                    }} />


                    {this.state.LogGG ? null :
                        <TouchableOpacity
                            onPress={() => {
                                Actions.push("otpPass")
                            }}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "90%",
                                marginTop: windowHeight * 0.05
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    color: "#1f1f39"
                                }}
                            >Đổi mật khẩu</Text>
                            <Image source={require('../../assets/Profile/iconRight.png')} style={{ width: windowWidth * 0.05, height: windowHeight * 0.04 }} />
                        </TouchableOpacity>
                    }
                    {this.state.LogGG?null:
                    <View style={{
                        borderColor: "#999",
                        borderWidth: 1,
                        width: windowWidth * 0.9,
                        opacity: 0.2,
                        marginTop: 10
                    }} />
                    }
                    

                    <TouchableOpacity
                    onPress={()=>Actions.help()}
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "90%",
                        marginTop: windowHeight * 0.05
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#1f1f39"
                        }}>Trợ giúp</Text>
                        <Image source={require('../../assets/Profile/iconRight.png')} style={{ width: windowWidth * 0.05, height: windowHeight * 0.04 }} />
                    </TouchableOpacity>
                    <View style={{
                        borderColor: "#999",
                        borderWidth: 1,
                        width: windowWidth * 0.9,
                        opacity: 0.2,
                        marginTop: 10
                    }} />
                    <TouchableOpacity
                        onPress={() => this.getCurrentUserInfo()}
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%",
                            marginTop: windowHeight * 0.05
                        }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#1f1f39"
                        }}>Đánh giá app</Text>
                        <Image source={require('../../assets/Profile/iconRight.png')} style={{ width: windowWidth * 0.05, height: windowHeight * 0.04 }} />
                    </TouchableOpacity>
                    <View style={{
                        borderColor: "#999",
                        borderWidth: 1,
                        width: windowWidth * 0.9,
                        opacity: 0.2,
                        marginTop: 10
                    }} />
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({})
