

import React from 'react';
import { Alert, Platform, StyleSheet, Text } from 'react-native';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import {
    Scene,
    Router,
    Actions,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import Slide from '../Intro/Slide';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Forget from '../Login/Forget';
import Home from '../Home/Home';
import TabBottom from './TabBottom';
import Profile from '../Profile/Profile';
import OTPPass from '../Profile/OTPPass';
import ChangePass from '../Profile/ChangePass';
import EditProfile from '../Profile/EditProfile';
import Course from '../Course/Course';
import Result from '../Course/Result';
import DetailCourse from '../Course/DetailCourse';
import PlayVideo from '../Course/PlayVideo';
import ChatbotAuto from '../Course/Chatbot';
import ReadCourse from '../Course/ReadCourse';
import BlogDetail from '../Community/Notifications/Blog';
import MyCourse from '../Course/MyCourse';
import showAll from '../Community/Notifications/ShowAll';
import MyBlog from '../Community/Notifications/WebView';
import Help from '../Profile/Help';
import Payment from '../Payment/Payment';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scene: {
        backgroundColor: '#F5FCFF',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const Navigation = ({ init }) => {
    // const {init}=prop
    return (
       
            <Router>
                <Stack  >
                    <Scene key="slide" component={Slide} hideNavBar={true} back={true} />
                    <Scene key="login" component={Login} title="Đăng nhập" back={true} />
                    <Scene key="signup" component={SignUp} title="Đăng ký" back={true} />
                    <Scene key="play" component={PlayVideo} title="Phóng to" back={true} />
                    <Scene key="forget" component={Forget} title="Lấy lại mật khẩu" back={true} />
                    <Scene key="detailCourse" component={DetailCourse} title="Thông tin khoá học" back={true} />
                    <Scene key="tabBottom" initial={init == "tabBottom" ? true : false} component={TabBottom} hideNavBar={true} drawer={false} />
                    <Scene key="profile" component={Profile} hideNavBar={true} />
                    <Scene key="course" component={Course} hideNavBar={true} />
                    <Scene key="myCourse" component={MyCourse} back={true} renderTitle="" />
                    <Scene key="payment" component={Payment} back={true} renderTitle="Thanh toán" />
                    <Scene key="readCourse" component={ReadCourse} title="Bài đọc" back={true} />
                    <Scene key="blog" component={BlogDetail} renderTitle="" back={true} />
                    <Scene key="myBlog" component={MyBlog} renderTitle="Bài đọc" back={true} />
                    <Scene key="showAll" component={showAll} renderTitle="Tất cả bài viết" back={true} />
                    <Scene key="exeChatbot" component={ChatbotAuto} back={true} title="Luyện tập" />
                    <Scene key="help" component={Help} back={true} title="Trợ giúp" />
                    <Scene key="result" component={Result} hideNavBar={true} />
                    <Scene key="editProfile" component={EditProfile} back={true} />
                    <Scene key="otpPass" component={OTPPass} back={true} />
                    <Scene key="changePass" component={ChangePass} back={true} />
                </Stack>
            </Router>
        
    );

}

export default Navigation;