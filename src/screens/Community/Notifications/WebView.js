import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class MyBlog extends Component {
  render() {
      const {url}=this.props
    return <WebView source={{ uri: url }} />;
  }
}