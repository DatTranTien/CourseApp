import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { fakeAccount } from '../Api/FakeAccount';
import auth, { firebase } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
    {
        id: 1,
        title: 'First Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 3,
        title: 'Second Item',
    },
    {
        id: 4,
        title: 'Second Item',
    },
    {
        id: 5,
        title: 'Second Item',
    },
];
export default class Exercise extends Component {

    constructor(props) {
        super(props)

        this.state = {
            statusMail: false,
            userInfo: "",
            userInfoEmail: {},
        }
    }

    getCurrentUserInfo = async () => {
        try {
            const currentUser = await GoogleSignin.getCurrentUser();
            if (currentUser != null) {
                this.setState({ userInfo: currentUser });
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

   async componentDidMount() {
      await  this.getCurrentUserInfo()
        fakeAccount.account.forEach(element => {
            if (element.email == this.state.userInfo.user.email) {
                this.setState({
                    statusMail:true
                })
            }
        });
    }

    render() {
        const { item } = this.props
        return (
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} >
                <View
                    pointerEvents={this.state.statusMail ? null : 'none'}
                    style={{
                        width: windowWidth * 0.9,
                        maViewrginTop: 15
                    }}>
                    {item.exercise.map((el) => (
                        <View>
                            <TouchableOpacity
                                onPress={() => Actions.exeChatbot({ practice: el.practice })}
                                style={{
                                    flexDirection: "row",
                                    marginTop: 15,
                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    marginLeft: 10
                                }}>
                                    <Text style={{
                                        color: "#B8B8D2",
                                        fontSize: 26,
                                        fontWeight: "500"
                                    }}>{el.id}</Text>
                                    <View style={{ marginLeft: 10 }}>
                                        <View style={{
                                            width: windowWidth * 0.65,

                                        }}>
                                            <Text style={{
                                                color: "#1F1F39",
                                                fontSize: 16
                                            }}>{el.title}</Text>
                                        </View>
                                        <Text style={{ color: "#3D5CFF", fontSize: 16 }}>{el.time}</Text>
                                    </View>
                                </View>
                                <Image source={require('../../assets/DetailCourse/homeWork.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <View style={{
                                height: 1,
                                width: windowWidth * 0.9,
                                borderColor: "#999",
                                borderWidth: 1,
                                opacity: 0.2,
                                marginTop: 5
                            }} />
                        </View>

                    ))}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
