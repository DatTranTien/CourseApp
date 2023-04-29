import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Intro1 from './Intro1';
import { Actions } from 'react-native-router-flux';


const slides = [
  {
    key: 1,
    //   title: 'Title 1',
    //   text: 'Description.\nSay something cool',
    page: <Intro1 />
    //   backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    page: <Intro2 />
    //   title: 'Title 2',
    //   text: 'Other cool stuff',
    //   image: require('./assets/2.jpg'),
    //   backgroundColor: '#febe29',
  },
  {
    key: 3,
    page: <Intro3 />
    //   title: 'Rocket guy',
    //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //   image: require('./assets/3.jpg'),
    //   backgroundColor: '#22bcb5',
  }
];

export default class Slide extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showRealApp: false
    }
  }

  _renderItem = ({ item }) => {
    return (
      item.page
      // <View style={styles.slide}>
      //   <Text style={styles.title}>{item.title}</Text>
      //   <Image source={item.image} />
      //   <Text style={styles.text}>{item.text}</Text>
      // </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  _renderDoneButton = () => {
    return (
      // <View style={styles.buttonCircle}>
      <TouchableOpacity style={{
        backgroundColor: "#3d5cff",
        borderRadius: 20,
        padding: 10,
        // opacity:0.5
      }}
      onPress={()=>Actions.push("login")}
      >
        <Text style={{
          color: "#FFF",
          fontSize: 18
        }}>Xong</Text>
      </TouchableOpacity>
      // </View>
    );
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider
        renderDoneButton={this._renderDoneButton}
        activeDotStyle={{ backgroundColor: "#3d5cff" }}
        renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
    }
  }
}
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});