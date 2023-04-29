import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ScrollView, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
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
        id: 2,
        title: 'Second Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
];

export default class MyCourse extends Component {

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
            <ScrollView
                style={{
                    backgroundColor: "#FFF",
                    flex: 1,
                    marginBottom:windowHeight*0.07
                }}
            >
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
                        }}> Khoá học của tôi </Text>
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
                        }}>trantiendat@gmail.com</Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // backgroundColor:"red",
                        width: windowWidth * 0.9,
                        flexWrap: "wrap"
                    }}>
                        {DATA.map(() => (
                            <View style={{
                                backgroundColor: "#eee",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                                // paddingBottom: windowHeight * 0.05,
                                width: windowWidth * 0.9 * 0.4 * 1.1,
                                height: windowHeight * 0.2 * 1.1,
                                paddingHorizontal: windowWidth * 0.02,
                                marginTop: windowHeight*0.07
                            }}>
                                <Image source={require('../../assets/Profile/Avatar.png')} style={{ width: windowWidth * 0.15, height: windowHeight * 0.07, }} />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: "500",
                                    color: "#1f1f39",
                                    marginTop: 10
                                }}>Khoá học thiết kế</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({})
