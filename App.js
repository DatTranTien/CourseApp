import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Community from './src/screens/Community/Community';
import Course from './src/screens/Course/Course';
import DetailCourse from './src/screens/Course/DetailCourse';
import ShowTab from './src/screens/Course/ShowTab';
import TabSession from './src/screens/Course/TabSession';
import Home from './src/screens/Home/Home';
import Intro2 from './src/screens/Intro/Intro2';
import Intro3 from './src/screens/Intro/Intro3';
import Slide from './src/screens/Intro/Slide';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/Login/SignUp';
import SignUpSuccess from './src/screens/Login/SignUpSuccess';
import Navigation from './src/screens/Navigation/Navigation';
import TabBottom from './src/screens/Navigation/TabBottom';
import Payment from './src/screens/Payment/Payment';
import TabPayment from './src/screens/Payment/TabPayment';
import ChangePass from './src/screens/Profile/ChangePass';
import EditProfile from './src/screens/Profile/EditProfile';
import OTPPass from './src/screens/Profile/OTPPass';
import Profile from './src/screens/Profile/Profile';
import auth, { firebase } from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import configureStore from './src/screens/Redux/Store';
import PlayVideo from './src/screens/Course/PlayVideo';
import ChatbotAuto from './src/screens/Course/Chatbot';
import { StartupTime } from 'react-native-startup-time';
import { getTimeSinceStartup } from 'react-native-startup-time';
import Time from './src/screens/Course/Time';
import ReadCourse from './src/screens/Course/ReadCourse';
import TrackPlay from './src/screens/Course/TrackPlay';
import NoticeIOS from './src/screens/Community/Notifications/NoticeIOS';
import MyCourse from './src/screens/Course/MyCourse';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  // GoogleAuthProvider
} from '@react-native-google-signin/google-signin';
import Help from './src/screens/Profile/Help';

// import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";



function App() {
  const store = configureStore()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(async() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Provider store={store}>
        <Navigation init="slide" />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
    <Navigation init="tabBottom"/>
    </Provider>
    // <Help/>
    // <TestMomo/>
    // <MyCourse/>
    // <NoticeIOS/>
    // <Time/>
    // <DetailCourse/>
    // <Chatbot/>
    // <ChatbotAuto/>
    // <PlayVideo/>
  );
}
export default App
