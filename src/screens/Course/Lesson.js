import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fakeCourse } from '../Api/FakeCourse';
import configureStore from '../Redux/Store';
import auth, { firebase } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { fakeAccount } from '../Api/FakeAccount';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Lesson extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: props.item,
            statusMail: false,
            userInfo: "",
            userInfoEmail: {},
            pause: 0
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
        await this.getCurrentUserInfo()
        fakeAccount.account.forEach(element => {
            if (element.email == this.state.userInfo.user.email) {
                this.setState({
                    statusMail: true
                })
            }
        });
    }

    render() {
        const { Lession, changeLessionCourse, item, changePauseCourse, pause } = this.props
        // Alert.alert(this.state.item)
        return (
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} >
                <View
                    pointerEvents={this.state.statusMail ? null : 'none'}
                    style={{
                        width: windowWidth * 0.9,
                        marginTop: 15
                    }}>
                    {item.detail.map((item1) => (
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    // Actions.jump("play")
                                    // let { actions } = this.props;
                                    // actions.changeLession("555")
                                    // this.props.
                                    console.log("item.url===>", typeof (item1.url))
                                    changeLessionCourse(item1.url)
                                    changePauseCourse(item1.id)
                                    // console.log("sau khi diaspatch",configureStore.)
                                    //   const store=  configureStore()
                                    //    store.dispatch(changeLession("https://www.youtube.com/watch?v=Z3vjrGDjvS4&list=PLmbxe7ftoDqSNf5yGMhbDNjIZIM5mQ7Ow&index=101"))
                                    //  dispatch.(changeLession("https://www.youtube.com/watch?v=Z3vjrGDjvS4&list=PLmbxe7ftoDqSNf5yGMhbDNjIZIM5mQ7Ow&index=101"))
                                    // this.props.changeLession("https://www.youtube.com/watch?v=Z3vjrGDjvS4&list=PLmbxe7ftoDqSNf5yGMhbDNjIZIM5mQ7Ow&index=101")
                                    console.log("====>>>>>>>" + JSON.stringify(Lession.pause))
                                }}
                                style={{
                                    flexDirection: "row",
                                    marginTop: 15,
                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    marginLeft: 10,
                                    width: windowWidth * 0.75
                                }}>
                                    <Text style={{
                                        color: "#B8B8D2",
                                        fontSize: 26,
                                        fontWeight: "500"
                                    }}>{item1.id}</Text>
                                    <View style={{ marginLeft: 10 }}>
                                        <View style={{
                                            width: "100%",
                                            // marginLeft: 10

                                        }}>
                                            <Text style={{
                                                color: "#1F1F39",
                                                fontSize: 16
                                            }}>{item1.title}</Text>
                                        </View>
                                        <Text style={{ color: "#3D5CFF", fontSize: 16 }}>{item1.time}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    {Lession.pause == item1.id ? <Image source={require('../../assets/DetailCourse/pause.png')} style={{ width: 30, height: 30 }} /> : <Image source={require('../../assets/DetailCourse/play.png')} style={{ width: 30, height: 30 }} />}
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                // height: 1,
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
const mapStateToProps = state => ({
    Lession: state.Lession,
});
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(ActionCreators, dispatch),
//   });
const mapDispatchToProps = (dispatch) => ({
    changeLessionCourse: (Lession) => {
        dispatch({ type: "CHANGE_LESSION", payload: Lession })
    },
    changePauseCourse: (pause) => {
        dispatch({ type: "CHANGE_PAUSE", payload: pause })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Lesson)
