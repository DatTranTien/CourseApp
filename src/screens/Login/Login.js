import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux';
// import * as firebase from "firebase";
// import { auth } from '../../../setup';
// import 'firebase/auth';
// import 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { LoginManager } from "react-native-fbsdk-next";
import { Profile } from "react-native-fbsdk-next";
import { Settings } from 'react-native-fbsdk-next';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPass: false,
            loading: false,
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        Settings.initializeSDK();
    }

    checkValidate = () => {
        // Actions.jump("tabBottom")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(this.state.email) === false) {
            Alert.alert(
                'Đăng nhập không thành công!',
                'Email không hợp lệ! Hãy kiểm tra lại phần nhập gmail bạn nhé!',
                [
                    { text: 'OK' },
                ],
            )
            return false;
        }
        else {
            // Alert.alert("helo")

            auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                // auth()
                // .createUserWithEmailAndPassword('d1@gmail.com', '123456')
                .then(() => {
                    Alert.alert(
                        'Đăng nhập thành công!',
                        'Chào mừng bạn! ',
                        'Chúc bạn học tập tốt!',
                    )
                    this.setState({ loading: true })
                    setTimeout(() => {
                        Actions.jump("tabBottom")
                        this.setState({ loading: false })
                    }, 3000);
                })
                .catch(error => {
                    Alert.alert("Tài khoản hoặc mật khẩu không đúng!")
                });


        }
    }
    // onLoginFinished = () => {
    //     (error, result) => {
    //         if (error) {
    //             console.log("login has error: " + result.error);
    //         } else if (result.isCancelled) {
    //             console.log("login is cancelled.");
    //         } else {
    //             AccessToken.getCurrentAccessToken().then(
    //                 (data) => {
    //                     console.log(data.accessToken.toString())
    //                 }
    //             )
    //         }
    //     }
    // }


    authGoogle = async () => {
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
       auth().signInWithCredential(googleCredential);
    }


    signIn = async () => {
        try {
            this.googleSignIn()
            // this.authGoogle()
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
            Actions.push("tabBottom")
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    googleSignIn() {
        GoogleSignin.configure({
            // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
            webClientId: '507828569515-m3a1bag69othurbrhuiqmh49b3983tso.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            // accountName: '', // [Android] specifies an account name on the device that should be used
            iosClientId: '507828569515-olpbvgov3n29bgqefukj3nfd4uq0s1fm.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
            googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
            openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
            profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
        });

    }
    onFacebookButtonPress = async () => {
        // // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    console.log(
                        "Login success with permissions: " +
                        result.grantedPermissions.toString()
                    );
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // this.onLoginFinished()

        //         Profile.getCurrentProfile().then(
        //             function(currentProfile) {
        //               if (currentProfile) {
        //                 Alert.alert("The current logged user is: " +
        //                   currentProfile.name
        //                   + ". His profile id is: " +
        //                   currentProfile.userID
        //                 );
        //               }
        //             }
        //           );
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    render() {
        return (
            <View style={{
                // justifyContent:"center",
                alignItems: "center",
                paddingTop: windowHeight * 0.1,
            }}>
                {this.state.loading ? < ActivityIndicator size="small" color="#0000ff" /> : null}
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
                            <TextInput
                                onChangeText={(pass) => this.setState({ password: pass })}
                                placeholder="******" style={{
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
                                    <Image source={require('../../assets/Login/monkeyOpen.png')} style={{ width: 20, height: 20, marginTop: 20, marginLeft: -30 }} />
                                    :
                                    <Image source={require('../../assets/Login/monkeyClose.png')} style={{ width: 20, height: 20, marginTop: 20, marginLeft: -30 }} />}

                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => Actions.jump("forget")} style={{
                            marginTop: 20
                        }}>
                            <Text style={{ color: "#858597" }}>Quên mật khẩu ?</Text>
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
                            }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16
                            }}>Đăng nhập</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            marginTop: 20,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                            onPress={() => Actions.jump("signup")}>
                            <Text style={{ color: "#858597" }}>Chưa có tài khoản? Đăng ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{ color: "#858597" }}>Hoặc đăng nhập bằng</Text>
                        </TouchableOpacity>
                        {/* <LoginButton
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        console.log("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        console.log("login is cancelled.");
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(
                                            (data) => {
                                                console.log(data.accessToken.toString())
                                            }
                                        )
                                    }
                                }
                            }
                            onLogoutFinished={() => console.log("logout.")} /> */}

                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <View style={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                flexDirection: "row",
                                marginTop: 20,
                                width: "50%",
                            }}>

                                <TouchableOpacity
                                    onPress={() => this.signIn()}
                                >
                                    <Image source={require('../../assets/Login/google.png')} style={{ width: 40, height: 40 }} />
                                </TouchableOpacity>
                                {/* <TouchableOpacity
                                   onPress={() => this.onFacebookButtonPress().then(() => Alert.alert('Signed in with Facebook!'))}
                                >
                                    <Image source={require('../../assets/Login/facebook.png')} style={{ width: 40, height: 40 }} />
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({})
