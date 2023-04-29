// import { firebase } from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native'
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { fakeData } from '../Api/FakeData';
import CardBlog from '../Community/Notifications/CardBlog';
import { fakeBlog } from '../Api/FakeBlog';
import ActivityIndicator from '../../component/ActivityIndicator';
import { fakeSearchCourse } from '../Api/FakeSearchCourse';

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
];

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: "",
            obj:{},
            loading:false
        }
    }

    // showAll=()=>{
        
    // }


    getCurrentUserInfo = async () => {
        try {
            //   const userInfo = await GoogleSignin.signInSilently();
            //   this.setState({ userInfo:userInfo });

            const currentUser = await GoogleSignin.getCurrentUser();
            // this.setState({ currentUser });
            this.setState({ userInfo: currentUser });
            console.log("userInfo======>", this.state.userInfo.user.email)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
                Alert.alert("erro1")
            } else {
                Alert.alert("erro2")
            }
        }
    };

    // getCurrentUserInfo = async () => {
    //     const currentUser = await GoogleSignin.getCurrentUser();
    //     this.setState({ currentUser });
    //   };


    render() {
        return (
            this.state.loading?
            <ActivityIndicator/>
            :<ScrollView style={{
                backgroundColor: "#FFF",
                flex: 1
            }}>
                <View style={{ backgroundColor: "#3d5cff", height: windowHeight * 0.2, alignItems: "center", width: windowWidth, justifyContent: "center", paddingTop: windowHeight * 0.1, }}>
                    <View style={{
                        width: "90%",
                        flexDirection: "row",
                        // backgroundColor: "pink",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }} >
                        <View>
                            <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "600" }}>Hi, My friend!</Text>
                            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: "400" }}>Bắt đầu học</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Tôi")}>
                            <Image source={require('../../assets/Home/iconAvatar.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{ backgroundColor: "#FFF", borderRadius: 10, width: "90%", height: windowHeight * 0.1, justifyContent: "center", alignItems: "center", marginTop: windowHeight * 0.04 }}>
                        <View style={{ flexDirection: "row", marginTop: windowHeight * 0.01, justifyContent: "space-between", width: "90%" }}>
                            <Text style={{ color: "#858597" }}>Thời gian học hôm nay</Text>
                            <Text style={{ color: "#858597" }}>Khoá học của tôi</Text>
                        </View>
                        <View style={{
                            marginTop: windowHeight * 0.005,
                            width: "90%",
                            // backgroundColor:"red"
                        }} >
                            <Text style={{ fontSize: 20, fontWeight: "600", color: "#1e1e39" }}>46min <Text style={{ fontWeight: "400", fontSize: 10, color: "#858597" }}>/ 60min</Text> </Text>
                        </View>
                        <View style={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 5
                        }}>
                            <Progress.Bar color="#FF5106" progress={0.3} width={windowWidth * 0.8} />
                        </View>
                    </View> */}
                </View>
                <View style={{
                    marginTop: windowHeight * 0.06,
                    alignItems:"center"
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "90%"
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 18,
                            color: "#1f1f39"
                        }}>Bài viết mới nhất</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({obj:fakeBlog.topic[0]})
                                // this.setState({loading:true})
                                setTimeout(() => {
                                    Actions.showAll({item:this.state.obj})
                                    this.setState({loading:false})
                                }, 200);

                            }
                            }>
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 18,
                                color: "#3d5cff",
                                // textDecorationLine: "underline"
                            }}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={fakeBlog.topic[0].detail}
                            renderItem={({ item }) => (
                                <CardBlog title={item.title} uri={item.uri} time={item.time} content={item.content} url={item.url} />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    </ScrollView>
                </View>

                <View style={{
                    width: "100%",
                    alignItems: "center"
                }}>
                    <View style={{
                        marginTop: windowHeight * 0.03,
                        width: "90%",
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 20,
                                color: "#1f1f39"
                            }}>Kế hoạch học tập</Text>
                            {/* <TouchableOpacity
                                onPress={() => {

                                    console.log("dap an", this.state.userInfo)

                                    // this.getCurrentUserInfo()
                                    // console.log("value infor "+this.state.userInfo)
                                    Actions.myCourse()
                                }
                                }
                            >
                                <Text style={{
                                    fontWeight: "500",
                                    fontSize: 20,
                                    color: "#3d5cff"
                                }}>Tất cả</Text>
                            </TouchableOpacity> */}
                        </View>
                        {fakeSearchCourse.course.map((item) => (
                            <TouchableOpacity
                                onPress={() => Actions.detailCourse({item:item})}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: 15
                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <Image source={require('../../assets/Home/iconAvatar.png')} style={{ width: 30, height: 30 }} />
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: "500",
                                        marginLeft: 5
                                    }}>{item.titleCourse}</Text>
                                </View>
                                {/* <Text style={{ color: "#1f1f39", fontSize: 16, fontWeight: "400" }}>40<Text style={{ color: "#1f1f39", fontSize: 16, opacity: 0.5 }} >/48</Text></Text> */}
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Cộng đồng")} style={{ marginTop: 15 }}>
                            <Image source={require('../../assets/Home/groupCommunity.png')} style={{ width: "100%", height: windowHeight * 0.15 }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
