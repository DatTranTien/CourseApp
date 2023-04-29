import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native'
import ShowTab from './ShowTab';
import TabSession from './TabSession';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLession } from '../Redux/Action';
import configureStore from '../Redux/Store';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import PlayVideo from './PlayVideo';
import { Actions } from 'react-native-router-flux';
import WebView from 'react-native-webview';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { fakeAccount } from '../Api/FakeAccount';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class DetailCourse extends Component {
    constructor(props) {
        super(props)
        this.videoPlayer = React.createRef(null);
        this.state = {
            url: [],
            duration: 0,
            isFullScreen: false,
            isLoading: true,
            paused: false,
            playerState: PLAYER_STATES.PLAYING,
            currentTime: 0,
            urlWeb: "",
            statusMail: false,
            userInfo: "",
            userInfoEmail: {},
            // pause:"../../assets/DetailCourse/pause.png"
        };
        // store.subscribe(() => {
        //     // When state will be updated(in our case, when items will be fetched), 
        //     // we will update local component state and force component to rerender 
        //     // with new data.
        // let value=JSON.stringify(configureStore().getState().Lession.Lession.toString(),
        //     this.setState({url:value})
        //   });
    }

    getCurrentUserInfo = async () => {
        try {
            const currentUser = await GoogleSignin.getCurrentUser();
            if (currentUser != null) {
                this.setState({ userInfo: currentUser });
                fakeAccount.account.forEach(element => {
                    if (element.email == currentUser.user.email) {
                        this.setState({
                            statusMail: true
                        })
                       
                    }
                });
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
     componentDidMount() {
        let a = JSON.stringify(configureStore().getState().Lession.Lession)
        this.setState({ url: this.state.url.push(a) })
        this.getCurrentUserInfo()
       
    }

    componentWillReceiveProps(nextProps) {
        // console.log("next props===--->",nextProps.Lession.Lession)
        if (this.state.urlWeb == null) {
            this.setState({ urlWeb: "https://www.youtube.com/watch?v=XPXVVuGJDBY&list=PLfYC8O62g9LNgic6OQ7-3jM2s1YDNASbK" })
        }
        this.setState({ urlWeb: nextProps.Lession.Lession })
    }

    // componentWillMount(){

    // }
    // componentDidMount() {
        
    //     // Alert.alert(this.state.url[0])

    // }
    //  onSeek = (seek) => {
    //      this.videoPlayer?.current.seek(seek);
    // };

    onSeeking = (currentVideoTime) => this.setState({ currentTime: currentVideoTime });

    onPaused = (newState) => {
        this.setState({ paused: !this.state.paused })
        //  this.setState({playerState:newState})
    };

    onReplay = () => {
        // this.videoPlayer?.current.seek(0);
        this.setState({ currentTime: 0 })
        if (Platform.OS === 'android') {
            this.setState({ playerState: PLAYER_STATES.PAUSED })
            this.setState({ paused: true })
        } else {
            this.setState({ playerState: PLAYER_STATES.PLAYING })
            this.setState({ paused: false })
        }
    };

    // }

    render() {
        const { item } = this.props
        return (
            <SafeAreaView style={{ backgroundColor: "#FFE7EE", }}>
                {/* <View style={{
                    backgroundColor: "#FFE7EE",
                    // flex: 1
                }}> */}
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        // marginTop: windowHeight * 0.08
                    }} >
                        {/* <View style={{
                            width: windowWidth,
                            height: windowHeight * 0.3
                        }} > */}
                        {/* <PlayVideo /> */}
                        
                                <WebView
                                    mediaPlaybackRequiresUserAction={true}
                                    style={{
                                        width: windowWidth,
                                        height: windowHeight * 0.45
                                    }}
                                    source={{ uri: this.state.urlWeb ? this.state.urlWeb : "https://www.youtube.com/watch?v=XPXVVuGJDBY&list=PLfYC8O62g9LNgic6OQ7-3jM2s1YDNASbK&index=1" }}
                                />
                            
                        
                        {/* </View> */}
                    </View>
                    {/* <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity
                            onPress={() => this.setState({ readeMore: windowHeight * 0.7 })}
                        >
                            <FontAwesomeIcon
                                name='angle-double-down'
                                size={50}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View> */}

                    <View style={{
                        width: windowWidth,
                        marginBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>

                        {/* <TouchableOpacity
                        onPress={()=>{
                            Actions.jump("play")
                        Alert.alert("Mách bạn: Quay ngang máy để có trải nghiệm tốt hơn!")
                        }}
                        style={{ flexDirection: "row", backgroundColor: "#ffe7", padding: 10 }}>
                            <Image source={require('../../assets/Course/iconFull.png')} style={{ width: 25, height: 25 }} />
                            <Text style={{
                                fontSize: 18,
                                color: "#1f1f39",
                                fontWeight: "600"
                            }}>Mở to màn hình</Text>
                        </TouchableOpacity> */}
                        {this.state.urlWeb?
                        (<TouchableOpacity
                            onPress={() => {
                                item.detail.forEach(element => {
                                    if (element.url==this.state.urlWeb) {
                                        Actions.readCourse({item:element})
                                        // console.log("======>",element.readCourse.img)
                                    }
                                });
                                
                                // Actions.readCourse({item:item.detail})
                            }}
                            style={{ flexDirection: "row", backgroundColor: "#ffe7", padding: 10 }}>
                            <Image source={require('../../assets/Course/iconFull.png')} style={{ width: 25, height: 25 }} />
                            <Text style={{
                                fontSize: 18,
                                color: "#1f1f39",
                                fontWeight: "600"
                            }}>Đọc bài viết</Text>
                        </TouchableOpacity>):null}
                    </View>


                    <View style={{
                        backgroundColor: "#FFF",
                        width: windowWidth,
                        height: windowHeight * 0.6,
                        marginTop: -windowHeight * 0.01,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        alignItems: "center"
                    }}>

                        <View style={{
                            width: windowWidth * 0.9,
                            marginTop: 15
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <View>
                                    <Text style={{
                                        color: "#1f1f39",
                                        fontWeight: "600",
                                        fontSize: 20
                                    }}>{item.titleCourse}</Text>
                                    <Text style={{ color: "#858597", fontSize: 14, marginTop: 5 }}>{item.time}</Text>
                                </View>
                                {this.state.statusMail
                                ?null
                                :<Text style={{
                                    color: "#3d5cff",
                                    fontSize: 20,
                                    fontWeight: "600",
                                }}>
                                    {item.price}đ
                                </Text> }
                            </View>
                        </View>
                        <View style={{
                            height: 1,
                            width: windowWidth * 0.9,
                            borderColor: "#999",
                            borderWidth: 1,
                            opacity: 0.2,
                            marginTop: 5
                        }} />



                        <View style={{
                            width: "90%",
                            height: "100%"
                        }}>
                            <ShowTab item={item} />

                        </View>


                    </View>

                </ScrollView>
                {this.state.statusMail?
                null
                : 
                <View style={{
                    backgroundColor: "#FFF",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    paddingBottom: windowHeight*0.05,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TouchableOpacity
                    onPress={()=>Actions.payment()}
                    style={{
                        backgroundColor: "#3D5CFF",
                        borderRadius: 10,
                        // width:windowWidth*0.3,
                        paddingVertical: 15,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        marginTop: 20,
                        width: "90%"
    
                    }}>
                        <Text style={{
                            color: "#FFF",
                            fontSize: 16
                        }}>Mua ngay</Text>
                    </TouchableOpacity>
                </View>
                } 
                {/* </View> */}
            </SafeAreaView>

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
export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse)